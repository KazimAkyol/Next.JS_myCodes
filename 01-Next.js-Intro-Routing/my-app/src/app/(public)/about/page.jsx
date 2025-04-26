"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  //   console.log(x); Yapamayacagi bir sey yazinca error.jsx componenti calisti.

  const router = useRouter();
  return (
    <div className="bg-gray-700 flex justify-center items-center h-screen">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        {/* Profil Fotografi ve Hakkimda Başligi */}
        <div className="flex items-center justify-center mb-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByFCks-L2CzaZwcNeur-Fy-YxXwprUyUOvw&s" // Profil fotoğrafı için örnek URL
            alt="Profil Fotoğrafı"
            className="rounded-full w-32 h-32 border-4 border-blue-500"
          />
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Hakkimda
        </h1>
        {/* Hakkimda aciklamasi */}
        <p className="text-lg text-gray-700 text-center mb-6">
          Merhaba, ben Kazim Akyol. Yazılım geliştiricisi ve teknoloji
          tutkunuyum. Web uygulamaları geliştirme konusunda deneyimim var ve
          sürekli olarak yeni teknolojiler öğrenmeye çalışıyorum. Bu sayfa
          hakkında daha fazla bilgi edinmek için benimle iletişime
          geçebilirsiniz!
        </p>
        {/* İletişim butonu */}
        <div className="flex justify-center">
          <Link
            href="/about/settings"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Bana Ulasin
          </Link>

          <button
            className="px-4 my-2 mx-7 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => router.back()}
          >
            Geri
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
