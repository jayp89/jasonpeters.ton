
import React from 'react';
import AnimatedCard from '../AnimatedCard';
import { SectionHeader, BioParagraph, BioOrderedList, BioListItem } from './shared';
import { useLanguage } from '../../contexts/LanguageContext';

const DisambiguationCard: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
      <SectionHeader>{t('bio_disambiguation_title')}</SectionHeader>
      <BioParagraph>
          {t('bio_disambiguation_p1')}
      </BioParagraph>
      <BioOrderedList>
          <BioListItem html={t('bio_disambiguation_li1')} />
          <BioListItem html={t('bio_disambiguation_li2')} />
      </BioOrderedList>
    </AnimatedCard>
  );
};

export default DisambiguationCard;