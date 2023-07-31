import {
  InputHTMLAttributes,
  FC,
  forwardRef,
  ForwardedRef,
} from "react";
import "./Input.scss";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../../utils/cn";

interface InputProps
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

const Input: FC<InputProps> = forwardRef(
  ({ className, variant, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        {...props}
        className={cn(inputVariants({ variant, className }))}
        ref={ref} 
      />
    );
  }
);

export default Input;
