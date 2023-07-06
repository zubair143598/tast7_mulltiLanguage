
import LanguageSwitcher from "@/components/LanguageSwitcher ";
import { useTranslation } from 'react-i18next';
import Head from "next/head";


export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>

      <main className=" index h-screen">
        
        <LanguageSwitcher/>
        <div className="px-72  index  font-bold  tracking-[2px] pt-3  ">
        <h2 className="text-[30px] text-red-700">{t("title")}</h2>
        <p>{t("greeting")}</p>
      </div>
      </main>
    </>
  );
}
