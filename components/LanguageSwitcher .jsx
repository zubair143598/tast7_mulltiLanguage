import { useState, useEffect } from 'react';
import { Select, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const language = localStorage.getItem('language');
    if (language) {
      setSelectedLanguage(language);
      i18n.changeLanguage(language);
    }

    // const timer = setTimeout(() => {
    //   setIsContentVisible(true);
    // }, 0);

    // return () => clearTimeout(timer);
  }, []);

  const handleChangeLanguage = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  };

  return (
    <div className={`flex justify-center `}>
      <Select
        className="bg-white mt-3"
        value={i18n.language}
        onChange={handleChangeLanguage}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="ru">Russian</MenuItem>
        <MenuItem value="ur">Urdu</MenuItem>
        <MenuItem value="fr">French</MenuItem>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
