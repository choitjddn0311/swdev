import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value ?? "ko") as Locale;
  const validLocale = locales.includes(locale) ? locale : "ko";

  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default,
  };
});
