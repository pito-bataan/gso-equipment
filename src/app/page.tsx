import Link from 'next/dist/client/link';
import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import SignOut from '@/components/auth/sign-out';
import { redirect } from 'next/navigation';

const Home = async () => {

  const session = await getServerSession(options)

  if(!session || !session.user){
    redirect('/api/auth/signin?callbackUrl=%2F')
  }

  if(session && session.user?.role === 'ADMIN'){
    return (
      <h1>Welcome {session.user.role}</h1>
    )
    
  }
  
  return <></>;
};
export default Home;

