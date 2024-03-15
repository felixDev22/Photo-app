import './global.css';
import { Routes, Route } from 'react-router-dom';

import SigninForm from '../_auth/form/SigninForm';
import Home from '../_root/Home';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
