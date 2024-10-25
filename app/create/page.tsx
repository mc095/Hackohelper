"use client";
import { useState } from "react";

const CreatePage = () => {
  const [teamLeaderName, setTeamLeaderName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idea, setIdea] = useState("");
  const [theme, setTheme] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ teamLeaderName, email, phoneNumber, idea, theme });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-[#0a0b1e] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Create a Hackathon Team</h1>
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
            rows={4}
            placeholder="Describe your idea"
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
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Create Team
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
