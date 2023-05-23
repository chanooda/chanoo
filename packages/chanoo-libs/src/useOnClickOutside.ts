import { RefObject, useEffect } from 'react';

type Handler = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
) {
  useEffect(() => {
    const wrapHandler: Handler = (event) => {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    window.addEventListener(mouseEvent, wrapHandler);

    return () => window.removeEventListener(mouseEvent, wrapHandler);
  }, [ref]);
}

export default useOnClickOutside;
