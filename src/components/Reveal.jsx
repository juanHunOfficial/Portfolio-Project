import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Reveal({children, width = "fit-content"}){
  const divRef = useRef(null)
  const isInView = useInView(divRef, {once: true});
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView])

  return (
    <div ref={divRef} className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.25}}
      >{children}</motion.div>
    </div>
  )
}