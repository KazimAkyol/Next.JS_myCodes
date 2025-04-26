import React from "react";

const UserDetail = ({ params }) => {
  const { userId } = params;

  return <div>{userId} Hakkinda Detayli Bilgi</div>;
};

export default UserDetail;

export async function generateStaticParams() {
  const users = ["Ali", "Ahmet", "Veli", "Ayşe"];

  return users.map((user) => ({
    user: user.toString(),
  }));
}
