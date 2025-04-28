import { useState } from "react";
import { getCookie, setCookie } from "../api/cookieApi";

export interface UseCookieProps {
  name: string;
  showUpDelay?: number;
}

export const useCookie = ({ name, showUpDelay }: UseCookieProps) => {
  const [isVisible, setIsVisible] = useState(() => {
    const cookie = getCookie(name);

    if (!cookie) {
      setCookie(name, true);
      return true;
    }

    if (cookie === "true") {
      if (showUpDelay) {
        setTimeout(() => setIsVisible(true), showUpDelay);
        return false;
      } else {
        return true;
      }
    }

    return false;
  });

  const onAccept = () => {
    setIsVisible(false);
    setCookie(name, false);
  };

  const onDecline = () => {
    setIsVisible(false);
  };

  return { isVisible, setIsVisible, onAccept, onDecline };
};
