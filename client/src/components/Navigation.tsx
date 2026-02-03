import { useState, useEffect } from "react";
import { useLanguage, translations } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* 첨부된 이미지 스타일의 컴팩트 헤더 */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex justify-between items-center h-12 sm:h-14">
            {/* 작은 로고 */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center font-bold text-sm sm:text-base text-gray-900"
                data-testid="logo-link"
              >
                <i className="fas fa-home text-gray-600 text-lg mr-1 sm:mr-2"></i>
                <span className="hidden sm:inline">홈</span>
              </button>
            </div>

            {/* 첨부 이미지 스타일의 컴팩트 네비게이션 */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => scrollToSection('location')}
                className="flex items-center text-xs sm:text-sm text-gray-700 hover:text-farm-green font-medium transition-colors px-2 py-1"
                data-testid="nav-location"
              >
                <i className="fas fa-map-marker-alt mr-1"></i>
                <span className="hidden sm:inline">위치</span>
              </button>

              <button
                onClick={() => scrollToSection('gallery')}
                className="flex items-center text-xs sm:text-sm text-gray-700 hover:text-farm-green font-medium transition-colors px-2 py-1"
                data-testid="nav-gallery"
              >
                <i className="fas fa-images mr-1"></i>
                <span className="hidden sm:inline">사진</span>
              </button>

              <button
                onClick={() => scrollToSection('documents')}
                className="flex items-center text-xs sm:text-sm text-gray-700 hover:text-farm-green font-medium transition-colors px-2 py-1"
                data-testid="nav-documents"
              >
                <i className="fas fa-file-alt mr-1"></i>
                <span className="hidden sm:inline">서류</span>
              </button>

              {/* 연락처 버튼을 초록색으로 강조 */}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors flex items-center"
                data-testid="nav-contact"
              >
                <i className="fas fa-phone mr-1"></i>
                연락처
              </button>

              {/* Desktop Language Selector */}
              <div className="hidden md:block ml-2">
                <LanguageSelector />
              </div>
            </div>

            {/* Mobile Language Selector & Menu */}
            <div className="md:hidden flex items-center space-x-3">
              <LanguageSelector />
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md text-gray-700 hover:text-farm-green"
                data-testid="mobile-menu-btn"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu md:hidden fixed inset-y-0 left-0 w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <i className="fas fa-seedling text-farm-green text-2xl mr-3"></i>
                <span className="font-bold text-lg">KP Farm</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-700"
                data-testid="close-menu-btn"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Language Selector for Mobile */}
            <div className="mb-6 flex justify-center">
              <LanguageSelector />
            </div>

            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="mobile-nav-link block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-farm-green w-full text-left"
                data-testid="mobile-nav-home"
              >
                <i className="fas fa-home mr-3"></i>{t(translations.home)}
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="mobile-nav-link block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-farm-green w-full text-left"
                data-testid="mobile-nav-location"
              >
                <i className="fas fa-map-marker-alt mr-3"></i>{t(translations.location)}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="mobile-nav-link block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-farm-green w-full text-left"
                data-testid="mobile-nav-gallery"
              >
                <i className="fas fa-camera mr-3"></i>{t(translations.photos)}
              </button>
              <button
                onClick={() => scrollToSection('docs')}
                className="mobile-nav-link block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-farm-green w-full text-left"
                data-testid="mobile-nav-docs"
              >
                <i className="fas fa-file-alt mr-3"></i>{t(translations.documents)}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="mobile-nav-link block py-3 px-4 bg-farm-green text-white rounded-lg hover:bg-deep-green w-full text-left"
                data-testid="mobile-nav-contact"
              >
                <i className="fas fa-phone mr-3"></i>{t(translations.contact)}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          data-testid="mobile-menu-overlay"
        />
      )}
    </>
  );
}