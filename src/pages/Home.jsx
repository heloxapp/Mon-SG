import React, { useState, useEffect } from 'react';
import { LangContext } from '@/hooks/useLang';
import { useStandalone } from '@/hooks/useStandalone';
import Header from '@/components/sg/Header';
import BottomNav from '@/components/sg/BottomNav';
import InstallScreen from '@/components/sg/InstallScreen';
import HomeTab from '@/components/sg/HomeTab';
import AgendaTab from '@/components/sg/AgendaTab';
import CommercesTab from '@/components/sg/CommercesTab';
import PatrimoineTab from '@/components/sg/PatrimoineTab';
import UrgencesTab from '@/components/sg/UrgencesTab';

const tabComponents = {
  home: HomeTab,
  agenda: AgendaTab,
  commerces: CommercesTab,
  patrimoine: PatrimoineTab,
  urgences: UrgencesTab,
};

export default function Home() {
  const [lang, setLang] = useState('fr');
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState('light');
  const isStandalone = useStandalone();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const ActiveComponent = tabComponents[activeTab];

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {!isStandalone ? (
        <InstallScreen />
      ) : (
        <div className="min-h-screen bg-linen">
          <Header theme={theme} setTheme={setTheme} />
          <main className="pt-14 pb-20">
            {activeTab === 'home'
              ? <HomeTab setActiveTab={setActiveTab} />
              : <ActiveComponent />
            }
          </main>
          <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      )}
    </LangContext.Provider>
  );
}