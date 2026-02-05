import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en' | 'fr' | 'zh' | 'km';

interface LanguageContent {
  ko: string;
  en: string;
  fr: string;
  zh: string;
  km: string;
}

interface LanguageContextType {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  t: (content: LanguageContent) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const languages = {
  ko: { name: '한국어', flag: '🇰🇷' },
  en: { name: 'English', flag: '🇺🇸' },
  fr: { name: 'Français', flag: '🇫🇷' },
  zh: { name: '中文', flag: '🇨🇳' },
  km: { name: 'ភាសាខ្មែរ', flag: '🇰🇭' }
};

export const translations = {
  // Navigation
  home: { ko: '홈', en: 'Home', fr: 'Accueil', zh: '首页', km: 'ទំព័រដើម' },
  location: { ko: '위치', en: 'Location', fr: 'Emplacement', zh: '位置', km: 'ទីតាំង' },
  photos: { ko: '사진', en: 'Photos', fr: 'Photos', zh: '照片', km: 'រូបថត' },
  documents: { ko: '서류', en: 'Documents', fr: 'Documents', zh: '文件', km: 'ឯកសារ' },
  contact: { ko: '연락처', en: 'Contact', fr: 'Contact', zh: '联系', km: 'ទំនាក់ទំនង' },

  // Hero Section
  heroTitle: {
    ko: 'Dream Farm & 온천 리조트',
    en: 'Dream Farm & Hot Spring Resort',
    fr: 'Dream Farm & Station Thermale',
    zh: 'Dream Farm & 温泉度假村',
    km: 'Dream Farm & រមណីយដ្ឋានទឹកក្តៅ'
  },
  heroLocation: {
    ko: '캄보디아 깜퐁츠낭성 당끄라상 지역',
    en: 'Tang Krasang, Kampong Chhnang, Cambodia',
    fr: 'Tang Krasang, Kampong Chhnang, Cambodge',
    zh: '柬埔寨磅清扬省 Tang Krasang',
    km: 'តំបន់តាំងក្រសាំង ខេត្តកំពង់ឆ្នាំង កម្ពុជា'
  },
  totalArea: { ko: '총면적', en: 'Total Area', fr: 'Surface Totale', zh: '总面积', km: 'ផ្ទៃដីសរុប' },
  totalAreaValue: { ko: '77.0637 헥타르', en: '77.0637 Hectares', fr: '77.0637 Hectares', zh: '77.0637 公顷', km: '៧៧.០៦៣៧ ហិកតា' },
  fromPhnomPenh: { ko: '프놈펜에서', en: 'From Phnom Penh', fr: 'De Phnom Penh', zh: '距金边', km: 'ពីភ្នំពេញ' },
  distanceValue: { ko: '86km 거리', en: '86km distance', fr: '86km de distance', zh: '86公里距离', km: 'ចម្ងាយ ៨៦ គីឡូម៉ែត្រ' },
  duration: { ko: '소요시간', en: 'Duration', fr: 'Durée', zh: '耗时', km: 'រយៈពេល' },
  durationValue: { ko: '1시간 47분', en: '1 hour 47 minutes', fr: '1h 47min', zh: '1小时47分钟', km: '១ ម៉ោង ៤៧ នាទី' },
  viewLocation: { ko: '위치 보기', en: 'View Location', fr: 'Voir Emplacement', zh: '查看位置', km: 'មើលទីតាំង' },
  contactUs: { ko: '문의하기', en: 'Contact Us', fr: 'Nous Contacter', zh: '联系我们', km: 'ទាក់ទងមកយើង' },

  // Location Section
  locationTitle: {
    ko: '위치 및 접근성',
    en: 'Location & Accessibility',
    fr: 'Emplacement et Accessibilité',
    zh: '位置与交通',
    km: 'ទីតាំង និងភាពងាយស្រួលក្នុងការធ្វើដំណើរ'
  },
  locationDescription: {
    ko: '캄보디아의 주요 교통 요충지인 국도 5번을 따라 위치한 77헥타르 규모의 프리미엄 농장입니다.',
    en: 'Located along National Road 5, a major transportation hub in Cambodia, this 77-hectare premium farm offers excellent accessibility.',
    fr: 'Située le long de la Route Nationale 5, un important centre de transport au Cambodge, cette ferme premium de 77 hectares offre une excellente accessibilité.',
    zh: '位于柬埔寨主要交通枢纽5号国道旁，这座77公顷的精品农场交通十分便利。',
    km: 'កសិដ្ឋានលំដាប់ខ្ពស់ទំហំ ៧៧ ហិកតា ស្ថិតនៅតាមបណ្តោយផ្លូវជាតិលេខ ៥ ដែលជាមជ្ឈមណ្ឌលដឹកជញ្ជូនដ៏សំខាន់ក្នុងប្រទេសកម្ពុជា។'
  },
  farmInformation: { ko: '농장 정보', en: 'Farm Information', fr: 'Informations sur la Ferme', zh: '农场信息', km: 'ព័ត៌មានកសិដ្ឋាន' },
  transportAccess: { ko: '교통 접근성', en: 'Transportation Access', fr: 'Accès Transport', zh: '交通便利性', km: 'ភាពងាយស្រួលក្នុងការដឹកជញ្ជូន' },
  farmingEnvironment: { ko: '농업 환경', en: 'Farming Environment', fr: 'Environnement Agricole', zh: '农业环境', km: 'បរិយាកាសកសិកម្ម' },

  // Photo Gallery
  photoGalleryTitle: {
    ko: '농장 사진 갤러리',
    en: 'Farm Photo Gallery',
    fr: 'Galerie Photos de la Ferme',
    zh: '农场相册',
    km: 'វិចិត្រសាលរូបភាពកសិដ្ឋាន'
  },
  photoGalleryDescription: {
    ko: '농장의 실제 모습과 주변 환경을 다양한 각도에서 촬영한 고품질 사진들을 확인하세요.',
    en: 'High-quality photos showcasing the farm\'s actual conditions and surrounding environment from various angles.',
    fr: 'Photos de haute qualité présentant les conditions réelles de la ferme et l\'environnement environnant sous différents angles.',
    zh: '从不同角度拍摄的高质量相片，展示农场的实际情况和周边环境。',
    km: 'ពិនិត្យរូបថតដែលមានគុណភាពខ្ពស់ដែលបង្ហាញពីស្ថានភាពជាក់ស្តែងនៃកសិដ្ឋាន និងបរិស្ថានជុំវិញពីមុំផ្សេងៗគ្នា។'
  },
  allPhotos: { ko: '전체', en: 'All Photos', fr: 'Toutes Photos', zh: '全部', km: 'ទាំងអស់' },
  aerial: { ko: '항공사진', en: 'Aerial', fr: 'Aérienne', zh: '航拍', km: 'រូបថតពីលើអាកាស' },
  ground: { ko: '지상사진', en: 'Ground', fr: 'Sol', zh: '实拍', km: 'រូបថតផ្ទាល់ដី' },
  fruits: { ko: '농장과일', en: 'Farm Fruits', fr: 'Fruits de la Ferme', zh: '农场水果', km: 'ផ្លែឈើកសិដ្ឋាន' },
  maps: { ko: '지도', en: 'Maps', fr: 'Cartes', zh: '地图', km: 'ផែនទី' },

  // Documents Section
  documentsTitle: {
    ko: '관련 서류 및 문서',
    en: 'Documents & Legal Papers',
    fr: 'Documents et Papiers Légaux',
    zh: '相关法律文件',
    km: 'ឯកសារ និងក្រដាសស្នាមពាក់ព័ន្ធ'
  },
  documentsDescription: {
    ko: '농장과 관련된 모든 법적 서류와 문서를 투명하게 공개합니다.',
    en: 'All legal documents and papers related to the farm are transparently disclosed.',
    fr: 'Tous les documents légaux et papiers relatifs à la ferme sont divulgués de manière transparente.',
    zh: '公开与农场相关的所有法律文件，确保透明度。',
    km: 'រាល់ឯកសារច្បាប់ និងក្រដាសស្នាមដែលទាក់ទងនឹងកសិដ្ឋានត្រូវបានបង្ហាញដោយតម្លាភាព។'
  },
  documentCategories: {
    ko: '문서 카테고리',
    en: 'Document Categories',
    fr: 'Catégories de Documents',
    zh: '文件类别',
    km: 'ប្រភេទឯកសារ'
  },
  landTitle: { ko: '토지 소유권 증서', en: 'Land Title Certificate', fr: 'Certificat de Titre Foncier', zh: '土地产权证', km: 'ប័ណ្ណកម្មសិទ្ធិដីធ្លី' },
  surveyDocs: { ko: '측량 관련 문서', en: 'Survey & Mapping Documents', fr: 'Documents d\'Arpentage et Cartographie', zh: '测绘文件', km: 'ឯកសារវាស់វែង និងផែនទី' },
  legalDocs: { ko: '법적 서류', en: 'Legal Documentation', fr: 'Documentation Légale', zh: '法律文件', km: 'ឯកសារច្បាប់' },

  // Contact Section
  contactTitle: {
    ko: '연락처 및 문의',
    en: 'Contact & Inquiry',
    fr: 'Contact et Demande',
    zh: '联系与咨询',
    km: 'ព័ត៌មានទំនាក់ទំនង'
  },
  contactDescription: {
    ko: '77헥타르 프리미엄 농장에 대한 문의사항이 있으시면 언제든지 연락주세요.',
    en: 'Please feel free to contact us if you have any inquiries about our 77-hectare premium farm.',
    fr: 'N\'hésitez pas à nous contacter si vous avez des questions concernant notre ferme premium de 77 hectares.',
    zh: '如果您对我们77公顷的高级农场有任何疑问，请随时联系。',
    km: 'សូមទាក់ទងមកយើងខ្ញុំ ប្រសិនបើអ្នកមានចម្ងល់អំពីកសិដ្ឋានលំដับខ្ពស់ទំហំ ៧៧ ហិកតាមរបស់យើង។'
  },
  contactInfo: { ko: '연락처 정보', en: 'Contact Information', fr: 'Informations de Contact', zh: '联系信息', km: 'ព័ត៌មានទំនាក់ទំនង' },
  phone: { ko: '전화번호', en: 'Phone', fr: 'Téléphone', zh: '电话', km: 'លេខទូរស័ព្ទ' },
  email: { ko: '이메일', en: 'Email', fr: 'Email', zh: '电子邮件', km: 'អ៊ីមែល' },
  officeHours: { ko: '상담 시간', en: 'Office Hours', fr: 'Heures de Bureau', zh: '办公时间', km: 'ម៉ោងធ្វើការ' },
  callNow: { ko: '즉시 통화하기', en: 'Call Now', fr: 'Appeler Maintenant', zh: '现在拨打', km: 'ហៅទូរស័ព្ទឥឡូវនេះ' },
  sendEmail: { ko: '이메일 보내기', en: 'Send Email', fr: 'Envoyer Email', zh: '发送邮件', km: 'ផ្ញើអ៊ីមែល' },
  whatsappInquiry: { ko: 'WhatsApp 문의', en: 'WhatsApp Inquiry', fr: 'Demande WhatsApp', zh: 'WhatsApp咨询', km: 'ទំនាក់ទំនងតាម WhatsApp' },
  inquiryForm: { ko: '문의 양식', en: 'Inquiry Form', fr: 'Formulaire de Demande', zh: '咨询表单', km: 'ទម្រង់បែបបទសាកសួរ' },
  name: { ko: '이름', en: 'Name', fr: 'Nom', zh: '姓名', km: 'ឈ្មោះ' },
  inquiryType: { ko: '문의 유형', en: 'Inquiry Type', fr: 'Type de Demande', zh: '咨询类型', km: 'ប្រភេទនៃសំណួរ' },
  message: { ko: '메시지', en: 'Message', fr: 'Message', zh: '留言', km: 'សារ' },
  sendInquiry: { ko: '문의 보내기', en: 'Send Inquiry', fr: 'Envoyer Demande', zh: '提交咨询', km: 'ផ្ញើសំណួរ' },
  pleaseSelect: { ko: '선택해주세요', en: 'Please select', fr: 'Veuillez sélectionner', zh: '请选择', km: 'សូមជ្រើសរើស' },
  siteVisit: { ko: '현장 방문', en: 'Site Visit', fr: 'Visite de Site', zh: '现场参观', km: 'មកពិនិត្យទីតាំងផ្ទាល់' },
  investmentInquiry: { ko: '투자 문의', en: 'Investment Inquiry', fr: 'Demande d\'Investissement', zh: '投资咨询', km: 'សាកសួរអំពីការវិនិយោគ' },
  partnership: { ko: '파트너십', en: 'Partnership', fr: 'Partenariat', zh: '合作伙伴', km: 'ភាពជាដៃគូ' },
  generalInquiry: { ko: '일반 문의', en: 'General Inquiry', fr: 'Demande Générale', zh: '一般咨询', km: 'សំណួរទូទៅ' },
  mineralMap: { ko: '캄보디아 광물 지도', en: 'Cambodia Mineral Map', fr: 'Carte Minière du Cambodge', zh: '柬埔寨矿产地图', km: 'ផែនទីរ៉ែនៅកម្ពុជា' },
  mineralMapDesc: { ko: '캄보디아 등 주요 광물 자원 분포 지도', en: 'Map of Major Mineral Resources in Cambodia', fr: 'Carte des principales ressources minérales au Cambodge', zh: '柬埔寨主要矿产资源分布图', km: 'ផែនទីនៃធនធានរ៉ែសំខាន់ៗនៅកម្ពុជា' },
  hotSprings: { ko: '온천', en: 'Hot Springs', fr: 'Sources Thermales', zh: '温泉', km: 'ទឹកពុះ' },
  privacyAgreement: {
    ko: '개인정보 처리방침에 동의합니다.',
    en: 'I agree to the privacy policy.',
    fr: 'J\'accepte la politique de confidentialité.',
    zh: '我同意隐私政策。',
    km: 'ខ្ញុំយល់ព្រមតាមគោលការណ៍ឯកជនភាព។'
  },

  // Footer
  companyDescription: {
    ko: '캄보디아 프리미엄 농지 투자 및 농업 사업 전문',
    en: 'Premium farmland investment and agricultural business in Cambodia',
    fr: 'Investissement foncier agricole premium et commerce agricole au Cambodge',
    zh: '柬埔寨精品农地投资与农业业务专家',
    km: 'អ្នកឯកទេសវិនិយោគដីកសិកម្ម និងអាជីវកម្មកសិកម្មនៅកម្ពុជា'
  },
  quickLinks: { ko: '빠른 링크', en: 'Quick Links', fr: 'Liens Rapides', zh: '快速链接', km: 'តំណភ្ជាប់រហ័ស' },
  legalInfo: { ko: '법적 정보', en: 'Legal Information', fr: 'Informations Légales', zh: '法律信息', km: 'ព័ត៌មានច្បាប់' },
  privacyPolicy: { ko: '개인정보처리방침', en: 'Privacy Policy', fr: 'Politique de Confidentialité', zh: '隐私政策', km: 'គោលការណ៍ឯកជនភាព' },
  termsOfService: { ko: '이용약관', en: 'Terms of Service', fr: 'Conditions d\'Utilisation', zh: '服务条款', km: 'លក្ខខណ្ឌប្រើប្រាស់' },

  // Document Section specific
  front: { ko: '앞면', en: 'Front', fr: 'Recto', zh: '正面', km: 'ខាងមុខ' },
  back: { ko: '뒷면', en: 'Back', fr: 'Verso', zh: '背面', km: 'ខាងក្រោយ' },
  download: { ko: '다운로드', en: 'Download', fr: 'Télécharger', zh: '下载', km: 'ទាញយក' },
  fullscreen: { ko: '전체화면', en: 'Fullscreen', fr: 'Plein écran', zh: '全屏', km: 'ពង្រីកពេញអេក្រង់' },
  clickToView: { ko: '클릭하여 문서 보기', en: 'Click to view document', fr: 'Cliquez pour voir le document', zh: '点击查看文件', km: 'ចុចដើម្បីមើលឯកសារ' },
  docViewer: { ko: '문서 뷰어', en: 'Document Viewer', fr: 'Visionneuse de documents', zh: '文件预览', km: 'កម្មវិធីមើលឯកសារ' },
  selectDoc: { ko: '문서를 선택해주세요', en: 'Please select a document', fr: 'Veuillez sélectionner un document', zh: '请选择文件', km: 'សូមជ្រើសរើសឯកសារ' },
  landTitleComplete: {
    ko: '캄보디아 토지 소유권 증서 완전본',
    en: 'Cambodia Land Title Certificate - Complete',
    fr: 'Certificat de Titre Foncier du Cambodge - Complet',
    zh: '柬埔寨土地产权证全本',
    km: 'ប័ណ្ណកម្មសិទ្ធិដីធ្លីកម្ពុជា - ច្បាប់ពេញលេញ'
  },
  analysis: { ko: '분석', en: 'Analysis', fr: 'Analyse', zh: '分析', km: 'ការវិភាគ' },
  landTitleAnalysis: { ko: '토지 증서 분석', en: 'Land Title Analysis', fr: 'Analyse du Titre Foncier', zh: '土地产权证分析', km: 'ការវិភាគប័ណ្ណកម្មសិទ្ធិដីធ្លី' },
  surveyInfo: { ko: '측량 문서 정보', en: 'Survey Information', fr: 'Informations d\'Arpentage', zh: '测绘信息', km: 'ព័ត៌មានវាស់វែង' },
  officeHoursValue: { ko: '월-금 9:00-18:00 (캄보디아 시간)', en: 'Mon-Fri 9:00-18:00 (Cambodia Time)', fr: 'Lun-Ven 9:00-18:00 (Heure du Cambodge)', zh: '周一至周五 9:00-18:00 (柬埔寨时间)', km: 'ច័ន្ទ-សុក្រ 9:00-18:00 (ម៉ោងនៅកម្ពុជា)' },
  directAccess: { ko: '국도 5번 직접 연결로 뛰어난 접근성', en: 'Excellent accessibility with direct connection to National Road 5', fr: 'Excellente accessibilité avec connexion directe à la Route Nationale 5', zh: '直通5号国道，交通极为便利', km: 'ភាពងាយស្រួលក្នុងការធ្វើដំណើរខ្ពស់ ជាមួយនឹងការតភ្ជាប់ផ្ទាល់ទៅផ្លូវជាតិលេខ ៥' },
  farmingDesc: { ko: '비옥한 토양과 우수한 수자원', en: 'Fertile soil and excellent water resources', fr: 'Sol fertile et excellentes ressources en eau', zh: '土地肥沃，水源充足', km: 'ដីមានជីជាតិ និងធនធានទឹកដ៏ល្អប្រសើរ' },
  galleryNote: { ko: '사진 갤러리 안내', en: 'Photo Gallery Info', fr: 'Infos Galerie Photos', zh: '相册指南', km: 'ព័ត៌មានវិចិត្រសាលរូបភាព' },
  galleryDesc: {
    ko: '실제 농장 사진은 현장 방문 시 촬영되어 업데이트됩니다. 더 많은 고해상도 사진이 필요하시면 연락주세요.',
    en: 'Actual farm photos will be updated after site visit. Contact us for more high-resolution images.',
    fr: 'Les photos réelles de la ferme seront mises à jour après la visite. Contactez-nous pour plus d\'images haute résolution.',
    zh: '实际农场照片将在现场参观后更新。如需更多高分辨率照片，请联系我们。',
    km: 'រូបថតកសិដ្ឋានជាក់ស្តែងនឹងត្រូវបានធ្វើបច្ចុប្បន្នភាពបន្ទាប់ពីចុះពិនិត្យទីតាំងផ្ទាល់។ សូមទាក់ទងមកយើងខ្ញុំ ប្រសិនបើអ្នកត្រូវការរូបថតដែលមានគុណភាពច្បាស់ជាងនេះ។'
  },
  viewGoogleMaps: { ko: '구글지도에서 보기', en: 'View on Google Maps', fr: 'Voir sur Google Maps', zh: '在谷歌地图中查看', km: 'មើលក្នុងផែនទី Google' },
  googleMapsArea: { ko: '구글지도 영역지도', en: 'Google Maps Area Map', fr: 'Carte de Zone Google Maps', zh: '谷歌地图区域图', km: 'ផែនទីតំបន់ Google' }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
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
    console.log(`Language changed to: ${newLanguage}`);
    setLanguage(newLanguage);

    // 언어 변경 알림
    const messages = {
      ko: '한국어로 변경되었습니다.',
      en: 'Language changed to English.',
      fr: 'Langue changée en français.',
      zh: '已切换至中文',
      km: 'បានប្តូរទៅជាភាសាខ្មែរ'
    };

    setTimeout(() => {
      alert(messages[newLanguage]);
    }, 100);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}