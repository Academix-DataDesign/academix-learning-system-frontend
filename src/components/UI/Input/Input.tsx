import { InputHTMLAttributes, FC } from "react";
import "./Input.scss";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";
interface Input
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const inputVariants = cva("input", {
  variants: {
    variant: {
      defaul: "default",
    },
  },
  defaultVariants: {
    variant: "defaul",
  },
});

const Input: FC<Input> = ({ className, variant, ...props }) => {
  return (
    <input {...props} className={cn(inputVariants({ variant, className }))} />
  );
};

export default Input;
