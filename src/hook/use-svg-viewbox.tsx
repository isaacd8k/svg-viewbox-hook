import { useEffect, useState } from "react";

type Props = {
  ref: React.RefObject<SVGSVGElement>;
  initialViewBoxValue: string;
};

// possible third arg: easing function
function useSvgViewBox({ ref, initialViewBoxValue }: Props) {
  const [viewBox, setViewBoxValueInternal] = useState(initialViewBoxValue);

  // set initial state
  useEffect(() => {
    if (ref?.current) {
      // perform initial animation
      setSVGViewBoxAttr(ref.current, initialViewBoxValue);
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

  // utility fn for setting the html attribute
  function setSVGViewBoxAttr(elem: SVGSVGElement, value: string) {
    elem.setAttribute("viewBox", value);
  }

  return [viewBox, safelySetViewBox] as const;
}

export default useSvgViewBox;
