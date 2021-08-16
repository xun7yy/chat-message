import MessageList from "./components/messageList";
import TextBox from "./components/textBox";
import "./style/messageList.css";
const App = () => {
    return (
        <div className="container">
            <h1 className="header">
                <TextBox id="title" />
            </h1>
            <MessageList />
        </div>
    );
};

export default App;
