// src/types/telegram-web-app.d.ts
interface TelegramWebApp {
    initData: string;
    initDataUnsafe: {
      query_id?: string;
      user?: {
        id: number;
        first_name?: string;
        last_name?: string;
        username?: string;
        language_code?: string;
        is_bot?: boolean;
      };
      chat?: object;
      auth_date?: number;
      hash?: string;
    };
    version: string;
    platform: string;
    colorScheme: 'light' | 'dark';
    themeParams: {
      bg_color?: string;
      text_color?: string;
      hint_color?: string;
      link_color?: string;
      button_color?: string;
      button_text_color?: string;
    };
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    headerColor: string;
    backgroundColor: string;
    expand(): void;
    close(): void;
    MainButton: {
      text: string;
      color: string;
      textColor: string;
      isVisible: boolean;
      isProgressVisible: boolean;
      setText(text: string): void;
      show(): void;
      hide(): void;
      onClick(callback: () => void): void;
    };
    onEvent(eventType: string, callback: () => void): void;
    offEvent(eventType: string, callback: () => void): void;
    sendData(data: string): void;
  }
  
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
  