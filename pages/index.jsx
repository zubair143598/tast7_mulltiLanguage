import { useEffect, useState } from 'react';
import LanguageSwitcher from "@/components/LanguageSwitcher ";
import { useTranslation } from 'react-i18next';
import Head from "next/head";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  const getTextAlign = () => {
    return i18n.language === 'ur' ? 'right' : 'left';
  };

  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>

      <main className="index h-screen">
        <LanguageSwitcher />
        <div style={{ textAlign: getTextAlign() }} className="lg:px-72 py-[40px] px-[10px] index font-bold tracking-[2px] pt-3">
          {isContentVisible && (
            <>
              <h2 className="text-[30px] text-red-700">{t("title")}</h2>
              <p>{t("greeting")}</p>
            </>
          )}
        </div>
      </main>
    </>
  );
}
