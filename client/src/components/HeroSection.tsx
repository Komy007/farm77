import { useLanguage, translations } from '@/contexts/LanguageContext';

export default function HeroSection() {
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
  };

  return (
    <section id="home" className="relative min-h-screen farm-hero-bg">
      {/* 텍스트 가독성을 위한 매우 가벼운 오버레이만 */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-20 flex items-center justify-center min-h-screen text-white px-4">
        <div className="text-center animate-slide-up max-w-lg mx-auto">
          {/* 메인 제목 - 다국어 지원 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-tight text-white" style={{ 
            textShadow: '4px 4px 8px rgba(0,0,0,1), 2px 2px 4px rgba(0,0,0,0.8), 0px 0px 3px rgba(0,0,0,0.9)',
            WebkitTextStroke: '1px rgba(0,0,0,0.3)'
          }}>
            {(() => {
              const title = t(translations.heroTitle);
              if (title.includes('77')) {
                const parts = title.split(' ');
                const firstPart = parts.find(part => part.includes('77')) || parts[0];
                const remainingParts = parts.filter(part => part !== firstPart).join(' ');
                return (
                  <>
                    <span className="text-white">{firstPart}</span><br/>
                    <span className="text-golden">{remainingParts}</span>
                  </>
                );
              } else {
                const words = title.split(' ');
                const halfway = Math.ceil(words.length / 2);
                return (
                  <>
                    <span className="text-white">{words.slice(0, halfway).join(' ')}</span><br/>
                    <span className="text-golden">{words.slice(halfway).join(' ')}</span>
                  </>
                );
              }
            })()}
          </h1>
          
          {/* 요약 정보 - 다국어 지원 */}
          <div className="space-y-3 mb-8 text-center max-w-sm mx-auto">
            <div className="text-white" style={{ 
              textShadow: '4px 4px 8px rgba(0,0,0,1), 2px 2px 4px rgba(0,0,0,0.8), 0px 0px 3px rgba(0,0,0,0.9)',
              WebkitTextStroke: '0.5px rgba(0,0,0,0.3)'
            }}>
              <div className="text-lg font-bold text-golden">{t(translations.totalArea)} {t(translations.totalAreaValue)}</div>
            </div>
            
            <div className="text-white" style={{ 
              textShadow: '4px 4px 8px rgba(0,0,0,1), 2px 2px 4px rgba(0,0,0,0.8), 0px 0px 3px rgba(0,0,0,0.9)',
              WebkitTextStroke: '0.5px rgba(0,0,0,0.3)'
            }}>
              <div className="text-lg font-bold text-golden">{t(translations.fromPhnomPenh)} {t(translations.distanceValue)}</div>
            </div>
            
            <div className="text-white" style={{ 
              textShadow: '4px 4px 8px rgba(0,0,0,1), 2px 2px 4px rgba(0,0,0,0.8), 0px 0px 3px rgba(0,0,0,0.9)',
              WebkitTextStroke: '0.5px rgba(0,0,0,0.3)'
            }}>
              <div className="text-lg font-bold text-golden">{t(translations.duration)} {t(translations.durationValue)}</div>
            </div>
          </div>
          
          {/* 액션 버튼들 - 다국어 지원 */}
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <button 
              onClick={() => scrollToSection('location')}
              className="bg-farm-green hover:bg-deep-green text-white px-6 py-3 rounded-xl font-semibold transition-all hover-lift text-sm flex items-center justify-center"
              data-testid="button-view-location"
            >
              <i className="fas fa-map-marked-alt mr-2"></i>{t(translations.viewLocation)}
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-golden hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover-lift text-sm flex items-center justify-center"
              data-testid="button-contact-us"
            >
              <i className="fas fa-phone mr-2"></i>{t(translations.contactUs)}
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-xl sm:text-2xl opacity-70"></i>
      </div>
    </section>
  );
}