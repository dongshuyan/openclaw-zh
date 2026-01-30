/**
 * OpenClaw i18n - 国际化支持
 * 支持中英文切换，默认跟随浏览器语言
 */

import { en } from "./locales/en.js";
import { zhCN } from "./locales/zh-CN.js";

export type Locale = "en" | "zh-CN";
export type TranslationKey = keyof typeof en;

const STORAGE_KEY = "openclaw-locale";

// 翻译字典
const translations: Record<Locale, Record<string, string>> = {
  en,
  "zh-CN": zhCN,
};

// 当前语言
let currentLocale: Locale = detectLocale();

// 语言变更监听器
type LocaleChangeListener = (locale: Locale) => void;
const listeners: Set<LocaleChangeListener> = new Set();

/**
 * 检测用户语言偏好
 */
function detectLocale(): Locale {
  // 优先使用存储的偏好
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "zh-CN") {
    return stored;
  }
  // 否则跟随浏览器语言
  const browserLang = navigator.language;
  if (browserLang.startsWith("zh")) {
    return "zh-CN";
  }
  return "en";
}

/**
 * 获取当前语言
 */
export function getLocale(): Locale {
  return currentLocale;
}

/**
 * 设置语言
 */
export function setLocale(locale: Locale): void {
  if (locale !== currentLocale) {
    currentLocale = locale;
    localStorage.setItem(STORAGE_KEY, locale);
    // 通知所有监听器
    listeners.forEach((listener) => listener(locale));
  }
}

/**
 * 监听语言变更
 */
export function onLocaleChange(listener: LocaleChangeListener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * 翻译函数
 * @param key 翻译键
 * @param params 可选的插值参数
 */
export function t(key: TranslationKey, params?: Record<string, string | number>): string {
  const dict = translations[currentLocale] || translations.en;
  let text = dict[key] || translations.en[key] || key;

  // 支持简单的参数插值 {name}
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
    }
  }

  return text;
}

/**
 * 获取所有可用语言
 */
export function getAvailableLocales(): Array<{ code: Locale; name: string }> {
  return [
    { code: "en", name: "English" },
    { code: "zh-CN", name: "简体中文" },
  ];
}
