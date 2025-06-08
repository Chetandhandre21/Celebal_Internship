
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Sucess from './Sucess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Sucess/>} />
      </Routes>
    </Router>
  );
}

export default App;
