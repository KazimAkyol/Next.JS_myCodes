import React from "react";
import { getUsers } from "@/helpers/apiFunctions";
import TeamList from "@/components/TeamList";

export const metadata = {
  title: "My Team",
  description: "This is team page decription",
};

const Team = async () => {
  const users = await getUsers();

  return (
    <div>
      Team
      <TeamList users={users} />
    </div>
  );
};

export default Team;
