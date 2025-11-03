
import React from 'react';
import AnimatedCard from '../AnimatedCard';
import { SectionHeader, SubHeader, BioParagraph } from './shared';
import { useLanguage } from '../../contexts/LanguageContext';

const EarlyLifeCard: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
      <SectionHeader>{t('bio_early_life_title')}</SectionHeader>
      <SubHeader>{t('bio_early_life_subtitle1')}</SubHeader>
      <BioParagraph>
          {t('bio_early_life_p1')}
      </BioParagraph>
      <BioParagraph>
          {t('bio_early_life_p2')}
      </BioParagraph>
      <BioParagraph>
          {t('bio_early_life_p3')}
      </BioParagraph>

      <SubHeader>{t('bio_early_life_subtitle2')}</SubHeader>
      <BioParagraph>
          {t('bio_early_life_p4')}
      </BioParagraph>
      <BioParagraph html={t('bio_early_life_p5')} />
      <BioParagraph html={t('bio_early_life_p6')} />
      <BioParagraph html={t('bio_early_life_p7')} />
    </AnimatedCard>
  );
};

export default EarlyLifeCard;