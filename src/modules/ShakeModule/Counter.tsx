import { useShakesAmount } from "../../stores/shakeStore";

export const Counter = () => {
  const amount = useShakesAmount();

  return (
    <div
      className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center"
    >
      <span className="text-5xl font-bold">
        {amount}
      </span>
    </div>
  );
};