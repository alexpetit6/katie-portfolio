import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Main from '../Main/Main';
import EditAlbum from '../EditAlbum/EditAlbum';
import EditPerformance from '../EditPerformance/EditPerformance';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<Main user={user} />} />
              <Route path='/album/:albumId' element={<EditAlbum user={user} />} />
              <Route path='/edit-performance' element={<EditPerformance user={user} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
