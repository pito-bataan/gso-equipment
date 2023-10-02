import Link from 'next/dist/client/link';
import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';
import SignOut from '@/components/sign-out';

const Home = async () => {
  const session = await getServerSession(options);
  return (
    <div>
      {session ? (
        <div>
          <h1>{session.user?.name}</h1>
          <SignOut />
        </div>
      ) : (
        <div>
          <h1>No session</h1>
          <Link href="/api/auth/signin?callbackUrl=%2F">
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
};
export default Home;
