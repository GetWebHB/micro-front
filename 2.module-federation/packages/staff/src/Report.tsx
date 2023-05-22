import React, { memo } from "react";

interface Props {
  title?: string;
  children?: React.ReactElement;
}
const Report = memo(({ title = "文字" }: Props) => {
  return <div style={{ background: "red", color: "skyblue", height: "40px" }}>{title}</div>;
});

export default Report;
