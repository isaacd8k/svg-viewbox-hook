import { useEffect, useState } from "react";

type Props = {
  ref: React.RefObject<SVGSVGElement>;
  initialViewBoxValue: string;
};

// utility fn for setting the html attribute
function setSVGViewBoxAttr(
  elem: SVGSVGElement,
  value: string,
  shouldAnimate: boolean = true
) {
  // suppress animations
  if (!shouldAnimate) {
    elem.setAttribute("viewBox", value);
    return;
  }

  // reduced motion
  animateViewBox(elem, value);

  // animations
}

function animateViewBox(
  elem: SVGSVGElement,
  value: string,
  reducedMotion: boolean = false
) {
  const keyframeAnimationOptions: KeyframeEffectOptions = {
    duration: 250,
    easing: "ease-in-out",
    fill: "forwards",
  };

  const reducedMotionAnimation = elem.animate(
    [{ opacity: 0 }],
    keyframeAnimationOptions
  );

  reducedMotionAnimation.onfinish = () => {
    elem.setAttribute("viewBox", value);
    elem.animate([{ opacity: 1 }], keyframeAnimationOptions);
  };

  reducedMotionAnimation.oncancel = () => {
    // handle animation cancellation
  };
}

// possible third arg: easing function
function useSvgViewBox({ ref, initialViewBoxValue }: Props) {
  const [viewBox, setViewBoxValueInternal] = useState(initialViewBoxValue);

  // set initial state
  useEffect(() => {
    if (ref?.current) {
      // perform initial animation
      setSVGViewBoxAttr(ref.current, initialViewBoxValue, false);
    }
  }, [ref, initialViewBoxValue]);

  // safely set viewbox
  function safelySetViewBox(newValue: string): void {
    if (ref?.current) {
      const svgElem = ref.current;
      setSVGViewBoxAttr(svgElem, newValue);
      setViewBoxValueInternal(newValue);
    }
  }
  return [viewBox, safelySetViewBox] as const;
}

export default useSvgViewBox;
