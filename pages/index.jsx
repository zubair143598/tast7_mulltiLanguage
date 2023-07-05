import MultiLanguage from "@/components/MultiLanguage";
import Head from "next/head";


export default function Home() {
 

  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>

      <main className=" index h-screen">
        <MultiLanguage/>
      </main>
    </>
  );
}
