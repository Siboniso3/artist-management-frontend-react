import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./pages/header/Header";
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/noMatch/NoMatch';
import AddArtist from './pages/forms/AddArtist';
import AddUser from './pages/forms/usercreate/AddUser';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/artist" element={<AddArtist />} />
        <Route path="/user" element={<AddUser />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

    </>
  );
}

export default App;
