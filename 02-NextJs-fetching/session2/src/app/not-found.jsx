"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-red-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-500 mb-6">
          Aradığınız sayfa silinmiş, taşınmış olabilir ya da hiç var olmamış.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 text-white bg-red-600 hover:bg-blue-700 rounded-full text-sm font-medium transition"
        >
          Ana Sayfaya Geri Dön
        </a>
      </div>
    </div>
  );
};

export default NotFound;
