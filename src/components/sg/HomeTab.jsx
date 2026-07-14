const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { useLang, t } from '@/hooks/useLang';
import { Calendar, ShoppingBag, Landmark, AlertTriangle, ArrowRight, MapPin, Clock } from 'lucide-react';
import appData from '@/data/appData';

const quickLinks = [
{ id: 'agenda', icon: Calendar, label: { fr: 'Agenda', en: 'Events' }, desc: { fr: 'Marchés, fêtes, sports', en: 'Markets, festivals, sports' } },
{ id: 'commerces', icon: ShoppingBag, label: { fr: 'Commerces', en: 'Shops' }, desc: { fr: 'Boutiques & services', en: 'Shops & services' } },
{ id: 'patrimoine', icon: Landmark, label: { fr: 'Patrimoine', en: 'Heritage' }, desc: { fr: 'Monuments & nature', en: 'Monuments & nature' } },
{ id: 'urgences', icon: AlertTriangle, label: { fr: 'Urgences', en: 'Emergency' }, desc: { fr: 'Numéros utiles', en: 'Useful numbers' } }];

export default function HomeTab({ setActiveTab }) {
  const { lang } = useLang();
  const { home, agenda, patrimoine } = appData;

  // First 3 events and 2 heritage items for the highlights
  const featuredEvents = agenda.events.slice(0, 3);
  const featuredPlaces = patrimoine.items.slice(0, 2);

  return (
    <div className="px-5 pt-4 pb-6 space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl text-forest leading-tight mb-3 [font-family:'Alegreya',_serif] font-medium">
          Bienvenue à Saint-Germain-Les-Belles!
        </h1>
        <p className="font-inter text-sm text-charcoal/60 leading-relaxed">
          {t(home.introText, lang)}
        </p>
      </div>

      {/* Quick navigation */}
      <div className="grid grid-cols-2 gap-3">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          const isUrgence = link.id === 'urgences';
          return (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`border rounded-xl p-4 text-left transition-all active:scale-95 ${
              isUrgence ?
              'border-red-200 bg-red-50/60' :
              'border-forest/10 bg-white/50'}`
              }>
              
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 ${
              isUrgence ? 'bg-red-100' : 'bg-forest/8'}`
              }>
                <Icon size={18} className={isUrgence ? 'text-red-600' : 'text-forest'} />
              </div>
              <h3 className="font-playfair text-sm font-semibold text-charcoal">
                {t(link.label, lang)}
              </h3>
              <p className="font-inter text-xs text-charcoal/40 mt-0.5">
                {t(link.desc, lang)}
              </p>
            </button>);

        })}
      </div>

      {/* À l'affiche — current events */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-playfair text-lg font-semibold text-charcoal">
              {lang === 'fr' ? 'À l\'affiche' : 'Highlights'}
            </h2>
            <p className="font-inter text-xs text-charcoal/40 uppercase tracking-wide">
              {lang === 'fr' ? 'En ce moment au village' : 'Happening now'}
            </p>
          </div>
          <button
            onClick={() => setActiveTab('agenda')}
            className="flex items-center gap-1 font-inter text-xs font-semibold text-forest">
            
            {lang === 'fr' ? 'Tout voir' : 'See all'}
            <ArrowRight size={12} />
          </button>
        </div>

        <div className="space-y-3">
          {featuredEvents.map((event, i) =>
          <div
            key={i}
            onClick={() => setActiveTab('agenda')}
            className="border border-forest/10 rounded-xl p-4 active:bg-forest/3 transition-colors cursor-pointer">
            
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{event.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-playfair text-sm font-semibold text-charcoal">
                    {t(event.title, lang)}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-1.5">
                    <div className="flex items-center gap-1">
                      <Clock size={11} className="text-forest/50" />
                      <span className="font-inter text-xs text-charcoal/50">{t(event.date, lang)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={11} className="text-forest/50" />
                      <span className="font-inter text-xs text-charcoal/50">{t(event.location, lang)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* À découvrir — places to visit */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-playfair text-lg font-semibold text-charcoal">
              {lang === 'fr' ? 'À découvrir' : 'To discover'}
            </h2>
            <p className="font-inter text-xs text-charcoal/40 uppercase tracking-wide">
              {lang === 'fr' ? 'Lieux à visiter' : 'Places to visit'}
            </p>
          </div>
          <button
            onClick={() => setActiveTab('patrimoine')}
            className="flex items-center gap-1 font-inter text-xs font-semibold text-forest">
            
            {lang === 'fr' ? 'Tout voir' : 'See all'}
            <ArrowRight size={12} />
          </button>
        </div>

        <div className="space-y-4">
          {featuredPlaces.map((place, i) =>
          <div
            key={i}
            onClick={() => setActiveTab('patrimoine')}
            className="border border-forest/10 rounded-xl overflow-hidden active:scale-[0.98] transition-transform cursor-pointer">
            
              <div className="aspect-[16/9] overflow-hidden bg-charcoal/5">
                <img src="https://media.db.com/images/public/6a561f4976e100fe63ce6670/50a234811_photo-12694.jpg"

              alt={t(place.name, lang)}
              className="w-full h-full object-cover" />
              
              </div>
              <div className="p-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-base">{place.icon}</span>
                  <h3 className="font-playfair text-sm font-semibold text-charcoal">
                    {t(place.name, lang)}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

}