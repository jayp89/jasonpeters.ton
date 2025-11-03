
import React from 'react';
import AnimatedCard from '../AnimatedCard';
import { SectionHeader, BioParagraph } from './shared';
import StyledText from '../TextWithTonIcon';
import { useLanguage } from '../../contexts/LanguageContext';

const ExecutiveSummaryCard: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
        <SectionHeader>{t('bio_exec_summary_title')}</SectionHeader>
        <BioParagraph>
            {t('bio_exec_summary_p1')}
        </BioParagraph>
        <BioParagraph>
            {t('bio_exec_summary_p2')}
        </BioParagraph>
        <BioParagraph>
            <StyledText text={t('bio_exec_summary_p3')} />
        </BioParagraph>
        <BioParagraph>
            {t('bio_exec_summary_p4')}
        </BioParagraph>
    </AnimatedCard>
  );
};

export default ExecutiveSummaryCard;