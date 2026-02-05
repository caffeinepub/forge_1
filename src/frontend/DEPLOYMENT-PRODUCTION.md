# Production Deployment Guide - Forge AI

This document outlines the production deployment workflow for Forge AI on the Internet Computer.

## Prerequisites

Before deploying to production, ensure you have:

1. **DFX CLI installed** (version 0.15.0 or later)
   ```bash
   dfx --version
   ```

2. **Cycles wallet configured** with sufficient cycles for deployment
   ```bash
   dfx wallet balance
   ```

3. **Internet Identity integration tested** locally

4. **All dependencies installed**
   ```bash
   cd frontend && pnpm install
   ```

## Production Deployment Commands

### 1. Deploy to Mainnet

