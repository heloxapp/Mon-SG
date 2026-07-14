const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { useLang } from '@/hooks/useLang';
import { Sun, Moon } from 'lucide-react';
import appData from '@/data/appData';

export default function Header({ theme, setTheme }) {
  const { lang, setLang } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-linen/95 backdrop-blur-sm border-b border-forest/10">
      <div className="flex items-center justify-between px-5 py-2.5 opacity-100">
        {/* Logo + Name */}
        <div className="flex items-center gap-2.5">
          <img src="https://media.db.com/images/public/6a561f4976e100fe63ce6670/e7e209f7d_ed71c612a_logo.png"

          alt="Mon SG"
          className="w-8 h-8 rounded-full object-cover border border-forest/15" />
          
          <span className="font-playfair text-xl font-bold text-forest tracking-tight">Mon SG</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-forest/15 text-charcoal/70 hover:text-forest transition-colors">
            
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 text-sm font-inter font-medium text-charcoal/70 hover:text-forest transition-colors px-2 py-1 rounded-full border border-forest/15">
            
            <span className="text-base">{lang === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
            <span className="uppercase text-xs tracking-wider">{lang}</span>
          </button>
        </div>
      </div>
    </header>);

}