
import React from 'react';
import AnimatedCard from '../AnimatedCard';
import { SectionHeader, BioParagraph } from './shared';
import { useLanguage } from '../../contexts/LanguageContext';

const PublicProfileCard: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
      <SectionHeader>{t('bio_public_title')}</SectionHeader>
      <BioParagraph>
          {t('bio_public_p1')}
      </BioParagraph>
      <BioParagraph>
          {t('bio_public_p2')}
      </BioParagraph>
      <BioParagraph>
          {t('bio_public_p3')}
      </BioParagraph>
      <BioParagraph>
          {t('bio_public_p4')}
      </BioParagraph>
      <BioParagraph className="font-mono text-amber-200" html={t('bio_public_p5_links')} />
    </AnimatedCard>
  );
};

export default PublicProfileCard;