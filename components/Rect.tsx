import {ReactNode, RefObject} from 'react';
import {useRef} from 'react';
import {useRect, UseRectOptions} from 'hooks/useRect';

interface RectProps {
  options: UseRectOptions;
  children: (args: {
    ref: RefObject<HTMLElement | null>;
    rect: DOMRect | null;
  }) => ReactNode;
}

const Rect = ({options, children}: RectProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const rect = useRect(ref, options);

  return children({ref, rect});
};

export default Rect;
