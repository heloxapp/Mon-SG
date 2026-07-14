import { useState, useEffect } from 'react';

export function useStandalone() {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const mqStandalone = window.matchMedia('(display-mode: standalone)');
    const isIosStandalone = window.navigator.standalone === true;
    // Also check if running in an iframe (preview/dev) or via ?standalone=1
    const isInIframe = window.self !== window.top;
    const urlOverride = new URLSearchParams(window.location.search).get('standalone') === '1';
    setIsStandalone(mqStandalone.matches || isIosStandalone || isInIframe || urlOverride);

    const handler = (e) => setIsStandalone(e.matches || isIosStandalone || isInIframe || urlOverride);
    mqStandalone.addEventListener('change', handler);
    return () => mqStandalone.removeEventListener('change', handler);
  }, []);

  return isStandalone;
}