import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage, translations } from '@/contexts/LanguageContext';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    privacy: false
  });

  const { toast } = useToast();
  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.privacy) {
      const errorMessages = {
        ko: { title: "필수 항목 확인", description: "모든 필수 항목을 입력해주세요." },
        en: { title: "Required Fields", description: "Please fill in all required fields." },
        fr: { title: "Champs Obligatoires", description: "Veuillez remplir tous les champs obligatoires." },
        zh: { title: "必填项确认", description: "请填写所有必填项。" },
        km: { title: "សូមពិនិត្យមើលវាលដែលត្រូវបំពេញ", description: "សូមបំពេញគ្រប់វាលដែលត្រូវបំពេញទាំងអស់។" }
      };

      toast({
        title: errorMessages[language].title,
        description: errorMessages[language].description,
        variant: "destructive"
      });
      return;
    }

    const successMessages = {
      ko: { title: "문의 접수 완료", description: "문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다." },
      en: { title: "Inquiry Received", description: "Your inquiry has been received. We will contact you soon." },
      fr: { title: "Demande Reçue", description: "Votre demande a été reçue. Nous vous contacterons bientôt." },
      zh: { title: "咨询提交成功", description: "您的咨询已收到，我们将尽快与您联系。" },
      km: { title: "ការសាកសួរត្រូវបានបញ្ចប់", description: "សំណួររបស់អ្នកត្រូវបានទទួលហើយ។ យើងនឹងទាក់ទងទៅអ្នកក្នុងពេលឆាប់ៗនេះ។" }
    };

    toast({
      title: successMessages[language].title,
      description: successMessages[language].description
    });
    // ... (reset form part kept as is)
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const inquiryOptions: Record<string, { value: string, label: string }[]> = {
    ko: [
      { value: "", label: "선택해주세요" },
      { value: "visit", label: "현장 방문" },
      { value: "investment", label: "투자 문의" },
      { value: "partnership", label: "파트너십" },
      { value: "general", label: "일반 문의" }
    ],
    en: [
      { value: "", label: "Please select" },
      { value: "visit", label: "Site Visit" },
      { value: "investment", label: "Investment Inquiry" },
      { value: "partnership", label: "Partnership" },
      { value: "general", label: "General Inquiry" }
    ],
    fr: [
      { value: "", label: "Veuillez sélectionner" },
      { value: "visit", label: "Visite de Site" },
      { value: "investment", label: "Demande d'Investissement" },
      { value: "partnership", label: "Partenariat" },
      { value: "general", label: "Demande Générale" }
    ],
    zh: [
      { value: "", label: "请选择" },
      { value: "visit", label: "现场参观" },
      { value: "investment", label: "投资咨询" },
      { value: "partnership", label: "合作伙伴" },
      { value: "general", label: "一般咨询" }
    ],
    km: [
      { value: "", label: "សូមជ្រើសរើស" },
      { value: "visit", label: "មកពិនិត្យទីតាំងផ្ទាល់" },
      { value: "investment", label: "សាកសួរអំពីការវិនិយោគ" },
      { value: "partnership", label: "ភាពជាដៃគូ" },
      { value: "general", label: "សំណួរទូទៅ" }
    ]
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            <i className="fas fa-handshake text-golden mr-2 sm:mr-3"></i>
            {t(translations.contactTitle)}
          </h2>
          <p className="text-base sm:text-lg opacity-90 px-4">
            {t(translations.contactDescription)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              <i className="fas fa-address-book text-golden mr-2"></i>
              {t(translations.contactInfo)}
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
                <div className="flex items-center">
                  <i className="fas fa-user text-golden text-lg sm:text-xl mr-3 sm:mr-4"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">담당자 Contact Person</p>
                    <p className="text-xs sm:text-sm opacity-90" data-testid="text-contact-person">주동락/Joo Dong Rak</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
                <div className="flex items-center">
                  <i className="fas fa-phone text-golden text-lg sm:text-xl mr-3 sm:mr-4"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{t(translations.phone)}</p>
                    <div className="text-xs sm:text-sm opacity-90 space-y-1">
                      <p data-testid="text-phone-kr">한국 (KR): +82 10-6562-7061</p>
                      <p data-testid="text-phone-kh">(KH): +855-12-637-061</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-golden text-lg sm:text-xl mr-3 sm:mr-4"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{t(translations.email)}</p>
                    <div className="text-xs sm:text-sm opacity-90 space-y-1">
                      <p data-testid="text-email-1">rak7829@daum.net</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
                <div className="flex items-center">
                  <i className="fab fa-whatsapp text-golden text-lg sm:text-xl mr-3 sm:mr-4"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">WhatsApp</p>
                    <p className="text-xs sm:text-sm opacity-90" data-testid="text-whatsapp">+855 95-779-873</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
                <div className="flex items-center">
                  <i className="fas fa-clock text-golden text-lg sm:text-xl mr-3 sm:mr-4"></i>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{t(translations.officeHours)}</p>
                    <p className="text-xs sm:text-sm opacity-90">{t(translations.officeHoursValue)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:+85512637061"
                className="w-full bg-farm-green hover:bg-deep-green text-white p-3 sm:p-4 rounded-xl font-semibold flex items-center justify-center transition-colors hover-lift text-sm sm:text-base"
                data-testid="link-call-now"
              >
                <i className="fas fa-phone mr-2 sm:mr-3"></i>
                {t(translations.callNow)}
              </a>
              <a
                href="mailto:rak7829@daum.net"
                className="w-full bg-sky-blue hover:bg-water-blue text-white p-3 sm:p-4 rounded-xl font-semibold flex items-center justify-center transition-colors hover-lift text-sm sm:text-base"
                data-testid="link-send-email"
              >
                <i className="fas fa-envelope mr-2 sm:mr-3"></i>
                {t(translations.sendEmail)}
              </a>
              <a
                href="https://wa.me/85595779873"
                className="w-full bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-xl font-semibold flex items-center justify-center transition-colors hover-lift text-sm sm:text-base"
                data-testid="link-whatsapp"
              >
                <i className="fab fa-whatsapp mr-2 sm:mr-3"></i>
                {t(translations.whatsappInquiry)}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              <i className="fas fa-paper-plane text-golden mr-2"></i>
              {t(translations.inquiryForm)}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">{t(translations.name)} *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-white/60 focus:border-golden focus:outline-none text-sm sm:text-base"
                  placeholder="Your full name"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">{t(translations.email)} *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-white/60 focus:border-golden focus:outline-none text-sm sm:text-base"
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">{t(translations.phone)}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-white/60 focus:border-golden focus:outline-none text-sm sm:text-base"
                  placeholder="+855 XX XXX XXXX"
                  data-testid="input-phone"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">{t(translations.inquiryType)}</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white focus:border-golden focus:outline-none text-sm sm:text-base"
                  data-testid="select-inquiry-type"
                >
                  {inquiryOptions[language].map(option => (
                    <option key={option.value} value={option.value} className="bg-gray-800">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">{t(translations.message)} *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-white/60 focus:border-golden focus:outline-none resize-none text-sm sm:text-base"
                  placeholder="Please describe your inquiry in detail..."
                  data-testid="textarea-message"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleInputChange}
                  required
                  className="mt-1 mr-2 sm:mr-3 text-golden"
                  id="privacy"
                  data-testid="checkbox-privacy"
                />
                <label htmlFor="privacy" className="text-xs sm:text-sm opacity-90">
                  {t(translations.privacyAgreement)}
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-golden hover:bg-yellow-600 text-gray-900 font-bold py-3 sm:py-4 rounded-lg transition-colors hover-lift text-sm sm:text-base"
                data-testid="button-submit-inquiry"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                {t(translations.sendInquiry)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}