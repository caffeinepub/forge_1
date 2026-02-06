import Array "mo:core/Array";
import Iter "mo:core/Iter";
import List "mo:core/List";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  type JobId = Text;
  type Rating = Nat;
  type PageContext = Text;
  type CommentId = Nat;
  type AliasId = Nat;

  type RatingSubmission = {
    jobId : JobId;
    rating : Rating;
  };

  type RatingCount = {
    jobId : JobId;
    count : Nat;
  };

  public type UserProfile = {
    name : Text;
  };

  public type LastForgedTask = {
    jobId : JobId;
    taskDescription : Text;
  };

  module JobId {
    public func compare(id1 : JobId, id2 : JobId) : Order.Order {
      Text.compare(id1, id2);
    };
  };

  module JobUserPair {
    public func compare(a : (JobId, Principal), b : (JobId, Principal)) : Order.Order {
      switch (JobId.compare(a.0, b.0)) {
        case (#equal) { Principal.compare(a.1, b.1) };
        case (other) { other };
      };
    };
  };

  module PageContext {
    public func compare(c1 : PageContext, c2 : PageContext) : Order.Order {
      Text.compare(c1, c2);
    };
  };

  module CommentUserPair {
    public func compare(a : (CommentId, Principal), b : (CommentId, Principal)) : Order.Order {
      switch (Nat.compare(a.0, b.0)) {
        case (#equal) { Principal.compare(a.1, b.1) };
        case (other) { other };
      };
    };
  };

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let ratings = Map.empty<(JobId, Principal), Rating>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  let lastForgedTasks = Map.empty<Principal, LastForgedTask>();

  public type Comment = {
    authorAlias : Text;
    content : Text;
    timestamp : Int;
    pageContext : PageContext;
    upvotes : Nat;
  };

  public type CommentInput = {
    content : Text;
    pageContext : PageContext;
  };

  var nextCommentId = 0;
  var nextAliasId = 1;

  let comments = Map.empty<CommentId, Comment>();
  let principalAliases = Map.empty<Principal, Text>();
  let aliasStatus = Map.empty<AliasId, Bool>();
  let commentUpvotes = Map.empty<(CommentId, Principal), Bool>();

  let aliasPrefixes : [Text] = [
    "Bold",
    "What",
    "That",
    "Big",
    "Super cool",
    "Happy",
    "Sad",
    "Greedy",
    "Smart",
    "Bold",
    "Hungry",
    "Cute",
    "Angry",
    "Lost in the sauce",
    "Calm",
    "Funny",
    "Weird",
    "Tiny",
    "Tall",
    "Cool",
    "Shy",
    "Brave",
    "Clever",
  ];

  let aliasSuffixes : [Text] = [
    "Ant",
    "Dog",
    "Gator",
    "Rat",
    "Tiger",
    "Bear",
    "Lizard",
    "Lion",
    "Cat",
    "Bird",
    "Pig",
    "Cow",
    "Monkey",
    "Wolf",
    "Penguin",
    "Elephant",
    "Rabbit",
    "Horse",
  ];

  // Function to get or generate an alias for a principal
  public shared ({ caller }) func getAlias() : async Text {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be signed in to generate an alias");
    };

    // Check if alias already exists for the principal
    switch (principalAliases.get(caller)) {
      case (?alias) { alias };
      case (null) {
        let newAlias = await generateAlias();
        principalAliases.add(caller, newAlias);
        newAlias;
      };
    };
  };

  // Function to generate a new alias
  func generateAlias() : async Text {
    let prefixIndex = nextAliasId % aliasPrefixes.size();
    let suffixIndex = (nextAliasId / aliasPrefixes.size()) % aliasSuffixes.size();

    let prefix = aliasPrefixes[prefixIndex];
    let suffix = aliasSuffixes[suffixIndex];

    let alias = prefix.concat(" ").concat(suffix);

    nextAliasId += 1;
    alias;
  };

  // Function to add a new comment
  public shared ({ caller }) func addComment(input : CommentInput) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be signed in to add a comment");
    };

    let authorAlias = switch (principalAliases.get(caller)) {
      case (?alias) { alias };
      case (null) {
        let newAlias = await generateAlias();
        principalAliases.add(caller, newAlias);
        newAlias;
      };
    };

    let newComment : Comment = {
      authorAlias;
      content = input.content;
      timestamp = Time.now();
      pageContext = input.pageContext;
      upvotes = 0;
    };

    comments.add(nextCommentId, newComment);
    nextCommentId += 1;
  };

  // Function to get all comments for a specific page context (publicly readable)
  public query func getCommentsByPageContext(pageContext : PageContext) : async [Comment] {
    comments.toArray().map(func((_, comment)) { comment }).filter(func(comment) { comment.pageContext == pageContext });
  };

  // Function to toggle upvote on a comment (set/remove)
  public shared ({ caller }) func upvoteComment(commentId : CommentId) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be signed in to upvote a comment");
    };

    switch (comments.get(commentId)) {
      case (?comment) {
        let upvoteKey = (commentId, caller);
        let hasUpvoted = switch (commentUpvotes.get(upvoteKey)) {
          case (?true) { true };
          case (_) { false };
        };

        let updatedComment = if (hasUpvoted) {
          // Remove upvote
          commentUpvotes.remove(upvoteKey);
          {
            comment with
            upvotes = if (comment.upvotes > 0) { comment.upvotes - 1 } else { 0 };
          };
        } else {
          // Add upvote
          commentUpvotes.add(upvoteKey, true);
          {
            comment with
            upvotes = comment.upvotes + 1;
          };
        };
        comments.add(commentId, updatedComment);
      };
      case (null) {
        Runtime.trap("Comment not found");
      };
    };
  };

  // Legacy functionality (unchanged)

  // Last Forged Task Memory
  public shared ({ caller }) func setLastForgedTask(task : LastForgedTask) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be signed in to save last forged task");
    };
    lastForgedTasks.add(caller, task);
  };

  public query ({ caller }) func getLastForgedTask() : async ?LastForgedTask {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be signed in to fetch last forged task");
    };

    lastForgedTasks.get(caller);
  };

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };

    userProfiles.get(caller);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };

    userProfiles.add(caller, profile);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };

    userProfiles.get(user);
  };

  // Ratings
  public shared ({ caller }) func submitRating(submission : RatingSubmission) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be signed in to submit a rating");
    };
    ratings.add((submission.jobId, caller), submission.rating);
  };

  public query ({ caller }) func getCallerRating(jobId : JobId) : async ?Rating {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be signed in to fetch rating");
    };

    ratings.get((jobId, caller));
  };

  public query ({ caller }) func getRating(jobId : JobId, user : Principal) : async ?Rating {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view other users' ratings");
    };

    ratings.get((jobId, user));
  };
};
