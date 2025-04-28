import { serialize, SerializeOptions } from "cookie";
import { decode, stringify } from "../utils/common";

const getCookies = (): Partial<Record<string, string>> | undefined => {
  const cookies: Partial<Record<string, string>> = {};
  const documentCookies = document.cookie ? document.cookie.split("; ") : [];

  for (let i = 0, len = documentCookies.length; i < len; i++) {
    const cookieParts = documentCookies[i].split("=");
    const cookie = cookieParts.slice(1).join("=");
    const name = cookieParts[0];
    cookies[name] = cookie;
  }

  return cookies;
};

const getCookie = (key: string): string | undefined => {
  const _cookies = getCookies();
  const value = _cookies?.[key];
  if (value === undefined) return undefined;
  return decode(value);
};

const setCookie = (
  key: string,
  data: any,
  options?: SerializeOptions
): void => {
  const _cookieOptions = options || {};
  const cookieStr = serialize(key, stringify(data), {
    path: "/",
    ..._cookieOptions,
  });
  document.cookie = cookieStr;
};

export { getCookies, getCookie, setCookie };
