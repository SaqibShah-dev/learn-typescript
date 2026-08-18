// useRef gives you a mutable reference that persists across re-renders without causing 
// the component to re-render when it changes. Most commonly used to directly reference a 
// DOM element (like grabbing an <input> to call .focus() on it).

// const inputRef = useRef<HTMLInputElement>(null);

// How it works
// DOM element refs — the most common use case
// function SearchBox() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   function focusInput() {
//     inputRef.current?.focus(); // `?.` because current might still be null
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={focusInput}>Focus</button>
//     </>
//   );
// }

// Why <HTMLInputElement>(null) and not just <HTMLInputElement>(): refs to DOM elements 
// always start as null — the actual DOM node doesn't exist yet until React renders it and
//  attaches the ref. So the type must allow for that: HTMLInputElement | null.

// Why inputRef.current?.focus() uses optional chaining: this connects directly back to
//  your Optional Properties topic — current might be null (before mount, or if the element
//  unmounts), so TypeScript forces you to check before calling .focus(), exactly like it 
// forced you to check user.email before calling .toUpperCase().

// Mutable value refs
// const renderCount = useRef<number>(0);

// useEffect(() => {
//   renderCount.current += 1; // no `?.` needed — this ref starts with a real value, not 
// null
// });
// When you give useRef an actual starting value (not null), .current is never null, so you
//  don't need the optional chaining — TypeScript knows it's always safely a number.