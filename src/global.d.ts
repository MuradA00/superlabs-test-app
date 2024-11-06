declare global {
  interface Accelerometer {
    x: number;
    y: number;
    z: number;
    start(): void;
    stop(): void;
    addEventListener(type: "reading", listener: () => void): void;
    removeEventListener(type: "reading", listener: () => void): void;
  }

  interface Window {
    Accelerometer: typeof Accelerometer;
  }
}

export {};