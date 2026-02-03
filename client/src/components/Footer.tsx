import { useEffect, useState } from "react";
import { useLanguage, translations } from '@/contexts/LanguageContext';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const { t } = useLanguage();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-3 sm:mb-4">
              <i className="fas fa-seedling text-farm-green text-xl sm:text-2xl mr-2 sm:mr-3"></i>
              <h3 className="text-lg sm:text-xl font-bold">깜퐁츠낭 농장</h3>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              {t(translations.companyDescription)}
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-farm-green transition-colors"
                data-testid="link-facebook"
              >
                <i className="fab fa-facebook text-lg sm:text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-farm-green transition-colors"
                data-testid="link-instagram"
              >
                <i className="fab fa-instagram text-lg sm:text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-farm-green transition-colors"
                data-testid="link-linkedin"
              >
                <i className="fab fa-linkedin text-lg sm:text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t(translations.quickLinks)}</h4>
            <div className="space-y-1 sm:space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-gray-400 hover:text-white transition-colors text-left text-sm sm:text-base"
                data-testid="footer-link-home"
              >
                {t(translations.home)}
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="block text-gray-400 hover:text-white transition-colors text-left text-sm sm:text-base"
                data-testid="footer-link-location"
              >
                {t(translations.location)}
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-gray-400 hover:text-white transition-colors text-left text-sm sm:text-base"
                data-testid="footer-link-gallery"
              >
                {t(translations.photos)}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-400 hover:text-white transition-colors text-left text-sm sm:text-base"
                data-testid="footer-link-contact"
              >
                {t(translations.contact)}
              </button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">연락처 Contact</h4>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <p><strong>담당자:</strong> Mr. Bae KY.</p>
              <p><strong>전화:</strong> +855 95 779 873</p>
              <p><strong>이메일:</strong> cambodia.bae@gmail.com</p>
              <p><strong>WhatsApp:</strong> +855 95 779 873</p>
              <p className="mt-3 sm:mt-4">
                <a href="mailto:cambodia.bae@gmail.com" className="hover:text-white transition-colors" data-testid="footer-link-email">이메일 문의</a> |{' '}
                <a href="https://wa.me/85595779873" className="hover:text-white transition-colors" data-testid="footer-link-whatsapp">WhatsApp 문의</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p data-testid="text-copyright">
            &copy; <span>{currentYear}</span> 깜퐁츠낭 77헥타르 농장. All rights reserved. | Kampong Chhnang 77-Hectare Farm
          </p>
        </div>
      </div>
    </footer>
  );
}