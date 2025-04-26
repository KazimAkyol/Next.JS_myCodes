import TeamItem from "./TeamItem";

const TeamList = ({ users }) => {
  console.log("users", users);
  return (
    <ul>
      {users.map((user) => (
        <TeamItem key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default TeamList;
