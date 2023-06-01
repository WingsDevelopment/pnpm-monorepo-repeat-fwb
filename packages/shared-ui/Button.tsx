import React from "react";

export function Button(props: any) {
  const [count, setCount] = React.useState(0);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
        props.onClick();
      }}
    >
      {props.children} test {count}
    </button>
  );
}
export default Button;
