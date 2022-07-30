import React, { ChangeEvent, useState } from "react";
import { TypeOfMessages } from "../App";

type InputPropsType = {
  message: TypeOfMessages[];
  Setmessage: (message: TypeOfMessages[]) => void;
};

export const Input: React.FC<InputPropsType> = (props) => {
  let [inputText, SetinputText] = useState("");

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    SetinputText(event.currentTarget.value);
  };

  const onClickButtonHandler = (text: string) => {
    switch (inputText) {
      case "":
        SetinputText("");
        break;
      default:
        props.Setmessage([...props.message, { messageText: text }]);
        SetinputText("");
        break;
    }
  };

  return (
    <div>
      <input onChange={onChangeInputHandler} value={inputText} />

      <button onClick={() => onClickButtonHandler(inputText)}>+</button>
    </div>
  );
};
