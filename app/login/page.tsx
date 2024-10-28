"use client"; // Declare this as a client component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead
import Background from "@/components/Background";
import { auth } from "@/lib/firebaseConfig"; // Import the auth instance
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app"; // Import FirebaseError

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push("/"); // Redirect to home after successful login
    } catch (error) {
      // Handle the error properly
      if (error instanceof FirebaseError) {
        // Use the message from the FirebaseError
        setErrorMessage("Authentication error: " + error.message);
      } else {
        // Fallback for any other errors
        setErrorMessage("Authentication error: Please try again.");
      }
      console.error("Authentication error", error);
    }
  };

  return (
    <Background>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-white text-3xl mb-6">{isSignup ? "Sign Up" : "Login"}</h1>

        {/* Notification for authentication errors */}
        {errorMessage && (
          <div className="bg-red-500 text-white p-4 rounded-md mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded text-black" // Changed text color to black
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded text-black" // Changed text color to black
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {isSignup ? "Sign Up" : "Login"}
          </button>
          <button
            type="button"
            onClick={() => setIsSignup((prev) => !prev)}
            className="text-gray-400 hover:text-gray-200"
          >
            {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </button>
        </form>
      </div>
    </Background>
  );
};

export default LoginPage;
