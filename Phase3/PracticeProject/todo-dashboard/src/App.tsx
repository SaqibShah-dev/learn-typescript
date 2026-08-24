import { useEffect, useState } from "react";
import { ApiRequest, isApiError } from "./api/ApiRequest";
import type { User } from "./types/index";
import Table from "./components/Table";
import useLocalStorage from "./hooks/useLocalStorage";
import type { Column } from "./components/Table";
import { useAuth } from "./hooks/useAuth";
import LoginForm from "./components/LoginForm";

const userColumns: Column<User>[] = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
];

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");
  const { user,  logout } = useAuth();

  useEffect(() => {
    async function loadUsers() {
      const result = await ApiRequest<User[]>(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (isApiError(result)) {
        setError(result.message);
      } else {
        setUsers(result.data);
      }
    }
    loadUsers();
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#121212",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <h1>Dashboard ({theme} mode)</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm />
      )}
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
      <Table data={users} columns={userColumns} />
    </div>
  );
}

export default App;
