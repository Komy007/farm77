import { useLanguage, translations } from '@/contexts/LanguageContext';

export default function LocationSection() {
  const { t } = useLanguage();

  return (
    <section id="location" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            <i className="fas fa-map-marker-alt text-farm-green mr-2 sm:mr-3"></i>
            {t(translations.locationTitle)}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            {t(translations.locationDescription)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Location Details */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-r from-farm-green to-deep-green p-4 sm:p-6 rounded-2xl text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                <i className="fas fa-info-circle mr-2"></i>{t(translations.farmInformation)}
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-sm sm:text-base">
                  <i className="fas fa-expand-arrows-alt w-5 sm:w-6 text-golden"></i>
                  <span data-testid="text-farm-area" className="ml-2">총면적: 77헥타르 637㎡ (Total: 77ha 0637㎡)</span>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <i className="fas fa-road w-5 sm:w-6 text-golden"></i>
                  <span className="ml-2">국도 5번 인접 (Adjacent to National Road 5)</span>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <i className="fas fa-clock w-5 sm:w-6 text-golden"></i>
                  <span className="ml-2">프놈펜에서 1시간 47분 (1h 47m from Phnom Penh)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-sky-blue/10 p-4 sm:p-6 rounded-xl border border-sky-blue/20">
                <i className="fas fa-route text-sky-blue text-xl sm:text-2xl mb-2 sm:mb-3"></i>
                <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{t(translations.transportAccess)}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">국도 5번 직접 연결로 뛰어난 접근성</p>
                <button
                  onClick={async () => {
                    try {
                      // Try direct link approach first
                      const link = document.createElement('a');
                      link.href = '/77ha_Farm_Boundary.kml';
                      link.download = '77ha_Mango_Farm_Boundary.kml';
                      link.target = '_blank';

                      // Force download for all devices
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);

                      // Success message
                      setTimeout(() => {
                        alert('KML 파일 다운로드가 시작되었습니다!\n\n📍 사용방법:\n• 구글어스: 파일을 드래그 앤 드롭\n• 구글맵: "나의 지도"에서 가져오기\n• 스마트폰: Google Earth 앱에서 열기\n\n파일명: 77ha_Mango_Farm_Boundary.kml');
                      }, 100);

                    } catch (error) {
                      console.error('KML 다운로드 오류:', error);
                      // Fallback: open in new tab
                      window.open('/77ha_Farm_Boundary.kml', '_blank');
                      alert('다운로드 대신 새 탭에서 파일을 열었습니다.\n\n브라우저에서 "다른 이름으로 저장"을 선택해주세요.');
                    }
                  }}
                  className="bg-sky-blue hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center w-full justify-center"
                  data-testid="button-download-farm-kml"
                >
                  <i className="fas fa-download mr-1"></i>
                  Google Earth KML Download
                </button>
              </div>
              <div className="bg-farm-green/10 p-4 sm:p-6 rounded-xl border border-farm-green/20">
                <i className="fas fa-leaf text-farm-green text-xl sm:text-2xl mb-2 sm:mb-3"></i>
                <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{t(translations.farmingEnvironment)}</h4>
                <p className="text-xs sm:text-sm text-gray-600">비옥한 토양과 우수한 수자원</p>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              {/* 실제 구글 지도 이미지 */}
              <img
                src="/assets/Land_Goole_Map_1755151005817.png"
                alt="캄보디아 깜퐁츠낭 농장 위치 지도 - Tang Krasang에서 프놈펜까지의 경로"
                className="w-full h-64 sm:h-80 object-cover"
                data-testid="img-farm-location-map"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-farm-green/10 p-3 sm:p-4 rounded-xl border border-farm-green/20">
                <div className="text-farm-green mb-2">
                  <i className="fas fa-check-circle mr-2"></i>
                  <span className="text-xs sm:text-sm font-medium">
                    Tang Krasang → Phnom Penh
                  </span>
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  86.3km, 1시간 47분 소요<br />
                  National Road 5를 통한 직접 접근
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/12%C2%B005'03.3%22N+104%C2%B036'16.9%22E/@12.08425148031846,104.6047017911196,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-farm-green hover:bg-deep-green text-white p-3 sm:p-4 rounded-xl text-center transition-colors flex items-center justify-center"
                data-testid="button-google-maps"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                <span className="text-xs sm:text-sm font-medium">구글지도에서 보기</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}