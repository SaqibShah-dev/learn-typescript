// In plain JavaScript React, props are just an object passed into a component — no 
// restrictions on what it contains:

// function Button(props) {
//   return <button onClick={props.onClick}>{props.label}</button>;
// }

// No safety here — you could call <Button label={42} /> and nothing warns you, even though 
// label is meant to be text.

// In TypeScript, you define an interface describing exactly what props a component expects
//  — same pattern as everything else you've been doing with interface, just applied to 
//  component inputs.

// interface ButtonProps {
//   label: string;
//   onClick: () => void;
// }

// function Button({ label, onClick }: ButtonProps) {
//   return <button onClick={onClick}>{label}</button>;
// }

// How it works
// The type goes right after the destructured parameter
// function Button({ label, onClick }: ButtonProps) {
//   return <button onClick={onClick}>{label}</button>;
// }

// This is just a function type annotation (from Function Types) applied to a React 
// component — { label, onClick } is the destructured props object, : ButtonProps tells 
// TS what shape it must have.

// Using the component — TS enforces the props
// <Button label="Click me" onClick={() => console.log("clicked")} /> // ✅

// <Button label={42} onClick={() => {}} /> 
// // ❌ Error: Type 'number' is not assignable to type 'string'

// <Button label="Click me" /> 
// // ❌ Error: Property 'onClick' is missing

// Optional props (same ? from Optional Properties)
// interface ButtonProps {
//   label: string;
//   onClick: () => void;
//   disabled?: boolean; // optional — button works fine without it
// }

// function Button({ label, onClick, disabled }: ButtonProps) {
//   return <button onClick={onClick} disabled={disabled}>{label}</button>;
// }

// Default values for optional props
// function Button({ label, onClick, disabled = false }: ButtonProps) {
//   return <button onClick={onClick} disabled={disabled}>{label}</button>;
// }

// Same default-parameter pattern from Function Types (greeting = "Hello"), just applied 
// inside the destructured props.

// Same default-parameter pattern from Function Types (greeting = "Hello"), just applied
//  inside the destructured props.

// children prop — special, and worth knowing the correct type
// interface CardProps {
//   title: string;
//   children: React.ReactNode; // NOT React.ReactChild — that's outdated/deprecated
// }

// function Card({ title, children }: CardProps) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       {children}
//     </div>
//   );
// }

// React.ReactNode covers anything renderable — strings, numbers, JSX elements, arrays of 
// elements, null, undefined. It's the correct, current type for "whatever gets passed 
// between the component's open/close tags."

// Union types in props (very common — restricting to specific values)
// interface ButtonProps {
//   label: string;
//   variant: "primary" | "secondary" | "danger"; // literal union, from your Literal Types topic
// }

// <Button label="Delete" variant="danger" />  // ✅
// <Button label="Delete" variant="warning" /> // ❌ Error — not one of the 3 allowed values

// Avoid React.FC
// ❌ BAD — React.FC is considered outdated/discouraged in modern TS+React
// const MyComponent: React.FC<ButtonProps> = (props) => { ... }

// // ✅ GOOD — plain function with typed destructured props
// function MyComponent({ label, onClick }: ButtonProps) { ... }

