"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import Link from "next/link";

interface Room {
  id: string;
  leaderName: string;
  email: string;
  phoneNumber: string;
  idea: string;
  theme: string;
}

const JoinPage: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const roomsCollection = collection(db, "teams");
      const roomsSnapshot = await getDocs(roomsCollection);
      const roomList = roomsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Room[];
      setRooms(roomList);
    };

    fetchRooms();
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-[#0a0b1e] min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Join a Team</h1>
      {rooms.length === 0 ? (
        <div className="text-white text-xl">No rooms available.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl">
          {rooms.map(room => (
            <Link key={room.id} href={`/join/${room.id}`}>
              <div className="border border-white bg-[#1a1a2e] rounded-lg shadow-md p-8 cursor-pointer transition-transform transform hover:scale-105">
                <h1 className="text-2xl font-bold text-white">{room.idea}</h1>
                <h2 className="text-gray-300 italic text-lg mt-2">{room.leaderName}</h2>
                <p className="text-gray-400 text-lg mt-4">
                  Theme: <span className="font-medium">{room.theme}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default JoinPage;
