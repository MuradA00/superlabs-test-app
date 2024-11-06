import { useCallback, useEffect, useRef } from "react";
import { 
  useSetIsError, 
  useIncreaseShakesAmount 
} from "../stores/shakeStore";

export const useShakes = () => {
  const frequencyValue = 60;
  const accelerometer: Accelerometer = 
  new window.Accelerometer({ frequency: frequencyValue });
  const threshold = 20;
  const cooldown = 500;
  const lastShakeTimeRef = useRef(0);

  const setIsError = useSetIsError();
  const increaseShakes = useIncreaseShakesAmount(); 

  const handleAccelerometer = useCallback(() => {
    if (typeof window === "undefined" && !("Accelerometer" in window)) {
      setIsError(true);
      return true;
    };

    return false;
  }, [setIsError]);

  const handleShakes = useCallback(() => {
    const currentTime = Date.now();
    const {x, y, z} = accelerometer;

    const calculatedMagnitude = 
      Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));

    if (calculatedMagnitude > threshold 
        && currentTime - lastShakeTimeRef.current > cooldown) {
          increaseShakes();
          lastShakeTimeRef.current = currentTime;
        }
  }, [increaseShakes]);

  useEffect(() => {
    if (handleAccelerometer()) return;

    accelerometer.addEventListener("reading", handleShakes);

    accelerometer.start();

    return () => {
      accelerometer.stop();
      accelerometer.removeEventListener("reading", handleShakes);
    }

  }, [handleAccelerometer, handleShakes]);
};