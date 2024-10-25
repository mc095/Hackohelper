import Link from "next/link";

const JoinPage = () => {
  const rooms = [
    { id: 1, name: "Team Alpha", members: 3, idea: "AI-powered chatbot for healthcare" },
    { id: 2, name: "Team Beta", members: 5, idea: "Smart farming solutions using IoT" },
    { id: 3, name: "Team Gamma", members: 2, idea: "Blockchain for supply chain transparency" },
    { id: 4, name: "Team Delta", members: 4, idea: "AR/VR experience for education" },
    { id: 5, name: "Team Epsilon", members: 1, idea: "Fitness app with personalized training" },
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-[#0a0b1e] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Join a Team</h1>

      <div className="flex flex-wrap justify-center w-full max-w-screen-lg">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="flex flex-col justify-between items-start p-6 border border-white rounded-lg shadow-md bg-transparent w-full sm:w-1/2 md:w-1/3 mx-2 mb-4"
          >
            <div>
              <h2 className="text-lg font-semibold text-white">{room.name}</h2>
              <p className="text-white">{room.members} / 5 members</p>
              <p className="text-gray-300 italic mt-2">{room.idea}</p>
            </div>
            <Link href={`/join/${room.id}`}>
              <button
                className="border border-white bg-transparent text-white py-2 px-4 rounded hover:bg-white hover:text-black transition-colors mt-4"
                disabled={room.members >= 5}
              >
                {room.members < 5 ? "Join" : "Full"}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinPage;
