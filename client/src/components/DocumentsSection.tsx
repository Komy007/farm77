import { useState } from "react";
import { useLanguage, translations } from '@/contexts/LanguageContext';

export default function DocumentsSection() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [showBackSide, setShowBackSide] = useState(false);
  const { t } = useLanguage();

  // 앞면 이미지 정보
  const frontImages = [
    {
      src: "/assets/KakaoTalk_20250814_105931496_1755154153874.jpg",
      title: "1페이지 앞면",
      number: "0408071O-2004",
      area: "73,000m²",
      scale: "1/12000"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_01_1755154153875.jpg",
      title: "2페이지 앞면",
      number: "0408071O-2003",
      area: "51,877m²",
      scale: "1/10000"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_02_1755154153875.jpg",
      title: "3페이지 앞면",
      number: "0408071O-2007",
      area: "120,000m²",
      scale: "1/10000"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_03_1755154153876.jpg",
      title: "4페이지 앞면",
      number: "0408071O-2009",
      area: "92,717m²",
      scale: "1/8500"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_04_1755154153876.jpg",
      title: "5페이지 앞면",
      number: "0408071O-2006",
      area: "106,561m²",
      scale: "1/11000"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_05_1755154153877.jpg",
      title: "6페이지 앞면",
      number: "0408071O-1158",
      area: "140,786m²",
      scale: "1/15000"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_06_1755154153877.jpg",
      title: "7페이지 앞면",
      number: "0408071O-2005",
      area: "68,796m²",
      scale: "1/7500"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_07_1755154153877.jpg",
      title: "8페이지 앞면",
      number: "0408071O-2008",
      area: "104,316m²",
      scale: "1/10000"
    }
  ];

  // 뒷면 이미지 정보
  const backImages = [
    {
      src: "/assets/KakaoTalk_20250814_105931496_10_1755154234568.jpg",
      title: "1페이지 뒷면",
      number: "0408071O-2004",
      description: "추가 법적 정보"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_09_1755154234567.jpg",
      title: "2페이지 뒷면",
      number: "0408071O-2003",
      description: "추가 법적 정보"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_10_1755154234568.jpg",
      title: "3페이지 뒷면",
      number: "0408071O-2007",
      description: "추가 법적 정보"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_15_1755154234571.jpg",
      title: "4페이지 뒷면",
      number: "0408071O-2009",
      description: "추가 법적 정보"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_12_1755154234569.jpg",
      title: "5페이지 뒷면",
      number: "0408071O-2006",
      description: "추가 법적 정보"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_08_1755154234566.jpg",
      title: "6페이지 뒷면",
      number: "0408071O-1158",
      description: "추가 법적 정보"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_11_1755154234569.jpg",
      title: "7페이지 뒷면",
      number: "0408071O-2005",
      description: "추가 법적 정보"
    },
    {
      src: "/assets/KakaoTalk_20250814_105931496_14_1755154234570.jpg",
      title: "8페이지 뒷면",
      number: "0408071O-2008",
      description: "추가 법적 정보"
    }
  ];

  const handleImageClick = (src: string) => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `<img src="${src}" class="max-w-full max-h-full object-contain" /><button class="absolute top-4 right-4 text-white text-2xl hover:bg-white hover:bg-opacity-20 rounded p-2" onclick="this.parentElement.remove()">&times;</button>`;
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    document.body.appendChild(modal);
  };

  return (
    <section id="docs" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            <i className="fas fa-file-contract text-farm-green mr-2 sm:mr-3"></i>
            {t(translations.documentsTitle)}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            {t(translations.documentsDescription)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Document Categories */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
              <i className="fas fa-folder-open text-farm-green mr-2"></i>
              {t(translations.documentCategories)}
            </h3>

            {/* Land Title Documents */}
            <div className="bg-gradient-to-r from-farm-green to-deep-green text-white p-4 sm:p-6 rounded-xl cursor-pointer hover:shadow-lg transition-all" onClick={() => setSelectedDoc('landTitle')}>
              <div className="flex items-center mb-3 sm:mb-4">
                <i className="fas fa-certificate text-xl sm:text-2xl mr-2 sm:mr-3"></i>
                <h4 className="text-base sm:text-lg font-semibold">{t(translations.landTitle)}</h4>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center">
                  <i className="fas fa-check-circle mr-2 text-golden"></i>
                  <span>정부 발행 공식 토지 증서</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle mr-2 text-golden"></i>
                  <span>77헥타르 면적 확인서</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle mr-2 text-golden"></i>
                  <span>소유권 이전 가능 확인</span>
                </div>
              </div>
              <div className="mt-3 text-xs opacity-75">
                <i className="fas fa-mouse-pointer mr-1"></i>{t(translations.clickToView)}
              </div>
            </div>

            {/* Survey Documents */}
            <div className="bg-sky-blue/10 border border-sky-blue/20 p-4 sm:p-6 rounded-xl cursor-pointer hover:shadow-lg transition-all" onClick={() => setSelectedDoc('survey')}>
              <div className="flex items-center mb-3 sm:mb-4">
                <i className="fas fa-map text-sky-blue text-xl sm:text-2xl mr-2 sm:mr-3"></i>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900">{t(translations.surveyDocs)}</h4>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center">
                  <i className="fas fa-check-circle mr-2 text-sky-blue"></i>
                  <span>정밀 측량 문서</span>
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-600">
                <i className="fas fa-mouse-pointer mr-1"></i>{t(translations.clickToView)}
              </div>
            </div>

          </div>

          {/* Document Viewer */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
              <i className="fas fa-eye text-farm-green mr-2"></i>
              {t(translations.docViewer)}
            </h3>

            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              {/* Document Viewer */}
              {selectedDoc === 'landTitle' ? (
                <div className="bg-white p-4">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 mb-1">{t(translations.landTitleComplete)}</h4>
                        <p className="text-sm text-gray-600">Cambodia Land Title Certificate - Complete 16 Pages</p>
                      </div>

                      {/* 앞면/뒷면 전환 버튼 */}
                      <div className="flex bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() => setShowBackSide(false)}
                          className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${!showBackSide
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                          {t(translations.front)}
                        </button>
                        <button
                          onClick={() => setShowBackSide(true)}
                          className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${showBackSide
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                          {t(translations.back)}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                    {/* 조건부 렌더링 */}
                    {!showBackSide ? (
                      // 앞면 이미지들
                      frontImages.map((image, index) => (
                        <div key={index} className="space-y-2">
                          <img
                            src={image.src}
                            alt={`토지 증서 ${image.title}`}
                            className="w-full h-auto border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                            onClick={() => handleImageClick(image.src)}
                          />
                          <div className="text-xs text-gray-500 text-center space-y-1">
                            <p className="font-semibold">{image.title}</p>
                            <p>번호: {image.number} | 면적: {image.area}</p>
                            <p>측량 축척: {image.scale}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      // 뒷면 이미지들
                      backImages.map((image, index) => (
                        <div key={index} className="space-y-2">
                          <img
                            src={image.src}
                            alt={`토지 증서 ${image.title}`}
                            className="w-full h-auto border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                            onClick={() => handleImageClick(image.src)}
                          />
                          <div className="text-xs text-gray-500 text-center space-y-1">
                            <p className="font-semibold">{image.title}</p>
                            <p>번호: {image.number}</p>
                            <p>{image.description}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">
                      <i className="fas fa-info-circle mr-2"></i>
                      {t(translations.landTitleAnalysis)}
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
                      <div>
                        <p className="font-medium mb-1">발행 기간: 2003-2009년</p>
                        <p className="font-medium mb-1">총 면적 합계: 약 776,053m² (77.6헥타르)</p>
                        <p className="font-medium mb-1">위치: 캄보디아 깜퐁츠낭 주</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">• 정부 공식 발행 토지 증서 8장</p>
                        <p className="font-medium mb-1">• 각각 다른 구역의 토지 소유권</p>
                        <p className="font-medium mb-1">• QR 코드 및 공식 인증 도장 확인</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 p-2 bg-green-50 rounded-lg">
                    <p className="text-xs text-green-700 text-center">
                      <i className="fas fa-check-circle mr-1"></i>
                      {showBackSide ? '뒷면 표시 중 - 법적 정보 및 추가 세부사항' : '앞면 표시 중 - 기본 소유권 정보'}
                    </p>
                  </div>
                </div>
              ) : selectedDoc === 'survey' ? (
                <div className="bg-white p-4">
                  <div className="mb-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">정밀 측량 문서</h4>
                    <p className="text-sm text-gray-600">Precision Survey Document - Land Area Measurement</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
                    <div className="space-y-2">
                      <img
                        src="/assets/Map_Land_1755154669805.jpeg"
                        alt="정밀 측량 문서 - 토지 면적 및 경계 확정"
                        className="w-full h-auto border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => handleImageClick("/assets/Map_Land_1755154669805.jpeg")}
                      />
                      <div className="text-xs text-gray-500 text-center space-y-1">
                        <p className="font-semibold">정밀 측량 결과서</p>
                        <p>토지 면적 및 경계 확정 문서</p>
                        <p>Professional Land Survey Report</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-sky-50 rounded-lg">
                    <h5 className="font-semibold text-sky-800 mb-2">
                      <i className="fas fa-info-circle mr-2"></i>
                      {t(translations.surveyInfo)}
                    </h5>
                    <div className="text-sm text-sky-700">
                      <p className="font-medium mb-1">• 정밀 측량을 통한 토지 경계 확정</p>
                      <p className="font-medium mb-1">• 총 면적 77헥타르 (770,000㎡) 확인</p>
                      <p className="font-medium mb-1">• GPS 좌표 기반 정확한 위치 측정</p>
                      <p className="font-medium mb-1">• 캄보디아 공식 측량 기준 준수</p>
                    </div>
                  </div>
                </div>

              ) : (
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-64 sm:h-96 flex items-center justify-center">
                  <div className="text-center text-gray-600 p-4">
                    <i className="fas fa-file-pdf text-4xl sm:text-6xl mb-3 sm:mb-4"></i>
                    <p className="text-base sm:text-lg font-semibold">{t(translations.docViewer)}</p>
                    <p className="text-xs sm:text-sm mt-1">{t(translations.selectDoc)}</p>
                  </div>
                </div>
              )}

              <div className="p-3 sm:p-4 bg-white border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {selectedDoc === 'landTitle' ? '토지 소유권 증서 (Land Title Certificate)' :
                        selectedDoc === 'survey' ? '측량 문서 (Survey Documents)' :
                          '문서를 선택해주세요'}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {selectedDoc === 'landTitle' ? '캄보디아 정부 발행 공식 토지 증서' :
                        selectedDoc === 'survey' ? '정밀 측량을 통한 토지 경계 확정 문서' :
                          '왼쪽에서 문서 카테고리를 선택하세요'}
                    </p>
                  </div>
                  {selectedDoc && (
                    <div className="flex gap-2">
                      <button
                        className="bg-farm-green text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm hover:bg-deep-green transition-colors"
                        data-testid="button-download-doc"
                      >
                        <i className="fas fa-download mr-1"></i>{t(translations.download)}
                      </button>
                      <button
                        className="bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm hover:bg-gray-300 transition-colors"
                        data-testid="button-fullscreen-doc"
                      >
                        <i className="fas fa-expand mr-1"></i>{t(translations.fullscreen)}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}