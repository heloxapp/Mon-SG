import React from 'react';
import { useLang, t } from '@/hooks/useLang';
import { Phone, MapPin, Clock, Train, Zap, ExternalLink } from 'lucide-react';
import appData from '@/data/appData';

export default function CommercesTab() {
  const { lang } = useLang();
  const { commerces, transports } = appData;

  return (
    <div className="px-5 pt-4 pb-6 space-y-8">
      {/* Commerces */}
      <div>
        <h1 className="text-2xl text-forest mb-5 [font-family:'Comfortaa',_system-ui] font-medium">
          {t(commerces.title, lang)}
        </h1>
        <div className="space-y-3">
          {commerces.items.map((item, i) =>
          <div key={i} className="border border-forest/10 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-playfair text-base font-semibold text-charcoal">
                    {t(item.name, lang)}
                  </h3>
                  <p className="font-inter text-xs text-charcoal/50 mb-2">
                    {t(item.type, lang)}
                  </p>
                  <div className="space-y-1">
                    {item.address &&
                  <div className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-forest/50 shrink-0" />
                        <span className="font-inter text-xs text-charcoal/60">{item.address}</span>
                      </div>
                  }
                    {item.phone &&
                  <div className="flex items-center gap-1.5">
                        <Phone size={12} className="text-forest/50 shrink-0" />
                        <a href={`tel:${item.phone.replace(/\s/g, '')}`} className="font-inter text-xs text-forest font-medium">
                          {item.phone}
                        </a>
                      </div>
                  }
                    {item.hours &&
                  <div className="flex items-center gap-1.5">
                        <Clock size={12} className="text-forest/50 shrink-0" />
                        <span className="font-inter text-xs text-charcoal/60">{t(item.hours, lang)}</span>
                      </div>
                  }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Thin separator */}
      <div className="border-t border-forest/8" />

      {/* Transports */}
      <div>
        <h2 className="font-playfair text-lg font-semibold text-charcoal mb-4">
          {t(transports.title, lang)}
        </h2>

        {/* Train */}
        <div className="border border-forest/10 rounded-xl p-4 mb-3">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-forest/8 flex items-center justify-center shrink-0">
              <Train size={18} className="text-forest" />
            </div>
            <div className="flex-1">
              <h3 className="font-playfair text-base font-semibold text-charcoal">
                {t(transports.train.name, lang)}
              </h3>
              <p className="font-inter text-xs text-charcoal/50 mb-3">
                {t(transports.train.line, lang)}
              </p>
              <a
                href={transports.train.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-inter text-xs font-semibold text-forest border border-forest/20 rounded-full px-4 py-1.5 hover:bg-forest hover:text-linen transition-all">
                
                {t(transports.train.linkLabel, lang)}
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* Electric */}
        <div className="border border-forest/10 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-forest/8 flex items-center justify-center shrink-0">
              <Zap size={18} className="text-forest" />
            </div>
            <div>
              <h3 className="font-playfair text-base font-semibold text-charcoal">
                {t(transports.electric.name, lang)}
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <MapPin size={12} className="text-forest/50" />
                <span className="font-inter text-xs text-charcoal/60">
                  {t(transports.electric.location, lang)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}