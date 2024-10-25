import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import Link from "next/link"; // Import Link

const TeamDetailsPage = async ({ params }: { params: { id: string } }) => {
  // Await params to ensure they are resolved
  const { id } = await params; // Get the id from params

  // Mock data for demonstration purposes
  const rooms = [
    { id: 1, name: "Team Alpha", members: 3, idea: "AI-powered chatbot for healthcare", theme: "Healthcare Tech" },
    { id: 2, name: "Team Beta", members: 5, idea: "Smart farming solutions using IoT", theme: "Sustainability" },
    { id: 3, name: "Team Gamma", members: 2, idea: "Blockchain for supply chain transparency", theme: "Blockchain" },
    { id: 4, name: "Team Delta", members: 4, idea: "AR/VR experience for education", theme: "Education" },
    { id: 5, name: "Team Epsilon", members: 1, idea: "Fitness app with personalized training", theme: "Health & Fitness" },
  ];

  // Find the selected team based on the ID from the URL
  const selectedRoom = rooms.find((room) => room.id === Number(id));

  if (!selectedRoom) {
    return <div className="text-white">Team not found.</div>;
  }

  return (
    <div className="flex flex-col items-center p-6 bg-[#0a0b1e] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{selectedRoom.name}</h1>
      <p className="text-white">{selectedRoom.members} / 5 members</p>
      <p className="text-gray-300 italic mt-2">{selectedRoom.idea}</p>
      <p className="text-gray-300 mt-2">Theme: {selectedRoom.theme}</p>
      <Link href="/join">
        <button className="mt-4 border border-white bg-transparent text-white py-2 px-4 rounded hover:bg-white hover:text-black transition-colors">
          Back to Teams
        </button>
      </Link>
    </div>
  );
};

export default TeamDetailsPage;
