# Agentic Travel Website Creator

**"The Narendra Experience" Generator**

This is not just a React template; it is a **Master Template & Workflow** designed for Agents (like Google Antigravity, GeminiCLI, CodexCLI, ClaudeCodeCLI) to autonomously generate high-end luxury travel sites.  Has been tested extensively with Google Antigravity.

## The Concept
Code is no longer written by hand. This repository provides:
1.  **The Skeleton:** A hardened, production-ready React/Vite/Tailwind app (`src/`).
2.  **The Brain:** A strict and complete system prompt (`MASTER_WORKFLOW_PROMPT.md`) that teaches an AI Agent
       • Interview the user and generate travel itinerary and assets
       • Strict template driven contract
       • Populate the Skeleton to create the web experience
           
## How to Use (For Humans)
1.  **Clone this repo** to a new folder named after your destination (e.g., `new-project`).
2.  **Open the folder** in your IDE/Agent environment.
3.  **Command the Agent:**
    > "Read `MASTER_WORKFLOW_PROMPT.md` and follow the instructions to create a new destination."
4.  **Answer the Interview:** The Agent will ask you about the destination, vibe, and duration.
5.  **Watch it Build:** The Agent will generate the `itineraryData.js`, fetch assets, and build the site.

## How to Use (For AI Agents)
**READ `MASTER_WORKFLOW_PROMPT.md` FIRST.**
This file contains your Standard Operating Procedure (SOP). Do not deviate.

**CRITICAL:You are typically running *inside* the cloned workspace. Assume the environment is ready and dependencies just need `npm install`.

---
*Powered by React, Vite, Tailwind, and Agentic AI.*
