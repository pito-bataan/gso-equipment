import { getServerSession } from "next-auth";


const Users = async() => {
  const session = await getServerSession()

  if(session && session.user?.name === 'admin'){
    return (
        <div>
          <h1>Hello from users page</h1>
        </div>
      );

      
  }

  
};
export default Users;
