
import "./App.css"
import Home from "./cotainer/home";
import SignUpLogin from "./component/signUplogin"
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signUpLogin" element={<SignUpLogin/> } />
    </Routes>  
  );
}

export default App;
