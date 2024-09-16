import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Editorpage from './pages/Editorpage';


function App() {
  return (
    <>
    <div>
      <Toaster
        position = "top-right"
        toastOptions={{
          success:{
            theme:{
              primary:'#4aed88',
            },
          },
        }}
      ></Toaster>
    </div>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/editor/:roomId" element={<Editorpage/>}></Route>
           </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
