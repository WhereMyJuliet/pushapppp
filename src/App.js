// import { useState, useRef } from "react";
// import { deliverMessage } from "./action";
//
// function Thread({ messages, sendMessage }) {
//     const formRef = useRef();
//     async function formAction(formData) {
//         addOptimisticMessage(formData.get("message"));
//         formRef.current.reset();
//         await sendMessage(formData);
//     }
//     const [optimisticMessages, addOptimisticMessage] = useOptimistic(
//         messages,
//         (state, newMessage) => [
//             ...state,
//             {
//                 text: newMessage,
//                 sending: true,
//             },
//         ]
//     );
//
//     return (
//         <>
//             {optimisticMessages.map((message, index) => (
//                 <div key={index}>
//                     {message.text}
//                     {!!message.sending && <small> (Sending...)</small>}
//                 </div>
//             ))}
//             <form action={formAction} ref={formRef}>
//                 <input type="text" name="message" placeholder="Hello!" />
//                 <button type="submit">Send</button>
//             </form>
//         </>
//     );
// }
//
// export default function App() {
//     const [messages, setMessages] = useState([
//         { text: "Hello there!", sending: false, key: 1 },
//     ]);
//     async function sendMessage(formData) {
//         const sentMessage = await deliverMessage(formData.get("message"));
//         setMessages([...messages, { text: sentMessage }]);
//     }
//     return <Thread messages={messages} sendMessage={sendMessage} />;
// }
// export async function deliverMessage(message) {
//     await new Promise((res) => setTimeout(res, 1000));
//     return message;
// }


import React from "react";

export default function Search() {
    function publish(formDta) {
        const content = formDta.get("content")
        const button = formDta.get
        alert(`'${content}' was published with the '${button}' button'`);
    }
    function save(formData) {
        const content = formData.get('content')
        alert(`Your draft of '${content}' has been saved!`);

    }
    return(
    <form action={publish}>
        <textarea name="content" rows={4} cols={40}/>
        <br />
        <button type="submit" name="button" value="sumbit">
            Publish
        </button>
    </form>
    );
}