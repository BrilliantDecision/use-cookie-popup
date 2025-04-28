import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../api/cookieApi";

export interface UseCookieProps {
  name: string;
  showUpDelay?: number;
}

/**
 * React hook for working with cookie popup
 *
 * @param name - name of a cookie,
 * true when cookie was accepted, false when cookie was rejected
 * @param showUpDelay - cookie apperas after this delay,
 * @returns isVisible for popup and tools for managing visibity
 */
export const useCookie = ({ name, showUpDelay }: UseCookieProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const onClose = () => {
    setIsVisible(false);
  };

  const onAccept = () => {
    onClose();
    setCookie(name, true);
  };

  const onDecline = () => {
    onClose();
    setCookie(name, false);
  };

  useEffect(() => {
    const cookie = getCookie(name);

    if (!cookie) {
      setTimeout(() => setIsVisible(true), showUpDelay);
    }
  }, []);

  return {
    isVisible,
    setIsVisible,
    onAccept,
    onDecline,
    onClose,
  };
};
