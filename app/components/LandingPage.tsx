"use client";

import { useState, useEffect } from "react";

export default function LandingPage() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const content = {
    en: {
      badge: "Online BHMS Consultation • ₹199",
      title: "Get Expert Homeopathy Consultation Online",
      subtitle: "Consult Dr. Shivangi Sharma (BHMS) for multiple health concerns from the comfort of your home.",
      bookBtn: "Pay ₹199 & Book Slot",
      seeProblemsBtn: "See Problems We Treat",
      duration: "15–20 Min",
      online: "Online",
      price: "₹199",
      howItWorks: "How It Works",
      steps: [
        "1. Message on WhatsApp",
        "2. Pay ₹199 via UPI",
        "3. Book Appointment Slot on Calendly",
        "4. Receive Confirmation and Google Meet Link"
      ],
      problemsTitle: "Problems We Treat",
      problems: [
        "Migraine",
        "Kidney Stones",
        "Arthritis",
        "Uterine Cyst / Fibroids",
        "Hair Fall",
        "Slip Disc",
        "Piles",
        "PCOD / PCOS"
      ]
    },
    hi: {
      badge: "ऑनलाइन बीएचएमएस परामर्श • ₹199",
      title: "ऑनलाइन विशेषज्ञ होम्योपैथी परामर्श प्राप्त करें",
      subtitle: "घर की आराम से कई स्वास्थ्य समस्याओं के लिए डॉ. शिवांगी शर्मा (बीएचएमएस) से परामर्श लें।",
      bookBtn: "₹199 भुगतान करें और स्लॉट बुक करें",
      seeProblemsBtn: "हम जिन समस्याओं का इलाज करते हैं देखें",
      duration: "15–20 मिनट",
      online: "ऑनलाइन",
      price: "₹199",
      howItWorks: "यह कैसे काम करता है",
      steps: [
        "1. WhatsApp पर संदेश",
        "2. UPI के माध्यम से ₹199 भुगतान करें",
        "3. कैलेंडली पर अपॉइंटमेंट स्लॉट बुक करें",
        "4. पुष्टि और Google Meet लिंक प्राप्त करें"
      ],
      problemsTitle: "हम जिन समस्याओं का इलाज करते हैं",
      problems: [
        "माइग्रेन",
        "किडनी स्टोन",
        "गठिया",
        "गर्भाशय सिस्ट / फाइब्रॉइड्स",
        "बाल झड़ना",
        "स्लिप डिस्क",
        "बवासीर",
        "पीसीओडी / पीसीओएस"
      ]
    }
  };

  const currentContent = content[language];

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-100 text-gray-900">

      {/* Language Toggle */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          {language === 'en' ? 'हिंदी' : 'English'}
        </button>
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-indigo-100 text-indigo-700 rounded-full px-5 py-2 mb-6 font-medium shadow">
            {currentContent.badge}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            {currentContent.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            {currentContent.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://wa.me/9352782738?text=Hi%20I%20want%20to%20pay%20₹199%20for%20consultation"
              target="_blank"
              className="px-8 py-4 rounded-2xl shadow-xl font-semibold bg-indigo-600 text-white"
            >
              {currentContent.bookBtn}
            </a>

            <a
              href="#problems"
              className="px-8 py-4 rounded-2xl bg-pink-100 text-pink-700 shadow"
            >
              {currentContent.seeProblemsBtn}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-white shadow-xl">{currentContent.duration}</div>
            <div className="p-5 rounded-2xl bg-white shadow-xl">{currentContent.online}</div>
            <div className="p-5 rounded-2xl bg-white shadow-xl">{currentContent.price}</div>
          </div>
        </div>

        <div className="p-10 rounded-[32px] shadow-2xl bg-white border border-indigo-100">
          <h3 className="text-2xl font-bold mb-6 text-indigo-700">{currentContent.howItWorks}</h3>
          <div className="space-y-4">
            {currentContent.steps.map((step, index) => (
              <div key={index} className={`p-5 rounded-2xl ${
                index === 0 ? 'bg-blue-50' :
                index === 1 ? 'bg-purple-50' :
                index === 2 ? 'bg-pink-50' : 'bg-green-50'
              }`}>
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDLY BOOKING SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          {language === 'en' ? 'Book Your Appointment' : 'अपना अपॉइंटमेंट बुक करें'}
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          {language === 'en' ? 'After completing payment, book your slot below:' : 'भुगतान पूरा करने के बाद, नीचे अपना स्लॉट बुक करें:'}
        </p>
        <div className="calendly-inline-widget" data-url="https://calendly.com/vaibhavv-sharmaaa001/30min" style={{minWidth:'320px', height:'700px'}}></div>
      </section>

      {/* PROBLEMS SECTION */}
      <section id="problems" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          {currentContent.problemsTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {currentContent.problems.map((problem, index) => (
            <div key={index} className={`p-8 rounded-3xl bg-white shadow-2xl border-l-4 ${
              index % 8 === 0 ? 'border-blue-500' :
              index % 8 === 1 ? 'border-purple-500' :
              index % 8 === 2 ? 'border-pink-500' :
              index % 8 === 3 ? 'border-green-500' :
              index % 8 === 4 ? 'border-yellow-500' :
              index % 8 === 5 ? 'border-indigo-500' :
              index % 8 === 6 ? 'border-red-500' : 'border-teal-500'
            }`}>
              {problem}
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}