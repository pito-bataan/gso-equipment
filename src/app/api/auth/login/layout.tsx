import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Login',
};

export default function LoginLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    const backgroundStyle = {
      backgroundImage: 'url(/bunker.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="flex w-full h-screen items-center justify-center" style={backgroundStyle}>
      <div>{children}</div>
      </div>
    );
  }