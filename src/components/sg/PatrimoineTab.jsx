const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { useLang, t } from '@/hooks/useLang';
import appData from '@/data/appData';

export default function PatrimoineTab() {
  const { lang } = useLang();
  const { patrimoine } = appData;

  return (
    <div className="px-5 pt-4 pb-6">
      <h1 className="font-playfair text-2xl font-bold text-forest mb-5">
        {t(patrimoine.title, lang)}
      </h1>

      <div className="space-y-6">
        {patrimoine.items.map((item, i) =>
        <div key={i} className="border border-forest/10 rounded-xl overflow-hidden">
            <div className="aspect-[16/10] overflow-hidden bg-charcoal/5">
              <img src="https://media.db.com/images/public/6a561f4976e100fe63ce6670/e7e209f7d_ed71c612a_logo.png"

            alt={t(item.name, lang)}
            className="w-full h-full object-cover" />
            
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{item.icon}</span>
                <h3 className="font-playfair text-lg font-semibold text-charcoal">
                  {t(item.name, lang)}
                </h3>
              </div>
              <p className="font-inter text-sm text-charcoal/60 leading-relaxed">
                {t(item.description, lang)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>);

}