
import React from 'react';
import AnimatedCard from '../AnimatedCard';
import { SectionHeader, SubSubHeader, SubSubSubHeader, BioParagraph, BioTable, BioTableHead, BioTableHeader, BioTableBody, BioTableRow, BioTableCell } from './shared';
import StyledText from '../TextWithTonIcon';
import { useLanguage } from '../../contexts/LanguageContext';

export const VenturesCard: React.FC = () => {
  const { t } = useLanguage();
  return (
    <AnimatedCard>
        <SectionHeader>{t('bio_ventures_title')}</SectionHeader>
        
        <SubSubHeader>{t('bio_ventures_subtitle1')}</SubSubHeader>
        <BioParagraph html={t('bio_ventures_p1')} />
        <BioParagraph>{t('bio_ventures_p2')}</BioParagraph>
        <BioParagraph html={t('bio_ventures_p3')} />
        <BioParagraph>{t('bio_ventures_p4')}</BioParagraph>
        <BioParagraph>{t('bio_ventures_p5')}</BioParagraph>

        <SubSubHeader>{t('bio_ventures_subtitle2')}</SubSubHeader>
        <BioParagraph html={t('bio_ventures_p6')} />
        
        <SubSubHeader>{t('bio_ventures_subtitle3')}</SubSubHeader>
        <BioParagraph>
            <StyledText text={t('bio_ventures_p7')} />
        </BioParagraph>
        <BioParagraph html={t('bio_ventures_p8')} />
        <BioParagraph>
            <StyledText text={t('bio_ventures_p9')} />
        </BioParagraph>

        <SubSubSubHeader>{t('bio_ventures_subtitle4')}</SubSubSubHeader>
        <BioParagraph>{t('bio_ventures_p10')}</BioParagraph>
        <BioTable>
            <BioTableHead>
                <BioTableHeader>{t('bio_ventures_table1_header1')}</BioTableHeader>
                <BioTableHeader>{t('bio_ventures_table1_header2')}</BioTableHeader>
            </BioTableHead>
            <BioTableBody>
                <BioTableRow><BioTableCell><strong>{t('project_etn_learn_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r1_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_dns_name')}</strong></BioTableCell><BioTableCell><StyledText text={t('bio_ventures_t1r2_c2')} /></BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_hosting_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r3_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_pay_name')}</strong></BioTableCell><BioTableCell><StyledText text={t('bio_ventures_t1r4_c2')} /></BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_council_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r5_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_ads_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r6_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_daily_name')}</strong></BioTableCell><BioTableCell><StyledText text={t('bio_ventures_t1r7_c2')} /></BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_mesewer_books_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r8_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_ex_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r9_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_staking_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r10_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_jemaa_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r11_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_netsa_lancer_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r12_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_travel_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r13_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_cards_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r14_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_templates_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r15_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_fm_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r16_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_numbers_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r17_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_guardians_of_ethiopia_name')}</strong></BioTableCell><BioTableCell><StyledText text={t('bio_ventures_t1r18_c2')} /></BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_auth_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r19_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_gulit_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r20_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_equb_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r21_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_devs_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r22_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_bio_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r23_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_netsaai_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r24_c2')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('project_etn_authenticator_name')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t1r25_c2')}</BioTableCell></BioTableRow>
            </BioTableBody>
        </BioTable>

        <SubSubSubHeader>{t('bio_ventures_subtitle5')}</SubSubSubHeader>
        <BioParagraph>{t('bio_ventures_p11')}</BioParagraph>
        <BioTable>
            <BioTableHead>
                <BioTableHeader>{t('bio_ventures_table2_header1')}</BioTableHeader>
                <BioTableHeader>{t('bio_ventures_table2_header2')}</BioTableHeader>
                <BioTableHeader>{t('bio_ventures_table2_header3')}</BioTableHeader>
            </BioTableHead>
            <BioTableBody>
                <BioTableRow><BioTableCell><strong>{t('bio_ventures_t2r1_c1')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t2r1_c2')}</BioTableCell><BioTableCell>{t('bio_ventures_t2r1_c3')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('bio_ventures_t2r2_c1')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t2r2_c2')}</BioTableCell><BioTableCell>{t('bio_ventures_t2r2_c3')}</BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('bio_ventures_t2r3_c1')}</strong></BioTableCell><BioTableCell>{t('bio_ventures_t2r3_c2')}</BioTableCell><BioTableCell><StyledText text={t('bio_ventures_t2r3_c3')} /></BioTableCell></BioTableRow>
                <BioTableRow><BioTableCell><strong>{t('bio_ventures_t2r4_c1')}</strong></BioTableCell><BioTableCell><StyledText text={t('bio_ventures_t2r4_c2')} /></BioTableCell><BioTableCell>{t('bio_ventures_t2r4_c3')}</BioTableCell></BioTableRow>
                {/* FIX: Completed the missing table row which was causing a parsing error. */}
                <BioTableRow><BioTableCell><strong>{t('bio_ventures_t2r5_c1')}</strong></BioTableCell><BioTableCell><StyledText text={t('bio_ventures_t2r5_c2')}/></BioTableCell><BioTableCell>{t('bio_ventures_t2r5_c3')}</BioTableCell></BioTableRow>
            </BioTableBody>
        </BioTable>

        <SubSubSubHeader>{t('bio_ventures_subtitle6')}</SubSubSubHeader>
        <BioParagraph>
            <StyledText text={t('bio_ventures_p12')} />
        </BioParagraph>
        <BioParagraph>
            <StyledText text={t('bio_ventures_p13')} />
        </BioParagraph>
    </AnimatedCard>
  );
};
