// What it is
// When you handle DOM events in React (clicks, input changes, form submits), TypeScript
//  needs to know what kind of event object you're receiving — so it can give you the right
//   properties and methods, and catch mistakes.

// Event types tell TypeScript which kind of event occurred and on which kind of
//  element — so event.target (and other event properties) come back correctly typed, 
// instead of generically unsafe.


// function Button() {
//   function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
//     console.log(event.clientX, event.clientY);
//   }
//   return <button onClick={handleClick}>Click</button>;
// }

// React.MouseEvent<HTMLButtonElement> says: "this is a mouse event, specifically happening
//  on an HTML button element."

// How it works
// The general pattern
// React event types generally follow: React.<EventCategory><HTMLElementType>

// React.MouseEvent<HTMLButtonElement>   // clicking a button
// React.ChangeEvent<HTMLInputElement>   // typing in a text input
// React.FormEvent<HTMLFormElement>      // submitting a form
// React.KeyboardEvent<HTMLInputElement> // pressing a key while focused on an input

// The <HTMLElementType> part matters because different HTML elements have different 
// properties. TypeScript uses it to give you accurate autocomplete for event.target
//  specifically.

// Click events
// function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
//   console.log("Button clicked at", event.clientX, event.clientY);
// }

// <button onClick={handleClick}>Click me</button>

// Input change events — the most common one you'll write constantly
// function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//   console.log(event.target.value); // TS knows .value exists because it's an HTMLInputElement
// }

// <input onChange={handleChange} />

// Form submit events
// function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//   event.preventDefault(); // stops the page from reloading — always available on FormEvent
//   console.log("Form submitted");
// }

// <form onSubmit={handleSubmit}>...</form>

// Keyboard events
// function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
//   if (event.key === "Enter") {
//     console.log("Enter pressed");
//   }
// }

// <input onKeyDown={handleKeyDown} />

// textarea change (different element type!)
// function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) { ... }

// select change
// function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) { ... }


// inline — no annotation needed, TS infers from context
// <input onChange={(e) => setValue(e.target.value)} />