import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { LoggedInContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        error: '',
        success: false
    });

    let provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { displayName, email } = res.user
                const newUserInfo = { ...user };
                newUserInfo.error = '';
                newUserInfo.success = true;
                newUserInfo.isSignedIn = true;
                newUserInfo.name = displayName;
                newUserInfo.email = email;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="login-form text-center">
                            <h4>Don't have an account? Sign in with google</h4>
                            <button className="btn btn-outline-success mt-4" onClick={handleGoogleSignIn}>
                                <FontAwesomeIcon icon={faGoogle} /> Continue with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;