# PROJECT_CONTEXT.md
> Permanent memory. Do NOT modify unless the product vision changes.

## Project
**Name:** Puskar OS
**Type:** AI-powered personal operating system (not a dashboard)

## Purpose
Replace fragmented tools (Notion, GitHub tabs, Calendar, ChatGPT, Kaggle) with one focused workspace that answers every morning: *"What should I do today to become a better AI Builder?"*

## Target Users
V1: Puskar (personal use). Future: AI students, builders, startup engineers, developers.

## Core Philosophy
- One mission per day — Learn → Build → Ship → Reflect → Repeat
- Clarity over complexity. Every screen answers: "What do I do next?"
- AI assists; never replaces thinking
- Every feature must reduce distractions or increase meaningful progress
- Beautiful, minimal, calm — OS feel, not website feel

## Approved UI Reference
`UIDESIGN/Approved/puskar_os_mission_briefing`
- Near-black (`#0A0A0A`) base, layered glass cards, soft blue accent (`#ADC6FF`)
- Inter (UI) + Geist (code/labels) typography
- 80px collapsed icon sidebar, Hero Mission Briefing section, Daily Progression timeline, Floating AI Prompt Bar
- Material Symbols Outlined icons (design only — production uses Lucide React)

## Tech Stack
React + Vite + TypeScript | Tailwind CSS + shadcn/ui | Framer Motion | Lucide React | React Router DOM

## Architecture
Feature-based. Each module (home, career, learning, projects, fitness) is a self-contained feature folder.

## Development Rules
- Desktop-first, dark mode default, light mode supported
- Mission Briefing is the default landing experience
- No feature ships unless it helps the user become a better AI Builder
- Memory files are the source of truth — do NOT reread /docs or /design unless explicitly told they changed
