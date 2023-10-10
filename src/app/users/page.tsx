import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Users = async () => {
  const session = await getServerSession(options);

  if (session && session.user?.role === "ADMIN") {
    return (
      <div>
        <h1>(Users Table)</h1>
      </div>
    );
  }

  return <h1>Not an admin</h1>
};
export default Users;
