import React, { useEffect } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Language resources
const resources = {
  en: {
    translation: {
      title: "Journey of Languages: Exploring the World through Words",
      greeting:
        "Traveling is a transformative experience that takes us beyond the boundaries of our familiar surroundings, opening up a world of possibilities and new perspectives. It allows us to break free from our daily routines and embark on a journey of self-discovery and exploration. Whether we're wandering through ancient ruins, navigating bustling markets, or immersing ourselves in the natural beauty of remote landscapes, every step we take unravels a tapestry of experiences. \n\n Traveling introduces us to diverse cultures, languages, and customs, fostering a deeper understanding and appreciation for the rich tapestry of humanity. It connects us with people from different walks of life, breaking down barriers and transcending borders. Through interactions with locals and fellow travelers, we gain insights into their way of life, traditions, and beliefs, broadening our own perspectives in the process.\n\n  The act of traveling also challenges us to step outside our comfort zones and embrace the unknown. It pushes us to confront our fears, adapt to unfamiliar situations, and find resilience in the face of adversity. From navigating foreign transportation systems to trying exotic cuisines, each experience becomes a lesson in resourcefulness and adaptability. \n\n Moreover, travel is not just about the external journey—it is also an inward exploration. It offers us the opportunity to reflect, rejuvenate, and discover aspects of ourselves that may have been dormant. Stepping away from the familiar allows us to gain a fresh perspective on our lives, values, and aspirations. It ignites a sense of curiosity and wonder, inspiring personal growth and transformation. \n\n Traveling is a source of inspiration and creativity. The sights, sounds, and experiences encountered during our journeys can fuel our imagination and enrich our artistic expressions. Whether it's capturing breathtaking landscapes through photography, painting vivid scenes on canvas, or penning heartfelt travel journals, the memories and emotions associated with travel become a wellspring of inspiration.\n\n In essence, travel is a profound and transformative endeavor that goes beyond mere sightseeing. It is a lifelong pursuit that broadens our horizons, deepens our understanding of the world and ourselves, and shapes us into more compassionate, open-minded, and culturally aware individuals. So, pack your bags, embrace the unknown, and embark on the incredible journey that is travel.",
    },
  },
  ru: {
    translation: {
      title: "Путешествие языков: Исследование мира через слова",
      greeting: `Путешествие - это глубокий и преобразующий опыт, который выводит нас за пределы привычной обстановки, открывая мир возможностей и новых перспектив. Оно позволяет нам освободиться от повседневной рутины и отправиться в путешествие самооткрытия и исследования. Будь то прогулки по древним руинам, плавание по оживленным рынкам или погружение в красоту уединенных пейзажей, каждый наш шаг раскрывает уникальную картину опыта.

      Путешествие знакомит нас с различными культурами, языками и обычаями, позволяя глубже понять и оценить богатое разнообразие человечества. Оно связывает нас с людьми разных культур, снимая барьеры и преодолевая границы. Общение с местными жителями и другими путешественниками позволяет нам узнать о их образе жизни, традициях и верованиях, расширяя наши собственные горизонты.
      
      Путешествие также заставляет нас выйти из зоны комфорта и принять неизвестность. Оно заставляет нас сталкиваться с нашими страхами, приспосабливаться к непредсказуемым ситуациям и находить устойчивость в лице трудностей. От преодоления иностранных систем транспорта до пробования экзотической кухни, каждый опыт становится уроком ловкости и адаптации.
      
      Кроме того, путешествие не только внешнее, но и внутреннее путешествие. Оно дает нам возможность задуматься, восстановить силы и открыть в себе те аспекты, которые могли быть заторможены. Уход от привычного помогает нам с новой перспективы взглянуть на нашу жизнь, наши ценности и стремления. Это вызывает чувство любопытства и восхищения, вдохновляя наш личностный рост и преобразование.
      
      Путешествие является источником вдохновения и творчества. Пейзажи, звуки и впечатления, которые мы встречаем во время путешествий, могут подпитывать наше воображение и обогащать нашу художественную экспрессию. Будь то захватывающие пейзажи на фотографиях, яркие картины на холсте или эмоциональные записи в путевых дневниках, воспоминания и эмоции, связанные с путешествиями, становятся источником вдохновения.
      
      В заключение, путешествие - это глубокое и преобразующее предприятие, которое выходит за рамки простого туризма. Это жизненное путешествие, которое расширяет наши горизонты, углубляет наше понимание мира и самих себя, делая нас более сострадательными, открытыми и осознанными культурного разнообразия. Так что соберите свои чемоданы, обнимите неизвестность и отправляйтесь в невероятное путешествие, которое называется жизнью.`,
    },
  },
  ur: {
    translation: {
      title: "زبانوں کی سفر: الفاظ کے ذریعے دنیا کا کھوج",

      greeting: `سفر کرنا ایک تحولی تجربہ ہے جو ہمیں ہمارے عادیاتی محیط کے پابندیوں سے باہر لے جاتا ہے، نئی تجاویز اور نئی تصورات کا عالم کھولتا ہے۔ یہ ہمیں ہماری روزمرہ کی روتین سے آزاد ہونے اور خود کی دریافت کے سفر پر لے جاتا ہے۔ چاہے ہم قدیم تباہ شدہ عمارتوں میں سیر کر رہے ہوں، ہلچل دار بازاروں میں ٹھہر رہے ہوں یا دور دراز ماحول کی خوبصورتی میں غوطہ انداز ہو رہے ہوں، ہر قدم ہمارے آگے تجربات کا بافت بافتہ پردہ چھینتا ہے۔

      سفر ہمیں مختلف ثقافتوں، زبانوں اور رسوم و رواجات سے واقف کرتا ہے، جو بشریت کی دولت مند تاریکی کو بہتر طور پر سمجھنے اور قدر کرنے کا باعث بنتے ہیں۔ یہ ہمیں مختلف طبقات کے لوگوں سے جوڑتا ہے، دیواروں کو توڑتا ہے اور سرحدوں کو پار کرتا ہے۔ مقامی لوگوں اور ساتھی سفریوں سے تعامل کے ذریعے ہم ان کی زندگی کے طرزِ زندگی، رواجات اور عقائد میں دخل پاتے ہیں، جو ہمارے خودی کے نقطہ نظر میں تازگی اور وسعت پیدا کرتے ہیں۔
      
      سفر کا عمل ہمیں ہماری آرامدہ منطقے کے باہر کھڑے ہونے کی چنتار پیش کرتا ہے اور نامعلوم کو قبول کرنے پر مجبور کرتا ہے۔ یہ ہمیں ہماری خوفوں کا سامنا کرنے، ناآشنا حالات کا مقابلہ کرنے اور مصیبت کے سامنے حوصلہ افزائی کرنے کی تحریک دیتا ہے۔ غیر ملکی نقل و حملی نظاموں کا سامنا کرنا، عجیب و غریب کھانوں کا آزمانا، ہر تجربے میں ہمیں کسی بھی ہالت کے لئے بہلاؤ اور تکنیک کی سبق سیکھنے کا سبب بنتا ہے۔
      
      علاوہ ازیں، سفر صرف بیرونی سفر کے لئے نہیں بلکہ اندرونی تلاش کے لئے بھی ایک طریقہ ہے۔ یہ ہمیں آغازی ہونے، تازگی حاصل کرنے اور وقت کے آغاز میں مندرجہ ذیل تعلقات کو دریافت کرنے کا موقع فراہم کرتا ہے۔ عادی سے ہٹ کر ہماری زندگیوں پر تازہ نگاہ رکھنے سے ہمیں اپنی زندگی، اقدار اور تمناؤں کے بارے میں نئی نگاہیں حاصل ہوتی ہیں۔ یہ ہماری دلچسپی اور حیرت کی جھڑکی دیتا ہے، جو شخصیتی ترقی اور تبدیلی میں ایک منبع تحریک بنتی ہے۔
      
      سفر ایک تحریک و خلاقیت کا باعث ہے۔ ہمارے سفر کے دوران ملنے والے مناظر، آوازیں اور تجربات ہمارے تخیل کو شعلہ دیتے ہیں اور ہماری فنی اظہار کو امیر بناتے ہیں۔ چاہے وہ تصویری طور پر دلچسپ مناظر کو تصویر بنانا ہو، کامان پر رنگین مناظر پینٹ کرنا ہو یا دلچسپ سفری روزنامچے میں پن کرنا ہو، سفر سے جڑے یادوں اور جذبات فنی تحریک کا چشمہ بنتے ہیں۔
      
      خلاصے میں، سفر ایک گہرا اور تحریک آمیز کوشش ہے جو صرف سائٹ سی کے علاوہ ہی نہیں ہوتی۔ یہ ہمارے افقوں کو وسعت دیتی ہے، دنیا اور خود کے مفہوم کو بہتر سمجھنے اور ہمیں ابتدائی نظر میں رحم کرنے والے، خلقی، خوش رو، خلقی طور پر آگاہ افراد بناتی ہے۔ تو اپنی بستہ کو پیک کریں، نامعلوم کو قبول کریں اور ایک منفرد سفر پر روانہ ہوں۔`,
    },
  },
  fr: {
    translation: {
      title: "Voyage des langues : Explorer le monde à travers les mots",
      greeting: `Voyager est une expérience transformative qui nous emmène au-delà des limites de notre environnement familier, ouvrant un monde de possibilités et de nouvelles perspectives. Cela nous permet de nous libérer de nos routines quotidiennes et de nous embarquer dans un voyage de découverte de soi et d'exploration. Que nous déambulions à travers des ruines antiques, que nous naviguions dans des marchés animés ou que nous nous immergions dans la beauté naturelle de paysages isolés, chaque pas que nous faisons dévoile une tapisserie d'expériences.

        Voyager nous introduit à des cultures, des langues et des coutumes diverses, favorisant une compréhension plus profonde et une appréciation de la riche diversité de l'humanité. Cela nous connecte avec des personnes de différents horizons, brisant les barrières et transcendant les frontières. À travers les interactions avec les habitants locaux et les autres voyageurs, nous acquérons un aperçu de leur mode de vie, de leurs traditions et de leurs croyances, élargissant ainsi nos propres perspectives.
        
        L'acte de voyager nous pousse également à sortir de notre zone de confort et à embrasser l'inconnu. Cela nous pousse à affronter nos peurs, à nous adapter à des situations inconnues et à trouver de la résilience face à l'adversité. De la navigation dans des systèmes de transport étrangers à la dégustation de cuisines exotiques, chaque expérience devient une leçon de débrouillardise et d'adaptabilité.
        
        De plus, le voyage ne se limite pas seulement au voyage extérieur, c'est aussi une exploration intérieure. Il nous offre l'opportunité de réfléchir, de nous ressourcer et de découvrir des aspects de nous-mêmes qui peuvent avoir été dormants. S'éloigner du familier nous permet d'avoir un regard neuf sur notre vie, nos valeurs et nos aspirations. Cela suscite un sentiment de curiosité et d'émerveillement, inspirant ainsi notre croissance personnelle et notre transformation.
        
        Voyager est une source d'inspiration et de créativité. Les paysages, les sons et les expériences rencontrés lors de nos voyages peuvent alimenter notre imagination et enrichir nos expressions artistiques. Que ce soit en capturant des paysages à couper le souffle en photographie, en peignant des scènes vives sur toile ou en écrivant des journaux de voyage émouvants, les souvenirs et les émotions associés aux voyages deviennent une source d'inspiration.
        
        En essence, le voyage est une entreprise profonde et transformative qui va au-delà de la simple visite touristique. C'est une poursuite de toute une vie qui élargit nos horizons, approfondit notre compréhension du monde et de nous-mêmes, et nous façonne en individus plus compatissants, ouverts d'esprit et conscients de la diversité culturelle. Alors, préparez vos bagages, embrassez l'inconnu et embarquez dans l'incroyable voyage qu'est le voyage.`,
    },
  },
};

// Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language is English
  fallbackLng: "en",
});

const MultiLanguage = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    const selectedLanguage  = event.target.value;
    i18n.changeLanguage(selectedLanguage );
    localStorage.setItem("selectedLanguage ", selectedLanguage );
  };
  useEffect(() => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, []);

  return (
    <div className="px-5  index  ">
      <div className="flex justify-center ">
        <Select
          className="bg-white mt-3"
          value={i18n.language}
          onChange={handleChangeLanguage}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ru">Russian</MenuItem>
          <MenuItem value="ur">Urdu</MenuItem>
          <MenuItem value="fr">Françh</MenuItem>
        </Select>
      </div>

      <div className="px-72 font-bold  tracking-[2px] pt-3  ">
        <h2 className="text-[30px] text-red-700">{t("title")}</h2>
        <p>{t("greeting")}</p>
      </div>
    </div>
  );
};

export default MultiLanguage;
