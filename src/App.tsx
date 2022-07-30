import React, { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { DelButton } from "./components/DelButton";

export type TypeOfMessages = {
  messageText: string;
};

export const App = () => {
  let [message, Setmessage] = useState([
    { messageText: "message1" },
    { messageText: "message2" },
    { messageText: "message3" }
  ]);

  const removeMessage = (elId: number) => {
    message = message.filter((el, index) => index !== elId);
    Setmessage(message);
  };


let messageList;

switch(message.length){
  case 0:
    messageList = <pre>Список сообщений совершенно пуст</pre>
    break
  default:
      messageList = message.map((el, index) => {
            return (
              <div key = {index}>
                <DelButton removeMessage={removeMessage} messageIndex={index} />
                <span key={index}>{el.messageText}</span>
              </div>
            );
          })

}



     // const messageList = message.length?
      // message.map((el, index) => {
      //     return (
      //       <div>
      //         <DelButton removeMessage={removeMessage} messageIndex={index} />
      //         <span key={index}>{el.messageText}</span>
      //       </div>
      //     );
      //   }): <span>Список сообщений пуст</span> 
        


  // const messageList = message.map((el, index) => {
  //   return (
  //     <div>
  //       <DelButton removeMessage={removeMessage} messageIndex={index} />
  //       <span key={index}>{el.messageText}</span>
  //     </div>
  //   );
  // }); 



  return (
    <div className="App">

      <Input message={message} Setmessage={Setmessage} />

      {messageList}

    </div>
  );
};
