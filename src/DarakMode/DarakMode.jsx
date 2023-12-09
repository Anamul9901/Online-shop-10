import { useDarkMode } from "../Provider/AuthProvider";
import './DarkMode.css'

const DarakMode = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className={`component ${isDarkMode ? 'dark' : 'light'}`}>
            <h1>My Component</h1>
            <button onClick={toggleDarkMode}>Toggle Mode</button>
            {/* Your component content */}
        </div>
    );
};

export default DarakMode;