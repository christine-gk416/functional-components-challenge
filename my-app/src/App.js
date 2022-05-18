import css from './App.module.css';
import Sidebar from './components/Sidebar.js'
import NavBarSimple from './components/NavBarSimple'

function App() {
    return ( <
        div className = {
            css.App
        } > {
            <
            Sidebar / >

        } <
        NavBarSimple / >

        <
        /div>
    );
}

export default App;