import { BrowserRouter, Route, Routes } from "react-router-dom";
import Editorpage from "./pages/Editorpage";
import Home from "./pages/Home";
import "./App.css";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <div>
        {" "}
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/editor/:roomId" element={<Editorpage />} exact></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
