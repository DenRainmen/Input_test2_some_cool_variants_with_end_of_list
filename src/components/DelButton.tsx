import React from "react";

type DelButtonType = {
  removeMessage: (elId: number) => void;
  messageIndex: number;
};

export const DelButton: React.FC<DelButtonType> = (props) => {
  return (
    <>
      <button onClick={() => props.removeMessage(props.messageIndex)}>X</button>
    </>
  );
};
