const DOMRectKeys: (keyof DOMRect)[] = [
  'bottom',
  'height',
  'left',
  'right',
  'top',
  'width',
  'x',
  'y',
];

const isRectChanged = (
  prev: DOMRect = {} as DOMRect,
  current: DOMRect = {} as DOMRect
) => DOMRectKeys.some((key) => prev[key] !== current[key]);

const observedNodes = new Map<Element, RectProps>();
let requestAnimationFrameId: number;

const run = () => {
  const changedStates: RectProps[] = [];
  observedNodes.forEach((state, node) => {
    const newRect = node.getBoundingClientRect();
    if (isRectChanged(state.rect, newRect)) {
      state.rect = newRect;
      changedStates.push(state);
    }
  });

  changedStates.forEach((state) => {
    state.callbacks.forEach((callback) => callback(state.rect));
  });

  requestAnimationFrameId = window.requestAnimationFrame(run);
};

export default function observeRect(
  node: Element,
  callback: (rect: DOMRect) => void
) {
  return {
    observe() {
      let wasEmpty = observedNodes.size === 0;
      if (observedNodes.has(node)) {
        observedNodes.get(node)?.callbacks.push(callback);
      } else {
        observedNodes.set(node, {
          rect: undefined,
          callbacks: [callback],
        });
      }

      if (wasEmpty) run();
    },
    unobserve() {
      const state = observedNodes.get(node);
      if (state) {
        // Remove the callback
        const index = state.callbacks.indexOf(callback);
        if (index >= 0) state.callbacks.splice(index, 1);

        // Remove the node reference
        if (!state.callbacks.length) observedNodes.delete(node);

        // Stop the loop
        if (!observedNodes.size) cancelAnimationFrame(requestAnimationFrameId);
      }
    },
  };
}

export type RectProps = {
  rect: DOMRect | undefined;
  callbacks: Function[];
};
