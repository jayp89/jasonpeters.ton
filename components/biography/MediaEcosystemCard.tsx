
import React from 'react';
import AnimatedCard from '../AnimatedCard';
import { SectionHeader, SubSubHeader, BioParagraph, BioOrderedList, BioListItem } from './shared';
import StyledText from '../TextWithTonIcon';
import { useLanguage } from '../../contexts/LanguageContext';

const MediaEcosystemCard: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
      <SectionHeader>{t('bio_media_title')}</SectionHeader>
      
      <SubSubHeader>{t('bio_media_subtitle1')}</SubSubHeader>
      <BioParagraph html={t('bio_media_p1')} />
      <BioParagraph>
          {t('bio_media_p2')}
      </BioParagraph>

      <SubSubHeader>{t('bio_media_subtitle2')}</SubSubHeader>
      <BioParagraph html={t('bio_media_p3')} />

      <SubSubHeader>{t('bio_media_subtitle3')}</SubSubHeader>
      <BioParagraph html={t('bio_media_p4')} />

      <SubSubHeader>{t('bio_media_subtitle4')}</SubSubHeader>
      <BioParagraph>{t('bio_media_p5')}</BioParagraph>
      <BioOrderedList>
          <BioListItem html={t('bio_media_li1')} />
          <BioListItem>
            <StyledText text={t('bio_media_li2')} />
          </BioListItem>
          <BioListItem html={t('bio_media_li3')} />
          <BioListItem html={t('bio_media_li4')} />
      </BioOrderedList>
    </AnimatedCard>
  );
};

export default MediaEcosystemCard;