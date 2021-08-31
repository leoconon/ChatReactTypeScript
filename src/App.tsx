import Chat from "./components/Chat";
import ContactList from "./components/ContactList";
import TopBar from "./components/TopBar";

function App() {
    return (
        <div className="global-container">
            <TopBar/>
            <div className="content-container">
                <ContactList/>
                <Chat/>
            </div>
        </div>
    );
}

export default App;
