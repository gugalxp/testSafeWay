import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <RoutesApp/>
      <ToastContainer autoClose={1000} />
    </BrowserRouter>
  )
}

export default App;
