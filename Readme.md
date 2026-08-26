# Learn TypeScript

A hands-on TypeScript learning path that grows from language fundamentals into typed frontend and backend applications. Each phase contains focused examples, practice code, and a project that combines the ideas covered so far.

## Learning Roadmap

| Phase | Focus | Status |
| --- | --- | --- |
| [Phase 1](Phase1/Readme.md) | TypeScript fundamentals: annotations, inference, objects, interfaces, aliases, unions, and more | Available |
| [Phase 2](Phase2/Readme.md) | Intermediate and advanced types: generics, constraints, narrowing, literal types, enums, and discriminated unions | Available |
| [Phase 3](Phase3/Readme.md) | React with TypeScript: props, state, events, refs, context, custom hooks, and forwarded refs | Available |
| [Phase 4](Phase4/Readme.md) | TypeScript with Express: typed REST routes, middleware, error handling, and project structure | Available |
| Phase 5 | Future learning material | Planned |
| Phase 6 | Future learning material | Planned |

## Repository Map

```text
Phase1/  TypeScript fundamentals and small examples
Phase2/  Advanced type-system patterns and small examples
Phase3/  React + TypeScript examples and todo dashboard
Phase4/  Express + TypeScript examples and todo REST API
Phase5/  Planned material
Phase6/  Planned material
```

Most topic folders contain a `.ts` example and, where applicable, its compiled `.js` output. The main practice projects are:

- [Todo dashboard](Phase3/PracticeProject/todo-dashboard/README.md): a React and Vite frontend.
- [Todo API](Phase4/Readme.md): an Express REST API backed by an in-memory store.

## Getting Started

### Prerequisites

- Node.js and npm
- A code editor with TypeScript support, such as VS Code
- Basic JavaScript familiarity

### Recommended Path

1. Start with [Phase 1](Phase1/Readme.md) if you are new to TypeScript.
2. Read each phase README before opening its examples.
3. Run the examples or projects, then change values and types to observe compiler feedback.
4. Move to the next phase when the current concepts feel familiar.

The repository has no root-level npm project. Install dependencies from the practice project directory you want to run.

## Running the Todo Dashboard

The Phase 3 practice project is a Vite application. From the project directory:

```bash
cd Phase3/PracticeProject/todo-dashboard
npm install
npm run dev
```

Useful checks for the project:

```bash
npm run build
npm run lint
```

## Running the Todo API

The Phase 4 practice project is an Express application. From the API directory:

```bash
cd Phase4/type-todo-api
npm install
npm run dev
```

The API listens on `http://localhost:3000` by default. Build it with:

```bash
npm run build
```

## Learning Goals

By working through this repository, you will build confidence in:

- writing safer JavaScript with TypeScript
- modeling data with precise and reusable types
- understanding how TypeScript narrows and checks values
- applying types to React components and application logic
- reading compiler errors and improving code through experimentation

## Contributing to Your Learning

This is a practice repository, so create additional examples, improve explanations, and record questions as you learn. Keep examples focused, preserve the existing folder structure, and place new material in the phase that best matches its difficulty.
