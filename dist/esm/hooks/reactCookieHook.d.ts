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
export declare const useCookie: ({ name, showUpDelay }: UseCookieProps) => {
    isVisible: boolean;
    setIsVisible: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    onAccept: () => void;
    onDecline: () => void;
    onClose: () => void;
};
