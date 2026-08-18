// A custom hook is just a regular function (whose name starts with use) that internally 
// uses other hooks like useState/useEffect, and returns something reusable — a value, a 
// tuple, or an object — that multiple components can share. Typing one is really 
// just applying Function Types + Arrays & Tuples to something that happens to use React
//  hooks inside.

// A custom hook is just a typed function that happens to call other hooks inside it — the 
// typing rules are identical to any function or object you've already typed (Function 
// Types, tuples, interfaces). The only "special" part is the use naming convention React 
// relies on to enable hook rules (like conditional-call restrictions), which is a 
// runtime/lint concern, not really a typing concern.


// function useCounter(): [number, () => void] {
//   const [count, setCount] = useState(0);
//   const increment = () => setCount(prev => prev + 1);
//   return [count, increment];
// }

// How it works
// Returning a tuple (matches useState's own pattern)
// function useCounter(initialValue: number = 0): [number, () => void] {
//   const [count, setCount] = useState<number>(initialValue);

//   function increment() {
//     setCount(prev => prev + 1);
//   }

//   return [count, increment];
// }

// Using it, in a component:
// function CounterDisplay() {
//   const [count, increment] = useCounter(0);
//   return <button onClick={increment}>Count: {count}</button>;
// }

// Notice the return type [number, () => void] is a tuple type (from Arrays & Tuples) 
// — position 0 is always the current count, position 1 is always the increment function, 
// exactly mirroring how useState itself returns [value, setter].

// Returning an object instead (often clearer for more than 2 values)
// interface UseCounterResult {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
//   reset: () => void;
// }

// function useCounter(initialValue: number = 0): UseCounterResult {
//   const [count, setCount] = useState<number>(initialValue);

//   const increment = () => setCount(prev => prev + 1);
//   const decrement = () => setCount(prev => prev - 1);
//   const reset = () => setCount(initialValue);

//   return { count, increment, decrement, reset };
// }
// Usage:
// const { count, increment, decrement, reset } = useCounter(10);

// Generic custom hooks — reusable across different data types
// function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
//   const [value, setValue] = useState<T>(() => {
//     const stored = localStorage.getItem(key);
//     return stored ? JSON.parse(stored) : initialValue;
//   });

//   function updateValue(newValue: T) {
//     setValue(newValue);
//     localStorage.setItem(key, JSON.stringify(newValue));
//   }

//   return [value, updateValue];
// }

// const [name, setName] = useLocalStorage<string>("username", "");
// const [user, setUser] = useLocalStorage<User | null>("user", null);


// Custom hook wrapping your Todo app's logic (concrete, familiar example)
// interface UseTodosResult {
//   todos: todo[];
//   addTodo: (title: string) => void;
//   deleteTodo: (id: number) => void;
// }

// function useTodos(): UseTodosResult {
//   const [todos, setTodos] = useState<todo[]>([]);

//   function addTodo(title: string) {
//     const newTodo: todo = { id: todos.length + 1, title, status: "active" };
//     setTodos(prev => [...prev, newTodo]);
//   }

//   function deleteTodo(id: number) {
//     setTodos(prev => prev.filter(t => t.id !== id));
//   }

//   return { todos, addTodo, deleteTodo };
// }

// const { todos, addTodo, deleteTodo } = useTodos();