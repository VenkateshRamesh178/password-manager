import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import PasswordTable from "./components/PasswordTable";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [encryptionKey, setEncryptionKey] = useState("");

    return isLoggedIn ? (
        <PasswordTable encryptionKey={encryptionKey} />
    ) : (
        <LoginPage setIsLoggedIn={setIsLoggedIn} setEncryptionKey={setEncryptionKey} />
    );
};

export default App;
