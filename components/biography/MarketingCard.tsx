
import React from 'react';
import AnimatedCard from '../AnimatedCard';
import { SectionHeader, BioParagraph } from './shared';
import { useLanguage } from '../../contexts/LanguageContext';

const MarketingCard: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
      <SectionHeader>{t('bio_marketing_title')}</SectionHeader>
      <BioParagraph html={t('bio_marketing_p1')} />
      <BioParagraph>
          {t('bio_marketing_p2')}
      </BioParagraph>
    </AnimatedCard>
  );
};

export default MarketingCard;