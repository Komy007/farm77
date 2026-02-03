import { useState } from "react";
import { useLanguage, translations } from '@/contexts/LanguageContext';

// 실제 농장 사진들 import
import farmPhoto16 from '@assets/KakaoTalk_20250814_105931496_16_1755150962661.jpg';
import farmPhoto17 from '@assets/KakaoTalk_20250814_105931496_17_1755150962663.jpg';
import farmPhoto18 from '@assets/KakaoTalk_20250814_105931496_18_1755150962663.jpg';
import farmPhoto19 from '@assets/KakaoTalk_20250814_105931496_19_1755150962664.jpg';
import farmPhoto20 from '@assets/KakaoTalk_20250814_105931496_20_1755150962664.jpg';
import farmPhoto21 from '@assets/KakaoTalk_20250814_105931496_21_1755150962665.jpg';
import farmPhoto22 from '@assets/KakaoTalk_20250814_105931496_22_1755150962665.jpg';
import farmPhoto23 from '@assets/KakaoTalk_20250814_105931496_23_1755150962666.jpg';
import farmPhoto24 from '@assets/KakaoTalk_20250814_105931496_24_1755150962666.jpg';
import farmPhoto25 from '@assets/KakaoTalk_20250814_105931496_25_1755150962667.jpg';
import farmPhoto26 from '@assets/KakaoTalk_20250814_105931496_26_1755150962667.jpg';

// 지도 이미지들 import
import googleMapRoute from '@assets/Land_Goole_Map_1755152544942.png';
import googleMapRoute2 from '@assets/Land_Goole_Map_1755152754498.png';
import landMapImage from '@assets/Map_Land_1755151005817.jpeg';
import googleMapLocation from '@assets/Land_Goole_Map_1755151005817.png';

export default function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t } = useLanguage();

  const photos = [
    // 실제 농장 항공사진들
    {
      id: 1,
      category: 'aerial',
      src: farmPhoto16,
      alt: '캄보디아 깜퐁츠낭 농장 항공뷰',
      title: '과수원 전경',
      subtitle: 'Fruit Orchard Overview',
      titleFr: 'Vue d\'ensemble du verger'
    },
    {
      id: 2,
      category: 'aerial',
      src: farmPhoto17,
      alt: '농장 전체 조감도',
      title: '농장 전체 조감도',
      subtitle: 'Full Farm Aerial View',
      titleFr: 'Vue aérienne complète de la ferme'
    },
    {
      id: 3,
      category: 'aerial',
      src: farmPhoto18,
      alt: '농장 건물과 시설',
      title: '농장 건물과 시설',
      subtitle: 'Farm Buildings & Facilities',
      titleFr: 'Bâtiments et installations de la ferme'
    },
    {
      id: 4,
      category: 'aerial',
      src: farmPhoto19,
      alt: '농장 경작지 전망',
      title: '과수원과 경작지',
      subtitle: 'Orchards & Farmland',
      titleFr: 'Vergers et terres cultivées'
    },
    {
      id: 5,
      category: 'aerial',
      src: farmPhoto20,
      alt: '농장 주변 환경',
      title: '농장 주변 환경',
      subtitle: 'Surrounding Environment',
      titleFr: 'Environnement environnant'
    },
    {
      id: 6,
      category: 'aerial',
      src: farmPhoto21,
      alt: '농장 토지 경계',
      title: '농장 토지 경계',
      subtitle: 'Farm Land Boundaries',
      titleFr: 'Limites du terrain agricole'
    },
    {
      id: 7,
      category: 'aerial',
      src: farmPhoto22,
      alt: '농장 접근로',
      title: '농장 접근로',
      subtitle: 'Farm Access Roads',
      titleFr: 'Routes d\'accès à la ferme'
    },
    {
      id: 8,
      category: 'aerial',
      src: farmPhoto23,
      alt: '농장 대형 나무들',
      title: '자연 수목 보전',
      subtitle: 'Natural Tree Conservation',
      titleFr: 'Conservation des arbres naturels'
    },
    // 지상 농작물 사진들
    {
      id: 9,
      category: 'ground',
      src: farmPhoto24,
      alt: '농장 지상 작업',
      title: '농장 관리 작업',
      subtitle: 'Farm Management Work',
      titleFr: 'Travaux de gestion agricole'
    },
    {
      id: 10,
      category: 'ground',
      src: farmPhoto25,
      alt: '과수원 내부',
      title: '과수원 내부 전경',
      subtitle: 'Inside the Fruit Orchard',
      titleFr: 'Intérieur du verger'
    },
    {
      id: 11,
      category: 'ground',
      src: farmPhoto26,
      alt: '농장 접근 도로',
      title: '농장 접근 도로',
      subtitle: 'Farm Access Road',
      titleFr: 'Route d\'accès à la ferme'
    },
    // 지도 이미지들
    {
      id: 12,
      category: 'maps',
      src: googleMapRoute,
      alt: 'Tang Krasang에서 프놈펜까지 경로',
      title: '프놈펜 경로 지도',
      subtitle: 'Route Map to Phnom Penh',
      titleFr: 'Carte de route vers Phnom Penh'
    },
    {
      id: 13,
      category: 'maps',
      src: landMapImage,
      alt: '농장 토지 지도',
      title: '농장 위치 지도',
      subtitle: 'Farm Location Map',
      titleFr: 'Carte de localisation de la ferme'
    },
    {
      id: 14,
      category: 'maps',
      src: googleMapLocation,
      alt: '구글 지도 위치',
      title: '구글 지도 위치',
      subtitle: 'Google Maps Location',
      titleFr: 'Localisation Google Maps'
    },
    {
      id: 15,
      category: 'maps',
      src: googleMapRoute2,
      alt: 'Tang Krasang 농장 위치 경로 지도',
      title: '캄보디아 깜퐁츠낭 농장 위치 지도 - Tang Krasang에서 프놈펜까지의 경로',
      subtitle: 'Cambodia Kampong Chhnang Farm Location Map - Route from Tang Krasang to Phnom Penh',
      titleFr: 'Carte de localisation de la ferme Kampong Chhnang Cambodge - Route de Tang Krasang à Phnom Penh'
    }
  ];

  const filteredPhotos = activeFilter === 'all' ? photos : photos.filter(photo => photo.category === activeFilter);

  const filters = [
    { key: 'all', label: t(translations.allPhotos) },
    { key: 'aerial', label: t(translations.aerial) },
    { key: 'ground', label: t(translations.ground) },
    { key: 'maps', label: t(translations.maps) }
  ];

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            <i className="fas fa-camera-retro text-farm-green mr-2 sm:mr-3"></i>
            {t(translations.photoGalleryTitle)}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            {t(translations.photoGalleryDescription)}
          </p>
        </div>
        
        {/* Photo Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeFilter === filter.key
                  ? 'bg-farm-green text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              data-testid={`filter-${filter.key}`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="hover-lift animate-fade-in" data-testid={`photo-${photo.id}`}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-40 sm:h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base" data-testid={`photo-title-${photo.id}`}>
                    {photo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">{photo.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Photo Gallery Note */}
        <div className="mt-8 sm:mt-12 text-center px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 max-w-2xl mx-auto">
            <i className="fas fa-info-circle text-blue-600 text-xl sm:text-2xl mb-2 sm:mb-3"></i>
            <h3 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">사진 갤러리 안내</h3>
            <p className="text-blue-700 text-xs sm:text-sm">
              실제 농장 사진은 현장 방문 시 촬영되어 업데이트됩니다. 더 많은 고해상도 사진이 필요하시면 연락주세요.
              <br className="hidden sm:block" />
              <span className="text-xs">Actual farm photos will be updated after site visit. Contact us if you need more high-resolution images.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}