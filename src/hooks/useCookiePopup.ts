import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../api/cookieApi";
import { SerializeOptions } from "cookie";

export interface UseCookieProps {
  name: string;
  showUpDelay?: number;
  optsCookieDecline?: SerializeOptions;
  optsCookieAccept?: SerializeOptions;
  showAlways?: boolean;
  showIfAccepted?: boolean;
  showIfDeclined?: boolean;
}

/**
 * React hook for working with cookie popup
 * 
 * Cookie value is 'true' if cookie was accepted, and 'false' if cookie was rejected
 *
 * @param name - name of a cookie,
 * @param showUpDelay - cookie apperas after this delay
 * @param optsCookieAccept - opts for setting cookie when accept
 * @param optsCookieDecline - opts for setting cookie when decline
 * @param showAlways - isVisible will be true before accepting/declining
 * @param showIfAccepted - isVisible will be true before accepting
 * @param showIfDeclined - isVisible will be true before declining
 * @returns isVisible for popup and tools for managing visibity
 */
export const useCookiePopup = ({
  name,
  showUpDelay,
  optsCookieAccept,
  optsCookieDecline,
  showAlways,
  showIfAccepted,
  showIfDeclined,
}: UseCookieProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const onClose = () => {
    setIsVisible(false);
  };

  const onAccept = () => {
    onClose();
    setCookie(name, true, optsCookieAccept);
  };

  const onDecline = () => {
    onClose();
    setCookie(name, false, optsCookieDecline);
  };

  useEffect(() => {
    const cookie = getCookie(name);
    const isBoolCookie = cookie === "true";
    const isShowCookie =
      !cookie ||
      showAlways ||
      (showIfAccepted && isBoolCookie) ||
      (showIfDeclined && !isBoolCookie);

    if (isShowCookie) {
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
