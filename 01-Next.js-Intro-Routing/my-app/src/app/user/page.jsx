import React from "react";
import Link from "next/link";

const User = () => {
  const users = ["Ali", "Ahmet", "Veli", "Ayşe"];

  return (
    <div>
      User
      {users.map((user, i) => (
        <div key={i}>
          <Link href={`/user/${user}`}>Go to Detail - {user}</Link>
        </div>
      ))}
    </div>
  );
};

export default User;
