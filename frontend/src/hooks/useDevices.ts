import { useEffect, useMemo, useState } from 'react';

interface MediaQueryValues {
  isMobile: boolean;
  isPhone: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

interface MediaQueryQueries {
  mobile: string;
  phone: string;
  tablet: string;
  desktop: string;
}

const mediaQueryQueries: MediaQueryQueries = {
  phone: '(max-width: 414px)',
  tablet: '(max-width: 768px)',
  mobile: '(max-width: 767px)',
  desktop: '(max-width: 1280px)',
};

export function useDevices(): MediaQueryValues {
  const [mediaQueryValues, setMediaQueryValues] = useState<MediaQueryValues>({
    isPhone: false,
    isTablet: false,
    isMobile: false,
    isDesktop: false,
  });

  useEffect(() => {
    const updateMediaQueryValues = () => {
      const newMediaQueryValues: MediaQueryValues = {
        isPhone: window.matchMedia(mediaQueryQueries.phone).matches,
        isTablet: window.matchMedia(mediaQueryQueries.tablet).matches,
        isMobile: window.matchMedia(mediaQueryQueries.mobile).matches,
        isDesktop: window.matchMedia(mediaQueryQueries.desktop).matches,
      };
      setMediaQueryValues(newMediaQueryValues);
    };

    updateMediaQueryValues();

    const mediaQueryListeners = Object.values(mediaQueryQueries).map((query) => {
      const mediaQuery = window.matchMedia(query);
      const listener = () => {
        updateMediaQueryValues();
      };
      mediaQuery.addEventListener('change', listener);
      return { mediaQuery, listener };
    });

    return () => {
      mediaQueryListeners.forEach(({ mediaQuery, listener }) => {
        mediaQuery.removeEventListener('change', listener);
      });
    };
  }, []);

  return useMemo(
    () => ({
      isPhone: mediaQueryValues.isPhone,
      isTablet: mediaQueryValues.isTablet,
      isMobile: mediaQueryValues.isMobile,
      isDesktop: mediaQueryValues.isDesktop,
    }),
    [mediaQueryValues]
  );
}