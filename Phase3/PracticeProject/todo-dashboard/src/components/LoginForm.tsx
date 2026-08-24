import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import type { LoginFormState } from "../types";

function LoginForm() {
  const { login } = useAuth();
  const [formState, setFormState] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login(formState.email, formState.password);
    setFormState({ email: "", password: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formState.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formState.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;