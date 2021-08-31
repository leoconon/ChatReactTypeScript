import { useEffect, useRef, useState } from "react";
import Message from "../models/Message";
import Service from "../services/Service";

const service: Service = new Service();

function Chat() {

    const [messages, setMessages] = useState<Message[]>(service.getMessagesFromUser());
    const [text, setText] = useState("");
    const inputRef = useRef<any>();
    const chatRef = useRef<any>();

    useEffect(() => {
        inputRef.current.focus();
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages]);

    useEffect(() => {
        const teste = setInterval(() => {
            setMessages(messages.concat({
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                received: true
            }));
        }, 5000);
        return () => clearInterval(teste);
    });

    function sendMessage(msg: String) {
        if (!msg.trim().length) return;
        setMessages(messages.concat({
            text: msg,
            received: false
        }));
        setText('');
    }

    return (
        <div className="chat-container">
            <div ref={chatRef} className="chat">
                <div className="messages-container">
                    { messages.map(m => <ChatMessage message={m}/>) }
                </div>
            </div>
            <div className="chat-bottom">
                <input 
                    ref={inputRef} 
                    type="text" 
                    value={text} 
                    onChange={e => setText(e.target.value)}
                    onKeyPress={e => (e.key === 'Enter') && sendMessage(text)}/>
                <div className="send-button" onClick={() => sendMessage(text)}>Enviar</div>
            </div>
        </div>
    )
}

function ChatMessage(props: ChatMessageProps) {
    const className = props.message.received ? 'left' : 'right';
    return (
        <div className={`message ${className}`}>{props.message.text}</div>
    )
}

type ChatMessageProps = {
    message: Message
}

export default Chat;