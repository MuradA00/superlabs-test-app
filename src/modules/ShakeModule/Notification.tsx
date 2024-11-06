export const Notification = () => {
  return (
    <div className="fixed bottom-4 shadow-md flex flex-col gap-1 bg-white rounded-md p-3 w-[calc(100%-20px)] max-w-[400px] leading-[100%]">
      <span className="text-base font-semibold">
        Motion sensor access required
      </span>
      <span className="text-sm">
        Please enable motion sensor access for the app to work properly
      </span>
    </div>
  );
};