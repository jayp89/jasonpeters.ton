
import React from 'react';
import AnimatedCard from '../AnimatedCard';
import { SectionHeader, BioTable, BioTableHead, BioTableHeader, BioTableBody, BioTableRow, BioTableCell } from './shared';
import StyledText from '../TextWithTonIcon';
import { useLanguage } from '../../contexts/LanguageContext';

const ChronologyCard: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
      <SectionHeader>{t('bio_chrono_title')}</SectionHeader>
      <BioTable>
        <BioTableHead>
            <BioTableHeader>{t('bio_chrono_col_period')}</BioTableHeader>
            <BioTableHeader>{t('bio_chrono_col_org')}</BioTableHeader>
            <BioTableHeader>{t('bio_chrono_col_role')}</BioTableHeader>
            <BioTableHeader>{t('bio_chrono_col_notes')}</BioTableHeader>
        </BioTableHead>
        <BioTableBody>
            <BioTableRow>
                <BioTableCell>{t('bio_chrono_row1_period')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row1_org')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row1_role')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row1_notes')}</BioTableCell>
            </BioTableRow>
            <BioTableRow>
                <BioTableCell>{t('bio_chrono_row2_period')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row2_org')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row2_role')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row2_notes')}</BioTableCell>
            </BioTableRow>
            <BioTableRow>
                <BioTableCell>{t('bio_chrono_row3_period')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row3_org')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row3_role')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row3_notes')}</BioTableCell>
            </BioTableRow>
            <BioTableRow>
                <BioTableCell>{t('bio_chrono_row4_period')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row4_org')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row4_role')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row4_notes')}</BioTableCell>
            </BioTableRow>
            <BioTableRow>
                <BioTableCell>{t('bio_chrono_row5_period')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row5_org')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row5_role')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row5_notes')}</BioTableCell>
            </BioTableRow>
            <BioTableRow>
                <BioTableCell>{t('bio_chrono_row6_period')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row6_org')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row6_role')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row6_notes')}</BioTableCell>
            </BioTableRow>
            <BioTableRow>
                <BioTableCell>{t('bio_chrono_row7_period')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row7_org')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row7_role')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row7_notes')}</BioTableCell>
            </BioTableRow>
            <BioTableRow>
                <BioTableCell>{t('bio_chrono_row8_period')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row8_org')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row8_role')}</BioTableCell>
                <BioTableCell>{t('bio_chrono_row8_notes')}</BioTableCell>
            </BioTableRow>
            <BioTableRow>
                <BioTableCell>{t('bio_chrono_row9_period')}</BioTableCell>
                <BioTableCell><StyledText text={t('bio_chrono_row9_org')} /></BioTableCell>
                <BioTableCell>{t('bio_chrono_row9_role')}</BioTableCell>
                <BioTableCell><StyledText text={t('bio_chrono_row9_notes')} /></BioTableCell>
            </BioTableRow>
        </BioTableBody>
      </BioTable>
    </AnimatedCard>
  );
};

export default ChronologyCard;