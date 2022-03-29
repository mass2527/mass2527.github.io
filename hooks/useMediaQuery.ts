import {useState, useEffect} from 'react';

export const useMediaQuery = (mediaQueryString: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    setMatches(mediaQueryList.matches);

    const handleMediaQueryListChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    mediaQueryList.addEventListener('change', handleMediaQueryListChange);
    return () => {
      mediaQueryList.removeEventListener('change', handleMediaQueryListChange);
    };
  }, []);

  return matches;
};
