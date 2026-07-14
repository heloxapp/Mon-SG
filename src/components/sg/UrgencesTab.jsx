import React from 'react';
import { useLang, t } from '@/hooks/useLang';
import { Phone, MapPin } from 'lucide-react';
import appData from '@/data/appData';

export default function UrgencesTab() {
  const { lang } = useLang();
  const { urgences } = appData;

  const emergencyItems = urgences.items.filter((i) => i.isEmergency);
  const healthItems = urgences.items.filter((i) => !i.isEmergency);

  return (
    <div className="px-5 pt-4 pb-6 space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-red-600 text-xl">✚</span>
          <h1 className="text-2xl text-red-700 [font-family:'Inter',_system-ui,_sans-serif] font-medium">
            {t(urgences.title, lang)}
          </h1>
        </div>
        <p className="font-inter text-xs text-charcoal/40">
          {lang === 'fr' ? 'Appuyez sur un numéro pour appeler.' : 'Tap a number to call.'}
        </p>
      </div>

      {/* Emergency numbers */}
      <div className="grid grid-cols-2 gap-3">
        {emergencyItems.map((item, i) =>
        <a
          key={i}
          href={`tel:${item.phone}`}
          className="border-2 border-red-200 bg-red-50 rounded-xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform">
          
            <span className="text-3xl">{item.icon}</span>
            <span className="text-sm text-red-800 [font-family:'Inter',_system-ui,_sans-serif] font-medium">
              {t(item.name, lang)}
            </span>
            <span className="font-inter text-2xl font-bold text-red-700">{item.phone}</span>
            {item.phoneAlt &&
          <span className="font-inter text-xs text-red-500">{item.phoneAlt}</span>
          }
          </a>
        )}
      </div>

      {/* Thin separator */}
      <div className="border-t border-forest/8" />

      {/* Health services */}
      <div>
        <h2 className="text-lg text-charcoal mb-4 [font-family:'Source_Serif_4',_serif] font-medium">
          {lang === 'fr' ? 'Santé & Soins' : 'Health & Care'}
        </h2>
        <div className="space-y-3">
          {healthItems.map((item, i) =>
          <div key={i} className="border border-forest/10 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5 [font-family:'Albert_Sans',_sans-serif] font-light">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-playfair text-base font-semibold text-charcoal">
                    {t(item.name, lang)}
                  </h3>
                  {item.subtitle &&
                <p className="font-inter text-xs text-charcoal/50 italic">{item.subtitle}</p>
                }
                  <div className="space-y-1 mt-2">
                    {item.address &&
                  <div className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-forest/50 shrink-0" />
                        <span className="font-inter text-xs text-charcoal/60">{item.address}</span>
                      </div>
                  }
                    <a
                    href={`tel:${item.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-1.5 bg-forest/8 rounded-lg px-3 py-2 mt-2 active:bg-forest/15 transition-colors">
                    
                      <Phone size={14} className="text-forest" />
                      <span className="font-inter text-sm text-forest font-semibold">{item.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

}