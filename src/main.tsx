import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.tsx";
import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      afterSignOutUrl="/"
      appearance={{
        baseTheme: undefined,
        variables: { colorPrimary: '#3B82F6' }
      }}
      localization={{
        signIn: { start: { title: 'Sign in to Avsar' } },
        signUp: { start: { title: 'Create your Avsar account' } }
      }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>
);
