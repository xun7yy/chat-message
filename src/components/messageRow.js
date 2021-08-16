import { formateDate } from "../utils/messageList";
import TextBox from "./textBox";
import { deleteMessage } from "../apis/messageList";
const MessageRow = ({ message, index, setFilter, filter }) => {
    return (
        <div className="message-row">
            <div className="row-top">
                <div className="row-top-front">
                    <div className="uuid">{message.senderUuid}</div>
                    <div className="date">{formateDate(message.sentAt)}</div>
                </div>
                <div
                    className="row-top-delete"
                    onClick={() => {
                        deleteMessage(index);
                        setFilter({
                            ...filter,
                            toggle: !filter.toggle,
                        });
                    }}
                >
                    <TextBox id="delete" />
                </div>
            </div>
            <div className="row-content">{message.content}</div>
        </div>
    );
};

export default MessageRow;
