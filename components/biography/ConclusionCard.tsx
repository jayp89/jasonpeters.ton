
import React from 'react';
import AnimatedCard from '../AnimatedCard';
import { SectionHeader, BioParagraph, BioOrderedList, BioListItem } from './shared';
import { useLanguage } from '../../contexts/LanguageContext';

const ConclusionCard: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
      <SectionHeader>{t('bio_conclusion_title')}</SectionHeader>
      <BioParagraph>
          {t('bio_conclusion_p1')}
      </BioParagraph>
      <BioOrderedList>
          <BioListItem html={t('bio_conclusion_li1')} />
          <BioListItem html={t('bio_conclusion_li2')} />
          <BioListItem html={t('bio_conclusion_li3')} />
      </BioOrderedList>
      <BioParagraph>
          {t('bio_conclusion_p2')}
      </BioParagraph>
    </AnimatedCard>
  );
};

export default ConclusionCard;