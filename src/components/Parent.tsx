import { forwardRef } from "react";
import Child from "./Child"

const Parent = forwardRef(
  ({ text = '' }: TTextProps, ref: TInputRef) => {
    return (
      <>
        <input ref={ref} />
        <Child text={text} />
      </>
    )
  }
);

export default Parent;