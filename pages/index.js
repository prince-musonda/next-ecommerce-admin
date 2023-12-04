import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  // if admin not signed in
  if (!session) {
    return (
      <div className={"bg-blue-900 w-screen h-screen flex items-center"}>
        <div className="text-center w-full">
          <button
            onClick={() => {
              signIn("google");
            }}
            className={"bg-white p-3 rounded-md"}
          >
            Login with Google{" "}
          </button>
        </div>
      </div>
    );
  } else {
    console.log(session);
    return <div>Hello {session.user.name}</div>;
  }
}
