# TypeScript Phase 4: TypeScript with Express

Phase 4 introduces backend development with TypeScript and Express. You will learn how to type HTTP requests and responses, organize an API into focused modules, handle errors safely, and build a small todo REST API.

## Overview

- Build an Express server with TypeScript.
- Type route parameters, request bodies, and response data.
- Model application data with interfaces and literal union types.
- Separate routes, data, configuration, middleware, and error classes.
- Handle asynchronous route errors consistently.
- Practice these concepts in the `type-todo-api` project.

## What You Will Learn

| Topic | What to Learn |
| --- | --- |
| Express with TypeScript | Create a typed HTTP server and connect Express middleware. |
| Request and Response Types | Type route parameters, request bodies, and response payloads. |
| Interfaces and Unions | Model todos with an interface and restrict status values with a union type. |
| REST API Routes | Implement create, read, update, and delete operations for todos. |
| Middleware | Parse JSON requests and handle errors in a central location. |
| Custom Errors | Create application errors with an HTTP status code and message. |
| Async Route Handling | Forward rejected promises from route handlers to Express error middleware. |
| Project Structure | Organize a backend project into routes, data, configuration, and shared types. |

## Practice Project

The `type-todo-api` folder contains an Express REST API backed by an in-memory todo list. Each todo has an `id`, `title`, and `status`, where status can be `active`, `inactive`, or `completed`.

### Available Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/todos` | Get all todos. |
| `GET` | `/todos/:id` | Get one todo by ID. |
| `POST` | `/todos` | Create a todo with a `title`. |
| `PUT` | `/todos/:id` | Update a todo's `title`. |
| `DELETE` | `/todos/:id` | Delete a todo by ID. |

## Prerequisites

Before starting Phase 4, review the TypeScript fundamentals from Phase 1 and the advanced type concepts from Phase 2. Familiarity with HTTP methods, JSON, REST APIs, and basic Node.js will also help.

## Suggested Learning Order

1. Review `src/types.ts` to see how interfaces and literal union types model API data.
2. Read `src/data/todoStore.ts` and `src/config/env.ts` to understand typed application state and configuration.
3. Study `src/routes/todoRoutes.ts` and trace each CRUD endpoint.
4. Read `src/errors/AppError.ts`, `src/middleware/asyncHandler.ts`, and `src/middleware/errorHandler.ts` to understand error flow.
5. Run the API and test each endpoint with a REST client such as Postman or curl.

## How to Run the Project

Open a terminal in `Phase4/type-todo-api` and run:

```bash
npm install
npm run dev
```

The server runs on the configured port, usually `http://localhost:3000`. To check the project without starting the server, run:

```bash
npm run build
```

## Example Request

```http
POST /todos
Content-Type: application/json

{
	"title": "Learn Express with TypeScript"
}
```

Read each `.ts` file, experiment with the API, and intentionally introduce type errors to see how TypeScript protects route contracts and application data.
