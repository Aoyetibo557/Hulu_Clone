import React from 'react';
import './Login.css';
import Logo from '../images/huluLogo.png';
import { auth, provider} from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { useHistory } from 'react-router';


function Login() {
    const [ {user}, dispatch] = useStateValue();
    const history = useHistory();

    const signIn = ( ev ) => {
        ev.preventDefault();
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            history.push('/');
        })
        .catch((error) => {
            alert(error.message)
        });
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} alt="Login Image" />
                <button onClick={signIn}>Sign In With Google</button>
            </div>
        </div>
    )
}

export default Login
