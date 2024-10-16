// src/types/telegram-web-app.d.ts
interface TelegramWebApp {
  initData: string;
  initDataUnsafe: any;
  ready: () => void;
  close: () => void;
  themeParams: any;
  MainButton: any;
  }
  
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
  