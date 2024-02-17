import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <div className="flex-grow flex-1 flex justify-center items-center">
        <SignUp />
      </div>
    </main>
  );
}
