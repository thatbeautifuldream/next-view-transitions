"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { addTransitionType, startTransition } from "react";

export function TransitionLink({
  type,
  ...props
}: LinkProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, keyof LinkProps> & {
    type: "forwards" | "backwards";
  }) {
  const router = useRouter();

  const handleNavigate = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    startTransition(() => {
      addTransitionType(type);
      router.push(props.href as string);
    });
  };

  return <Link onNavigate={handleNavigate} {...props} />;
}
