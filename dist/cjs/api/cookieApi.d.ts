import { SerializeOptions } from "cookie";
declare const getCookies: () => Partial<Record<string, string>> | undefined;
declare const getCookie: (key: string) => string | undefined;
declare const setCookie: (key: string, data: any, options?: SerializeOptions) => void;
export { getCookies, getCookie, setCookie };
