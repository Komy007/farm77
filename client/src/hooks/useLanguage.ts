import { useState, useEffect } from 'react';

export type Language = 'ko' | 'en' | 'fr';

interface LanguageContent {
  ko: string;
  en: string;
  fr: string;
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage or default to Korean
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as Language) || 'ko';
    }
    return 'ko';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const t = (content: LanguageContent): string => {
    return content[language];
  };

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return { language, changeLanguage, t };
}

// Language content definitions
export const languages = {
  ko: { name: '한국어', flag: '🇰🇷' },
  en: { name: 'English', flag: '🇺🇸' },
  fr: { name: 'Français', flag: '🇫🇷' }
};

export const translations = {
  // Navigation
  home: { ko: '홈', en: 'Home', fr: 'Accueil' },
  location: { ko: '위치', en: 'Location', fr: 'Emplacement' },
  googleEarth: { ko: '구글어스', en: 'Google Earth', fr: 'Google Earth' },
  photos: { ko: '사진', en: 'Photos', fr: 'Photos' },
  documents: { ko: '서류', en: 'Documents', fr: 'Documents' },
  contact: { ko: '연락처', en: 'Contact', fr: 'Contact' },

  // Hero Section
  heroTitle: { 
    ko: '77헥타르 프리미엄 농장', 
    en: '77-Hectare Premium Farm', 
    fr: 'Ferme Premium de 77 Hectares' 
  },
  heroLocation: { 
    ko: '캄보디아 깜퐁츠낭성 당끄라상 지역', 
    en: 'Tang Krasang, Kampong Chhnang, Cambodia', 
    fr: 'Tang Krasang, Kampong Chhnang, Cambodge' 
  },
  totalArea: { ko: '총면적', en: 'Total Area', fr: 'Surface Totale' },
  fromPhnomPenh: { ko: '프놈펜에서', en: 'From Phnom Penh', fr: 'De Phnom Penh' },
  duration: { ko: '소요시간', en: 'Duration', fr: 'Durée' },
  viewLocation: { ko: '위치 보기', en: 'View Location', fr: 'Voir Emplacement' },
  contactUs: { ko: '문의하기', en: 'Contact Us', fr: 'Nous Contacter' },

  // Location Section
  locationTitle: { 
    ko: '위치 및 접근성', 
    en: 'Location & Accessibility', 
    fr: 'Emplacement et Accessibilité' 
  },
  locationDescription: { 
    ko: '캄보디아의 주요 교통 요충지인 국도 5번을 따라 위치한 77헥타르 규모의 프리미엄 농장입니다.', 
    en: 'Located along National Road 5, a major transportation hub in Cambodia, this 77-hectare premium farm offers excellent accessibility.', 
    fr: 'Située le long de la Route Nationale 5, un important centre de transport au Cambodge, cette ferme premium de 77 hectares offre une excellente accessibilité.' 
  },
  farmInformation: { ko: '농장 정보', en: 'Farm Information', fr: 'Informations sur la Ferme' },
  transportAccess: { ko: '교통 접근성', en: 'Transportation Access', fr: 'Accès Transport' },
  farmingEnvironment: { ko: '농업 환경', en: 'Farming Environment', fr: 'Environnement Agricole' },

  // Google Earth Section
  googleEarthTitle: { 
    ko: '구글어스 탐색', 
    en: 'Google Earth Exploration', 
    fr: 'Exploration Google Earth' 
  },
  googleEarthDescription: { 
    ko: '위성 이미지를 통해 농장의 전체적인 모습과 주변 환경을 자세히 살펴보세요.', 
    en: 'Explore the farm\'s overall layout and surrounding environment through satellite imagery.', 
    fr: 'Explorez la disposition générale de la ferme et l\'environnement environnant grâce aux images satellite.' 
  },
  viewInGoogleEarth: { 
    ko: '구글어스에서 보기', 
    en: 'View in Google Earth', 
    fr: 'Voir dans Google Earth' 
  },
  satelliteFeatures: { 
    ko: '위성 뷰 특징', 
    en: 'Satellite View Features', 
    fr: 'Caractéristiques Vue Satellite' 
  },

  // Photo Gallery
  photoGalleryTitle: { 
    ko: '농장 사진 갤러리', 
    en: 'Farm Photo Gallery', 
    fr: 'Galerie Photos de la Ferme' 
  },
  photoGalleryDescription: { 
    ko: '농장의 실제 모습과 주변 환경을 다양한 각도에서 촬영한 고품질 사진들을 확인하세요.', 
    en: 'High-quality photos showcasing the farm\'s actual conditions and surrounding environment from various angles.', 
    fr: 'Photos de haute qualité présentant les conditions réelles de la ferme et l\'environnement environnant sous différents angles.' 
  },
  allPhotos: { ko: '전체', en: 'All Photos', fr: 'Toutes Photos' },
  aerial: { ko: '항공사진', en: 'Aerial', fr: 'Aérienne' },
  ground: { ko: '지상사진', en: 'Ground', fr: 'Sol' },
  maps: { ko: '지도', en: 'Maps', fr: 'Cartes' },

  // Documents Section
  documentsTitle: { 
    ko: '관련 서류 및 문서', 
    en: 'Documents & Legal Papers', 
    fr: 'Documents et Papiers Légaux' 
  },
  documentsDescription: { 
    ko: '농장과 관련된 모든 법적 서류와 문서를 투명하게 공개합니다.', 
    en: 'All legal documents and papers related to the farm are transparently disclosed.', 
    fr: 'Tous les documents légaux et papiers relatifs à la ferme sont divulgués de manière transparente.' 
  },
  documentCategories: { 
    ko: '문서 카테고리', 
    en: 'Document Categories', 
    fr: 'Catégories de Documents' 
  },
  landTitle: { ko: '토지 소유권 증서', en: 'Land Title Certificate', fr: 'Certificat de Titre Foncier' },
  surveyDocs: { ko: '측량 관련 문서', en: 'Survey & Mapping Documents', fr: 'Documents d\'Arpentage et Cartographie' },
  legalDocs: { ko: '법적 서류', en: 'Legal Documentation', fr: 'Documentation Légale' },

  // Contact Section
  contactTitle: { 
    ko: '연락처 및 문의', 
    en: 'Contact & Inquiry', 
    fr: 'Contact et Demande' 
  },
  contactDescription: { 
    ko: '77헥타르 프리미엄 농장에 대한 문의사항이 있으시면 언제든지 연락주세요.', 
    en: 'Please feel free to contact us if you have any inquiries about our 77-hectare premium farm.', 
    fr: 'N\'hésitez pas à nous contacter si vous avez des questions concernant notre ferme premium de 77 hectares.' 
  },
  contactInfo: { ko: '연락처 정보', en: 'Contact Information', fr: 'Informations de Contact' },
  phone: { ko: '전화번호', en: 'Phone', fr: 'Téléphone' },
  email: { ko: '이메일', en: 'Email', fr: 'Email' },
  officeHours: { ko: '상담 시간', en: 'Office Hours', fr: 'Heures de Bureau' },
  callNow: { ko: '즉시 통화하기', en: 'Call Now', fr: 'Appeler Maintenant' },
  sendEmail: { ko: '이메일 보내기', en: 'Send Email', fr: 'Envoyer Email' },
  whatsappInquiry: { ko: 'WhatsApp 문의', en: 'WhatsApp Inquiry', fr: 'Demande WhatsApp' },
  inquiryForm: { ko: '문의 양식', en: 'Inquiry Form', fr: 'Formulaire de Demande' },
  name: { ko: '이름', en: 'Name', fr: 'Nom' },
  inquiryType: { ko: '문의 유형', en: 'Inquiry Type', fr: 'Type de Demande' },
  message: { ko: '메시지', en: 'Message', fr: 'Message' },
  sendInquiry: { ko: '문의 보내기', en: 'Send Inquiry', fr: 'Envoyer Demande' },
  pleaseSelect: { ko: '선택해주세요', en: 'Please select', fr: 'Veuillez sélectionner' },
  siteVisit: { ko: '현장 방문', en: 'Site Visit', fr: 'Visite de Site' },
  investmentInquiry: { ko: '투자 문의', en: 'Investment Inquiry', fr: 'Demande d\'Investissement' },
  partnership: { ko: '파트너십', en: 'Partnership', fr: 'Partenariat' },
  generalInquiry: { ko: '일반 문의', en: 'General Inquiry', fr: 'Demande Générale' },
  privacyAgreement: { 
    ko: '개인정보 처리방침에 동의합니다.', 
    en: 'I agree to the privacy policy.', 
    fr: 'J\'accepte la politique de confidentialité.' 
  },

  // Footer
  companyDescription: { 
    ko: '캄보디아 프리미엄 농지 투자 및 농업 사업 전문', 
    en: 'Premium farmland investment and agricultural business in Cambodia', 
    fr: 'Investissement foncier agricole premium et commerce agricole au Cambodge' 
  },
  quickLinks: { ko: '빠른 링크', en: 'Quick Links', fr: 'Liens Rapides' },
  legalInfo: { ko: '법적 정보', en: 'Legal Information', fr: 'Informations Légales' },
  privacyPolicy: { ko: '개인정보처리방침', en: 'Privacy Policy', fr: 'Politique de Confidentialité' },
  termsOfService: { ko: '이용약관', en: 'Terms of Service', fr: 'Conditions d\'Utilisation' }
};