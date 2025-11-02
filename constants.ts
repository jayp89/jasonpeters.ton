import { JourneyItem, SocialLink, EcosystemProject } from './types';

export const JOURNEY_DATA: JourneyItem[] = [
  { companyKey: "journey_1_company", roleKey: "journey_1_role", period: "Apr 2008 - Apr 2013", logoUrl: "https://etneco.ethio-tech.com/logos/peters-industrial.png" },
  { companyKey: "journey_2_company", roleKey: "journey_2_role", period: "Jun 2009 - Oct 2015", logoUrl: "https://etneco.ethio-tech.com/logos/afro-fm.png" },
  { companyKey: "journey_3_company", roleKey: "journey_3_role", period: "Sep 2011 - Jul 2012", logoUrl: "https://etneco.ethio-tech.com/logos/addis-regency.png" },
  { companyKey: "journey_4_company", roleKey: "journey_4_role", period: "Dec 2013 - Nov 2021", logoUrl: "https://etneco.ethio-tech.com/logos/bunifu.jpg" },
  { companyKey: "journey_5_company", roleKey: "journey_5_role", period: "Sep 2014 - Oct 2015", logoUrl: "https://etneco.ethio-tech.com/logos/afro-fm.png" },
  { companyKey: "journey_6_company", roleKey: "journey_6_role", period: "Dec 2019 - Present", logoUrl: "https://etneco.ethio-tech.com/logos/ethiotech-ai.png" },
  { companyKey: "journey_7_company", roleKey: "journey_7_role", period: "Dec 2019 - Present", logoUrl: "https://etneco.ethio-tech.com/logos/ethio-tech-with-jp.jpg" },
  { companyKey: "journey_8_company", roleKey: "journey_8_role", period: "Oct 2020 - Present", logoUrl: "https://etneco.ethio-tech.com/logos/geez-esport.jpg" },
  { companyKey: "journey_9_company", roleKey: "journey_9_role", period: "Sep 2021 - Present", logoUrl: "https://etneco.ethio-tech.com/logos/ethiotech-news.jpg" },
  { companyKey: "journey_10_company", roleKey: "journey_10_role", period: "2024 - Present", logoUrl: "https://etn.ethio-tech.com/beta1/wp-content/uploads/2023/05/memeseason-final-4-e1685408938352-1024x987.png" },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { key: "youtube", name: "YouTube", icon: "fab fa-youtube", url: "https://youtube.com/c/ETHIOTECHwithJayP", color: "hover:text-red-500" },
    { key: "linkedin", name: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/jason-peters-37761877/", color: "hover:text-amber-400" },
    { key: "github", name: "GitHub", icon: "fab fa-github", url: "https://github.com/jayp89", color: "hover:text-white" },
    { key: "x", name: "X (Twitter)", icon: "fab fa-x-twitter", url: "https://x.com/jason_peters1", color: "hover:text-white" },
    { key: "tiktok", name: "TikTok", icon: "fab fa-tiktok", url: "https://tiktok.com/@ethio_jason", color: "hover:text-amber-400" },
    { key: "telegram_channel", name: "Telegram Channel", icon: "fab fa-telegram", url: "https://t.me/ET_apps", color: "hover:text-amber-400" },
    { key: "telegram_contact", name: "Telegram Contact", icon: "fa fa-paper-plane", url: "https://t.me/jayp89", color: "hover:text-amber-400" }
];

export const ETN_ECOSYSTEM_PROJECTS: EcosystemProject[] = [
    { nameKey: "project_etn_coin_name", descriptionKey: "project_etn_coin_desc" },
    { nameKey: "project_etn_dns_name", descriptionKey: "project_etn_dns_desc" },
    { nameKey: "project_etn_learn_name", descriptionKey: "project_etn_learn_desc" },
    { nameKey: "project_etn_hosting_name", descriptionKey: "project_etn_hosting_desc" },
    { nameKey: "project_etn_pay_name", descriptionKey: "project_etn_pay_desc" },
    { nameKey: "project_etn_council_name", descriptionKey: "project_etn_council_desc" },
    { nameKey: "project_etn_ads_name", descriptionKey: "project_etn_ads_desc" },
    { nameKey: "project_etn_daily_name", descriptionKey: "project_etn_daily_desc" },
    { nameKey: "project_mesewer_books_name", descriptionKey: "project_mesewer_books_desc" },
    { nameKey: "project_etn_ex_name", descriptionKey: "project_etn_ex_desc" },
    { nameKey: "project_etn_staking_name", descriptionKey: "project_etn_staking_desc" },
    { nameKey: "project_etn_jemaa_name", descriptionKey: "project_etn_jemaa_desc" },
    { nameKey: "project_etn_netsa_lancer_name", descriptionKey: "project_etn_netsa_lancer_desc" },
    { nameKey: "project_etn_travel_name", descriptionKey: "project_etn_travel_desc" },
    { nameKey: "project_etn_cards_name", descriptionKey: "project_etn_cards_desc" },
    { nameKey: "project_etn_templates_name", descriptionKey: "project_etn_templates_desc" },
    { nameKey: "project_etn_fm_name", descriptionKey: "project_etn_fm_desc" },
    { nameKey: "project_etn_numbers_name", descriptionKey: "project_etn_numbers_desc" },
    { nameKey: "project_guardians_of_ethiopia_name", descriptionKey: "project_guardians_of_ethiopia_desc" },
    { nameKey: "project_etn_auth_name", descriptionKey: "project_etn_auth_desc" },
    { nameKey: "project_etn_gulit_name", descriptionKey: "project_etn_gulit_desc" },
    { nameKey: "project_etn_equb_name", descriptionKey: "project_etn_equb_desc" },
    { nameKey: "project_etn_devs_name", descriptionKey: "project_etn_devs_desc" },
    { nameKey: "project_etn_bio_name", descriptionKey: "project_etn_bio_desc" },
    { nameKey: "project_netsaai_name", descriptionKey: "project_netsaai_desc" },
    { nameKey: "project_etn_authenticator_name", descriptionKey: "project_etn_authenticator_desc" },
    { nameKey: "project_etn_gebeya_name", descriptionKey: "project_etn_gebeya_desc" }
];


export const TON_WALLET_ADDRESS = "UQAS0ddQ7MDEs5vrE-V1NsRKP-ZfGMdhMm1cy1u3y6oHxeva";
export const TON_AMOUNT_NANOTON = "1000000000";