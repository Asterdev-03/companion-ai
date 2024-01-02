# SaaS Companion AI

✨ Live demo : [https://companion-ai-app.vercel.app](https://companion-ai-app.vercel.app)

This is a repository for a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe

## Introduction

Welcome to our revolutionary SaaS AI Platform – a dynamic hub crafted with Next.js 13, React, Tailwind, Prisma, and Stripe. Unleash your creativity with Tailwind design, animations, and responsive UI. Dive into advanced features, including Clerk authentication, react-hook-form for seamless form handling, and a Conversation Generation Tool for crafting AI companions with distinct personalities. Discover the art of route handling, data fetching, and relationship management. Stay tuned for upcoming innovations like Image, Video, and Music Generation Tools, Stripe subscriptions, and a free tier with API limits. Transform your ideas into engaging conversations with our intuitive guide!

## Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Conversation Generation Tool (Replicate AI)
- Page loading state
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

## Future Scope:
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Music Generation Tool (Replicate AI)
- Stripe monthly subscription
- Free tier with API limiting

## Prerequisites

Before running this project, make sure you have the following software installed on your system:

- Node.js (v18 or higher)
- pnpm (v8.10.5 or higher)

## Installation

**NB**: All the mentioned steps must be done within the `main` branch only.
To get started with the app, you will need to clone this repository and install the dependencies. You can do this by running the following commands in your terminal:

```sh
git clone https://github.com/Asterdev-03/companion-ai.git
cd companion-ai
```

### Setup .env file

Make sure you signup for Cloudinary, Clerk, Replicate, OpenAI, Upstash and Pinecone account. Collect the secret keys and urls, and add the following in the file.

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=*******************
CLERK_SECRET_KEY=*******************

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

OPENAI_API_KEY=**********************************
REPLICATE_API_TOKEN=*****************************

PINECONE_API_KEY=********************************
PINECONE_ENVIRONMENT=****************************
PINECONE_INDEX=**********************************

UPSTASH_REDIS_REST_URL=**************************
UPSTASH_REDIS_REST_TOKEN=************************

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=***************

DATABASE_URL=************************************

```

### Setup Prisma

Add PostgreSQL Database (I used Supabase)

```shell
pnpx prisma db push

```

Seed categories:
```shell
node scripts/seed.ts
```

## Usage

Once you have installed the dependencies and set the environment variables, you can run the app by running the following command:

```sh
pnpm run dev
```

This will start and open the app in your default browser. This may take 2-3 minutes.

## Building

If you want to build the app for production, you can run the following command:

```sh
pnpm run build
```

This will generate a production-ready build of the app in the `dist` directory.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
