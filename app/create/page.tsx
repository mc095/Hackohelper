"use client";

import { useEffect, useState } from "react";
import { db, auth } from "@/lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Background from "@/components/Background";

const CreatePage = () => {
  const [teamLeaderName, setTeamLeaderName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idea, setIdea] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [theme, setTheme] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const teamData = {
        teamLeaderName,
        email,
        phoneNumber,
        idea,
        ideaDescription,
        theme,
        createdAt: new Date(),
      };

      await addDoc(collection(db, "teams"), teamData);
      setSuccessMessage("Room created successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
      router.push("/join");
    } catch (error) {
      console.error("Error creating team:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Background>
      <div className="flex flex-col items-center p-6 bg-[#0a0b1e] min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Create a Hackathon Team</h1>
        {successMessage && (
          <div className="mb-4 p-2 text-white bg-green-600 rounded">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md">
          <div>
            <label htmlFor="teamLeaderName" className="block text-sm font-medium text-gray-700">
              Team Leader Name
            </label>
            <input
              type="text"
              id="teamLeaderName"
              value={teamLeaderName}
              onChange={(e) => setTeamLeaderName(e.target.value)}
              className="mt-1 p-2 border border-white rounded-md w-full bg-transparent text-white placeholder-gray-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border border-white rounded-md w-full bg-transparent text-white placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 p-2 border border-white rounded-md w-full bg-transparent text-white placeholder-gray-400"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label htmlFor="idea" className="block text-sm font-medium text-gray-700">
              Idea
            </label>
            <textarea
              id="idea"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="mt-1 p-2 border border-white rounded-md w-full bg-transparent text-white placeholder-gray-400"
              rows={2}
              placeholder="Enter your idea"
              required
            />
          </div>
          <div>
            <label htmlFor="ideaDescription" className="block text-sm font-medium text-gray-700">
              Idea Description
            </label>
            <textarea
              id="ideaDescription"
              value={ideaDescription}
              onChange={(e) => setIdeaDescription(e.target.value)}
              className="mt-1 p-2 border border-white rounded-md w-full bg-transparent text-white placeholder-gray-400"
              rows={4}
              placeholder="Elaborate on your idea"
              required
            />
          </div>
          <div>
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
              Theme
            </label>
            <input
              type="text"
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="mt-1 p-2 border border-white rounded-md w-full bg-transparent text-white placeholder-gray-400"
              placeholder="Enter the theme"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" disabled={loading}>
            {loading ? "Creating..." : "Create Team"}
          </button>
        </form>
      </div>
    </Background>
  );
};

export default CreatePage;
