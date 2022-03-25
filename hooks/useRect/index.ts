import {RefObject, useEffect, useRef, useState} from 'react';
import observeRect from './observeRect';

export const useRect = <T extends Element = HTMLElement>(
  nodeRef: RefObject<T | null>,
  options: UseRectOptions
) => {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [element, setElement] = useState(nodeRef.current);
  const onChangeRef = useRef(options.onChange);
  const isInitialRectSet = useRef(false);
  const isInitialRefSet = useRef(false);

  useEffect(() => {
    onChangeRef.current = options.onChange;
    if (element !== nodeRef.current) {
      setElement(nodeRef.current);
    }
  });

  useEffect(() => {
    if (element && !isInitialRectSet.current) {
      isInitialRectSet.current = true;
      setRect(element.getBoundingClientRect());
    }
  }, [element]);

  useEffect(() => {
    if (!options.observe) return;

    let ele = element;

    // State initializes before refs are placed, meaning the element state will
    // be undefined on the first render. We still want the rect on the first
    // render, so initially we'll use the nodeRef that was passed instead of
    // state for our measurements.
    if (!isInitialRefSet.current) {
      isInitialRefSet.current = true;
      ele = nodeRef.current;
    }

    if (!ele) {
      return;
    }

    const observer = observeRect(ele, (rect) => {
      onChangeRef.current?.(rect);
      setRect(rect);
    });
    observer.observe();

    return () => {
      observer.unobserve();
    };
  }, [options.observe, element, nodeRef]);

  return rect;
};

type UseRectOptions = {
  observe?: boolean;
  onChange?: (rect: DOMRect) => void;
};
