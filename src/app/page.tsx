import { Header } from "@/components/header/Header";
import Layout from "@/components/layout/Layout";
import { PageBody } from "@/components/pageBody/PageBody";

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="bg-[#F7F7F8] w-screen h-screen">
          <PageBody />
        </div>
      </main>
    </Layout>
  );
}
