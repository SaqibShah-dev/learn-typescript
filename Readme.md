# Learn TypeScript

A structured, hands-on TypeScript learning repository that moves from language fundamentals to typed React applications. Each phase contains focused examples, practice code, and progressively more realistic projects.

## Learning Roadmap

| Phase | Focus | Status |
| --- | --- | --- |
| [Phase 1](Phase1/Readme.md) | TypeScript fundamentals: annotations, inference, objects, interfaces, aliases, unions, and more | Available |
| [Phase 2](Phase2/Readme.md) | Intermediate and advanced types: generics, constraints, narrowing, literal types, enums, and discriminated unions | Available |
| [Phase 3](Phase3/Readme.md) | React with TypeScript: props, state, events, refs, context, custom hooks, and forwarded refs | Available |
| Phase 4 | Future learning material | Planned |
| Phase 5 | Future learning material | Planned |
| Phase 6 | Future learning material | Planned |

## Repository Highlights

- Small examples that focus on one TypeScript concept at a time.
- TypeScript source files paired with compiled JavaScript examples where available.
- A React and TypeScript todo dashboard in [Phase 3](Phase3/PracticeProject/todo-dashboard/README.md).
- A gradual progression from basic syntax to reusable, type-safe application code.

## Getting Started

1. Start with [Phase 1](Phase1/Readme.md) if you are new to TypeScript.
2. Read the phase README before opening its examples.
3. Open each `.ts` file and experiment with the code.
4. Introduce small changes or type errors to understand the compiler feedback.
5. Move to the next phase when the current concepts feel familiar.

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

## Learning Goals

By working through this repository, you will build confidence in:

- writing safer JavaScript with TypeScript
- modeling data with precise and reusable types
- understanding how TypeScript narrows and checks values
- applying types to React components and application logic
- reading compiler errors and improving code through experimentation

## Contributing to Your Learning

This is a practice repository, so feel free to create additional examples, improve explanations, and record questions as you learn. Keep examples focused and place new material in the phase that best matches its difficulty.
