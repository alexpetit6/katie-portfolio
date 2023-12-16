import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser, logOut } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Main from '../Main/Main';
import EditAlbum from '../EditAlbum/EditAlbum';
import EditPerformance from '../EditPerformance/EditPerformance';

export default function App() {
  const [user, setUser] = useState(null);



  return (
    <main className="App">
          <>
            <Routes>
              {/* Route components in here */}
              <Route path ='/admin' element={<AuthPage setUser={setUser}  />} />
              <Route path="/" element={<Main user={user} />} />
              <Route path='/album/:albumId' element={<EditAlbum user={user} />} />
              <Route path='/edit-performance' element={<EditPerformance user={user} />} />
            </Routes>
          </>
            
    </main>
  );
}
