import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import {AppContext} from './context/contextApi'

function App() {
  return (
    <AppContext>
      <div className="flex flex-col h-full">
        <Header />
        <Home />
      </div>
    </AppContext>
  );
}

export default App;
