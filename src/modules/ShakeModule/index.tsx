import { Button } from "../../components/Button";
import { Counter } from "./Counter";
import { RotateCcw } from "lucide-react"
import { Effect } from "./Effect";
import { useShakes } from "../../hooks/useShakes";
import { useIsError, useResetShakesAmount } from "../../stores/shakeStore";
import { Heading } from "./Heading";
import { CSSTransition } from "react-transition-group";
import { Notification } from "./Notification";


export const ShakeModule = () => {
  useShakes();
  const isError = useIsError();
  const resetShakesAmount = useResetShakesAmount();


  return (
    <div className="min-h-[100dvh] flex justify-center items-center">
      <div className="w-full max-w-96 flex px-4 py-5 rounded-lg min-h-16 flex-col gap-10 items-center">
        <div className="flex flex-col gap-3">
          <Heading />
          <div className="self-center w-fit">
            <Counter />          
          </div>          
        </div>
        <div className="flex flex-col w-full gap-5 items-center">
          <Effect />
          <Button 
            className="w-full max-w-[160px]" 
            onClick={() => resetShakesAmount()}
          >
            <RotateCcw />
            reset
          </Button>          
        </div>
      </div>
      <CSSTransition
        in={isError}
        classNames={"notification"}
        unmountOnExit
        timeout={300}
      >
        <Notification />
      </CSSTransition>
    </div>
  );
};