import React from 'react';
import { useLang, t } from '@/hooks/useLang';
import { Smartphone, Share, MoreVertical } from 'lucide-react';
import appData from '@/data/appData';

export default function InstallScreen() {
  const { lang, setLang } = useLang();
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div className="min-h-screen bg-linen flex flex-col items-center justify-center px-6 relative">
      {/* Language toggle */}
      <button
        onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
        className="absolute top-6 right-6 flex items-center gap-1.5 text-sm font-inter font-medium text-charcoal/70 hover:text-forest transition-colors px-3 py-1.5 rounded-full border border-forest/15"
      >
        <span className="text-base">{lang === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
        <span className="uppercase text-xs tracking-wider">{lang}</span>
      </button>

      <div className="max-w-sm w-full flex flex-col items-center text-center">
        {/* Logo */}
        <div className="w-20 h-20 rounded-2xl bg-forest flex items-center justify-center mb-8">
          <span className="font-playfair text-2xl font-bold text-linen">SG</span>
        </div>

        <h1 className="font-playfair text-3xl font-bold text-forest mb-3">
          {t(appData.install.title, lang)}
        </h1>
        <p className="font-inter text-sm text-charcoal/60 mb-12 leading-relaxed">
          {t(appData.install.subtitle, lang)}
        </p>

        {/* Install instructions */}
        <div className="w-full space-y-4">
          {/* iOS instruction */}
          <div className={`border border-forest/12 rounded-xl p-5 text-left transition-all ${isIos ? 'bg-white' : 'bg-transparent opacity-60'}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-forest/8 flex items-center justify-center">
                <Share size={16} className="text-forest" />
              </div>
              <span className="font-inter font-semibold text-sm text-charcoal">iOS / Safari </span>
            </div>
            <p className="font-inter text-sm text-charcoal/70 leading-relaxed">
              {t(appData.install.ios, lang)}
            </p>
          </div>

          {/* Android instruction */}
          <div className={`border border-forest/12 rounded-xl p-5 text-left transition-all ${!isIos ? 'bg-white' : 'bg-transparent opacity-60'}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-forest/8 flex items-center justify-center">
                <MoreVertical size={16} className="text-forest" />
              </div>
              <span className="font-inter font-semibold text-sm text-charcoal">Android / Chrome</span>
            </div>
            <p className="font-inter text-sm text-charcoal/70 leading-relaxed">
              {t(appData.install.android, lang)}
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-2">
          <Smartphone size={14} className="text-charcoal/30" />
          <span className="font-inter text-xs text-charcoal/30 tracking-wide">
            Mon SG v1
          </span>
        </div>
      </div>
    </div>
  );
}