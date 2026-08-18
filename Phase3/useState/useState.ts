// useState is a generic function — the same generic pattern from Phase 2 (fetchData<T>),
//  just built into React. It lets you tell TypeScript what type the state value holds, so
//  both the value and its setter function are correctly typed.
// const [count, setCount] = useState<number>(0);

// How it works
// Basic usage — often TypeScript can infer it, no need to annotate
// const [count, setCount] = useState(0); // TS infers T = number from the initial value
// const [name, setName] = useState("");  // TS infers T = string
// const [isOpen, setIsOpen] = useState(false); // TS infers T = boolean

// object or union state — needs explicit generic
// interface User {
//   name: string;
//   age: number;
// }

// const [user, setUser] = useState<User | null>(null);

// Here, TypeScript can't infer the type from null alone — null alone would infer as just
//  null, not User | null. You must be explicit so the state can later hold either a real 
// User or stay null.

// setUser({ name: "Alice", age: 30 }); // ✅ matches User
// setUser(null);                        // ✅ matches null
// setUser("Alice");                     // ❌ Error — string isn't part of User | null


// Arrays in state
// const [todos, setTodos] = useState<Todo[]>([]);

// An empty array [] alone would infer as never[] or any[] (remember the "empty array" 
// gotcha from Type Inference) — so annotate explicitly when starting with an empty array 
// that will later hold typed objects.


// Union of literal types in stat
// const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

