import css from "./App.module.css";
import Sidebar from "./components/Sidebar.js";
import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarSimpleForm";
import Content from "./components/Content";

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Content/>
    </div>
  );
}

export default App;
