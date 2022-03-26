import {useRect, UseRectOptions} from 'hooks/useRect';

import {ReactNode, RefObject} from 'react';
import {useRef} from 'react';

interface RectProps {
  options: UseRectOptions;
  children: (args: {
    ref: RefObject<HTMLElement>;
    rect: DOMRect | null;
  }) => ReactNode;
}

const Rect = ({options, children}: RectProps) => {
  const ref = useRef<HTMLElement>(null);
  const rect = useRect(ref, options);

  return children({ref, rect});
};

export default Rect;
