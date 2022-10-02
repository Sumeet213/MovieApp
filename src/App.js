import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(userAuth);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <HomeScreen />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <ProfileScreen />
                </>
              }
            />
          </Routes>
        )}
      </Router>
    </div>
  );
}
export default App;
