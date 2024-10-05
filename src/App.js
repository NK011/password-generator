import logo from "./logo.svg";
import "./App.css";
import CardHeader from "./components/CardHeader";
import PasswordForm from "./components/PasswordForm";
import { useState } from "react";

function App() {
    const [generatedPassword, setGeneratedPassword] = useState();
    return (
        <div className="App">
            <div className="App__card">
                <CardHeader generatedPassword={generatedPassword} />
                <PasswordForm
                    generatedPassword={generatedPassword}
                    setGeneratedPassword={setGeneratedPassword}
                />
            </div>
        </div>
    );
}

export default App;
