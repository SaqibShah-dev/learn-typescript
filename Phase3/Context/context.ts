// What it is
// Context lets you share state across many components without manually passing props down
//  through every level in between (avoiding "prop drilling"). Typing it correctly is 
// trickier than useState/useRef because Context has a tricky default-value problem — let's 
// walk through why.

// interface UserContextType {
//   user: User | null;
//   setUser: (user: User | null) => void;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);


// How it works — full pattern, step by step

// Step 1: Define the shape of what the context holds
// interface UserContextType {
//   user: User | null;
//   setUser: (user: User | null) => void;
// }

// Step 2: Create the context, typed as T | undefined
// const UserContext = createContext<UserContextType | undefined>(undefined);

// Step 3: Build a Provider component that supplies the real value
// function UserProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// Step 4: Write a custom hook that safely consumes the context (this is the important part)

// function useUser(): UserContextType {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// }

// Step 5: Use it in components — clean, no undefined-checking needed at the call site
// function ProfileButton() {
//   const { user, setUser } = useUser(); // fully typed, no `| undefined` to worry about here
//   return <button onClick={() => setUser(null)}>{user?.name ?? "Guest"}</button>;
// }


// Step 6: Wrap your app with the Provider
// function App() {
//   return (
//     <UserProvider>
//       <ProfileButton />
//     </UserProvider>
//   );
// }