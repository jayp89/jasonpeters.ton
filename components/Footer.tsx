import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import TextWithTonIcon from './TextWithTonIcon';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="w-full max-w-4xl text-center text-gray-400 text-lg py-12">
      <TextWithTonIcon text={t('footer_text')} />
    </footer>
  );
};

export default Footer;
