import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { setUseProxies } from 'immer';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import './SignInScreen.css';

function SignInScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      alert(error.message);
    }
  };
  const signout = () => {
    auth.signOut();
  };
  const register = async (e) => {
    e.preventDefault();

    const user = await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        db.collection('users')
          .doc(res.user.email)
          .set({
            plan: 'Basic',
          })
          .then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="signinScreen">
      <form>
        <h1>Sign In</h1>
        <button onClick={signout}>sign out</button>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={signIn} type="submit">
          Sign In
        </button>
        <h4>
          <span className="signinScreen__gray">New to Netflix?</span>
          <span className="signinScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
