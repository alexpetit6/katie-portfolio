import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Main from '../Main/Main';
import AlbumDetail from '../../components/AlbumDetail/AlbumDetail';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            {/* <NavBar user={user} setUser={setUser} /> */}
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<Main user={user} />} />
              <Route path='/album/:albumId' element={<AlbumDetail user={user} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
