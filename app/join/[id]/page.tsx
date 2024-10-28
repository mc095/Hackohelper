"use client"; // Ensure this is a client component

import { useRouter } from "next/navigation";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { useEffect, useState } from "react";

// Define the Room type to match Firebase document fields
interface Room {
  name: string;
  idea: string;
  theme: string;
  phoneNumber: string; // Change 'phone' to 'phoneNumber'
  email: string;
  ideaDescription: string; // Add any additional fields as necessary
}

interface Params {
  id: string;
}

interface TeamDetailsPageProps {
  params: Promise<Params>; // Change to Promise type
}

const TeamDetailsPage: React.FC<TeamDetailsPageProps> = ({ params }) => {
  const [id, setId] = useState<string | null>(null); // Initialize id as null
  const [room, setRoom] = useState<Room | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // Unwrap the params
      setId(resolvedParams.id); // Set the id state
    };
    fetchParams();
  }, [params]);

  useEffect(() => {
    const fetchRoom = async () => {
      if (id) { // Check if id is not null
        const docRef = doc(db, "teams", id); // Ensure id is valid before using
        const roomDoc = await getDoc(docRef);
        if (roomDoc.exists()) {
          setRoom(roomDoc.data() as Room);
        } else {
          router.push("/join");
        }
      }
    };
    fetchRoom();
  }, [id, router]);

  if (!room) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-8 bg-[#0a0b1e] min-h-screen"> {/* Increased padding */}
      <h1 className="text-4xl font-bold mb-4 text-white text-center">{room.name}</h1> {/* Larger title and centered */}
      <h2 className="text-2xl italic text-gray-300 text-center mb-6">{room.idea}</h2> {/* Centered idea */}

      <div className="bg-[#1a1a2e] rounded-lg shadow-md p-8 w-full max-w-2xl"> {/* Card-like container */}
        <h2 className="text-3xl font-semibold text-white">Team Details</h2>

        <p className="text-lg text-gray-300 mt-4"><strong>Team Idea:</strong> {room.idea}</p>
        <p className="text-lg text-gray-300 mt-4"><strong>Theme:</strong> {room.theme}</p>
        <p className="text-lg text-gray-300 mt-4"><strong>Contact Email:</strong> {room.email}</p>
        <p className="text-lg text-gray-300 mt-4">
          <strong>Phone:</strong> 
          <a 
            href={`https://wa.me/${room.phoneNumber}`} 
            className="text-blue-500 underline ml-1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {room.phoneNumber}
          </a>
        </p>
        <p className="text-lg text-gray-300 mt-4"><strong>Description:</strong> {room.ideaDescription}</p> {/* Display additional details */}
        
        <Link href="/join">
          <button className="mt-6 border border-white bg-transparent text-white py-2 px-4 rounded hover:bg-white hover:text-black transition-colors">
            Back to Teams
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TeamDetailsPage;
