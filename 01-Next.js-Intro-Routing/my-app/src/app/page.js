"use client";
import Cards from "./components/Cards.jsx";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goto = () => {
    router.push("/about");
  };

  return (
    <div className="bg-gray-800 h-screen items-center">
      <div className="bg-gray-700 text-gray-300 text-center py-10 px-5">
        <img
          src="https://kodwise.org/images/features.svg"
          alt="Banner Görseli"
          className="mx-auto mb-6 w-200 "
        />
        <h1 className="text-4xl  text-white-600 mb-4">Coding Platform</h1>
        <Cards />

        <button
          className="text-white text-bold text-lg bg-gray-400 cursor-pointer"
          onClick={goto}
        >
          Hakkimda Detayli Bilgi
        </button>
      </div>
    </div>
  );
}
