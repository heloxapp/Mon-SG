import React, { useState } from 'react';
import { useLang, t } from '@/hooks/useLang';
import { MapPin, Clock } from 'lucide-react';
import appData from '@/data/appData';

const filterKeys = ['all', 'fetes', 'marches', 'sports'];

export default function AgendaTab() {
  const { lang } = useLang();
  const [filter, setFilter] = useState('all');
  const { agenda } = appData;

  const filtered = filter === 'all'
    ? agenda.events
    : agenda.events.filter(e => e.category === filter);

  return (
    <div className="px-5 pt-4 pb-6">
      <h1 className="font-playfair text-2xl font-bold text-forest mb-5">
        {lang === 'fr' ? 'Agenda Local' : 'Local Events'}
      </h1>

      {/* Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {filterKeys.map(key => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`font-inter text-xs font-medium px-4 py-2 rounded-full border whitespace-nowrap transition-all ${
              filter === key
                ? 'bg-forest text-linen border-forest'
                : 'bg-transparent text-charcoal/60 border-forest/15 hover:border-forest/30'
            }`}
          >
            {t(agenda.filters[key], lang)}
          </button>
        ))}
      </div>

      {/* Events */}
      <div className="space-y-4">
        {filtered.map((event, i) => (
          <div key={i} className="border border-forest/10 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-0.5">{event.icon}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-playfair text-base font-semibold text-charcoal mb-1">
                  {t(event.title, lang)}
                </h3>
                <p className="font-inter text-xs text-charcoal/50 leading-relaxed mb-3">
                  {t(event.description, lang)}
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-forest/60" />
                    <span className="font-inter text-xs text-charcoal/60">{t(event.date, lang)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} className="text-forest/60" />
                    <span className="font-inter text-xs text-charcoal/60">{t(event.location, lang)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="font-inter text-sm text-charcoal/40 text-center mt-10">
          {lang === 'fr' ? 'Aucun événement dans cette catégorie.' : 'No events in this category.'}
        </p>
      )}
    </div>
  );
}