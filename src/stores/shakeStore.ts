import { create, StateCreator } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface ShakeStoreType {
  shakesAmount: number;
  isError: boolean;
  setError: (isError: boolean) => void;
  resetShakesAmount: () => void;
  increaseShakesAmount: () => void;
};

const store: 
  StateCreator<ShakeStoreType, 
  [["zustand/subscribeWithSelector", never]]>
= (set) => ({
  shakesAmount: 0,
  isError: false,
  resetShakesAmount: () => set({
    shakesAmount: 0,
  }),
  increaseShakesAmount: () => set(state => {
    return {
      shakesAmount: state.shakesAmount + 1,
    }
  }),
  setError: (isError) => set({ isError }),
});

export const shakeStore = create(subscribeWithSelector(store));

export const useShakesAmount = () =>
  shakeStore(state => state.shakesAmount);

export const useIsError = () => 
  shakeStore(state => state.isError);

export const useIncreaseShakesAmount = () =>
  shakeStore(state => state.increaseShakesAmount);

export const useSetIsError = () => 
  shakeStore(state => state.setError);

export const useResetShakesAmount = () => 
  shakeStore(state => state.resetShakesAmount);