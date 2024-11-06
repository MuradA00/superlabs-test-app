import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; 
}

export const Button = ({
  children,
  className,
  ...props
}: ButtonProps) => {

  return (
    <button 
      className={
        clsx(
          "min-h-14 rounded-full px-4 shadow-md bg-white flex justify-center items-center text-center font-semibold gap-3 capitalize transition-[colors,transform] duration-300 hover:bg-white/80 active:scale-[0.975]",
          className
        )
      } 
      {...props}
    >
      {children}
    </button>
  )
};
