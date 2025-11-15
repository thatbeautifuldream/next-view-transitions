import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button({
  asChild = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const baseStyles = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";
  const enabledStyles = "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200";
  const disabledStyles = "bg-zinc-300 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-600 cursor-not-allowed";

  const finalClassName = `${baseStyles} ${disabled ? disabledStyles : enabledStyles} ${className}`;

  return (
    <Comp
      className={finalClassName}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    />
  );
}
