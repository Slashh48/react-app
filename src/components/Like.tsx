import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status)
    return (
      <div>
        <AiFillHeart color=" #ff4d94" size="100px" onClick={toggle} />
      </div>
    );
  return (
    <div>
      <AiOutlineHeart size="100px" onClick={toggle} />
    </div>
  );
};

export default Like;
