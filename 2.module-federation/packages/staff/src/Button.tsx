import React, { memo } from "react";

const Button = memo(() => {
  return <button style={{ background: "pink", color: "white" }}>我是按钮</button>;
});

export default Button;
