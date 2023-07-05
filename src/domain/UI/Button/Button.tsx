import { ButtonHTMLAttributes, FC } from "react";
import "./Button.scss";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";

interface Button
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn",
      login: "login",
      login2: "login2",
      register: "register",
      register2: "register2",
    },
    size: {
      default: "default-size",
      small: "small-size",
      medium: "medium-size",
      large: "large-size",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button: FC<Button> = ({ className, size, variant, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
