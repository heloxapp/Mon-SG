import React from 'react';
import { Home, Calendar, ShoppingBag, Landmark, AlertTriangle } from 'lucide-react';
import { useLang } from '@/hooks/useLang';

const tabs = [
  { id: 'home', icon: Home, label: { fr: 'Accueil', en: 'Home' } },
  { id: 'agenda', icon: Calendar, label: { fr: 'Agenda', en: 'Events' } },
  { id: 'commerces', icon: ShoppingBag, label: { fr: 'Commerces', en: 'Shops' } },
  { id: 'patrimoine', icon: Landmark, label: { fr: 'Patrimoine', en: 'Heritage' } },
  { id: 'urgences', icon: AlertTriangle, label: { fr: 'Urgences', en: 'Emergency' } },
];

export default function BottomNav({ activeTab, setActiveTab }) {
  const { lang } = useLang();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-linen/95 backdrop-blur-sm border-t border-forest/10 pb-safe">
      <div className="flex items-stretch">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const isUrgence = tab.id === 'urgences';
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 transition-colors ${
                isActive
                  ? isUrgence ? 'text-red-600' : 'text-forest'
                  : 'text-charcoal/40'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.2 : 1.5} />
              <span className="text-[10px] font-inter font-medium tracking-wide">
                {tab.label[lang]}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}