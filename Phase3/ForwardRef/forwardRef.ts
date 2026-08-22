// Normally, the ref prop is special in React — you can't just pass it like a regular prop 
// to a custom component; React handles it separately. forwardRef lets your own custom 
// components accept a ref and forward it down to a real DOM element inside them — useful
//  when you wrap a native input in your own styled component, but still want parent 
// components to be able to .focus() it directly.

// const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
//   return <input ref={ref} {...props} />;
// });

// How it works
// The problem forwardRef solves
// interface InputProps {
//   placeholder: string;
// }

// function Input({ placeholder }: InputProps) {
//   return <input placeholder={placeholder} />;
// }

// // In a parent component:
// const inputRef = useRef<HTMLInputElement>(null);
// <Input ref={inputRef} placeholder="Name" /> 
// ❌ Error — plain function components can't receive `ref` as a normal prop

// The typed forwardRef signature
// const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
//   return <input ref={ref} placeholder={props.placeholder} />;
// });