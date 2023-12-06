import Layout from "@/components/layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex gap-1 justify-between">
        <h2>
          Hello <b>{session?.user?.name}</b>
        </h2>
        <div className="flex gap-2 bg-blue-100 text-black pr-1 rounded-lg overflow-hidden">
          <img src={session?.user?.image} className="w-6 h-6 rounded-50"></img>
          <span>{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
