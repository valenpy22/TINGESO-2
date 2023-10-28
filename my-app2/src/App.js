import logo from './logo.svg';
import './App.module.css';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ExamComponent from './components/ExamComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/file-upload" element={<ExamComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
