import { motion, useAnimation } from "framer-motion";
import { Zap } from "lucide-react";
import { useShakesAmount } from "../../stores/shakeStore";
import { useEffect, useRef } from "react";

export const Effect = () => {
  const zapControls = useAnimation()
  const shakesAmount = useShakesAmount();
  const prevShakesAmountRef = useRef(shakesAmount);
  
  useEffect(() => {
    if (shakesAmount === prevShakesAmountRef.current) return;

    prevShakesAmountRef.current = shakesAmount;

    if (shakesAmount === 0) return;


    zapControls.start({
      rotate: [0, -10, 10, -10, 10, 0],
      scale: [1, 1.15, 1],
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  }, [shakesAmount]);

  return (
    <motion.div
      animate={zapControls}
      className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
    >
      <Zap className="w-8 h-8 text-white" />
    </motion.div>
  )
}