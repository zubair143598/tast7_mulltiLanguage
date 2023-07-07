/* eslint-disable @next/next/no-img-element */
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
    }, 0);

    return () => clearTimeout(timer);
  }, []);
  const getTextAlign = () => {
    return i18n.language === 'ur' ? 'flex flex-col items-end ' : 'flex flex-col items-start';
  };

  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>

      <main className="index h-screen">
      {isContentVisible && (
            <>
        <LanguageSwitcher />
        <div  className={`lg:px-72 py-[40px] px-[10px] index font-bold tracking-[2px] pt-3 ${getTextAlign()}`}>
          
              <h2 className="text-[30px]  text-red-700">{t("title")}</h2>

              <p>{t("greeting")}</p>
              <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" width={300} alt="" />
            
          <div className=' text-center flex flex-col  '>
            <p>asdasd</p>
          <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg" width={300} className='mt-3 ' alt="" />
          </div>
        </div>
        </>
          )}
      </main>
    </>
  );
}
