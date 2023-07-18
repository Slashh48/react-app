import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [expand, setExpand] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;
  const text = expand ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpand(!expand)}>
        {expand ? "Show less" : "Show more"}
      </button>
    </p>
  );
};

export default ExpandableText;
