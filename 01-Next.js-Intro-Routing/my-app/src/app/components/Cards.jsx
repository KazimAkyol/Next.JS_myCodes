import React from "react";

const Cards = () => {
  const cards = [
    {
      title: "Python",
      description: "Veri bilimi, otomasyon ve yapay zeka için güçlü bir dil.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      title: "JavaScript",
      description: "Web geliştirme dünyasının vazgeçilmez dili.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "Java",
      description:
        "Kurumsal uygulamalar ve Android geliştirme için klasik bir tercih.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      title: "C#",
      description: ".NET ile masaüstü, oyun ve web geliştirme için ideal.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      title: "Go",
      description: "Basit, hızlı ve sistem programlama için mükemmel bir dil.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl text-gray-300 text-center py-5">
        Programlama Dilleri
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
