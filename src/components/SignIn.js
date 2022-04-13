import { Link } from 'react-router-dom';
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import {faInfoCircle, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const MAIL_REGEX = /^[a-zA-Z0-9.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

export default function SignIn() {
  const mailSignInRef = useRef();
  const errRef =useRef();

  const [mailSignIn, setMailSignIn] = useState('');
  const [validMailSignIn, setValidMailSignIn] = useState(false);
  const [mailSignInFocus, setMailSignInFocus] = useState(false);

  const [pwdSignIn, setPwdSignIn] = useState('');
  const [validPwdSignIn, setValidPwdSignIn] = useState(false);
  const [pwdSignInFocus, setPwdSignInFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [loginStatus, setLoginStatus] = useState('');

  const signin = () => {
    axios.post('http://hypnos-app.herokuapp.com/signin', {
      mail: mailSignIn, 
      password:pwdSignIn
    }).then((response) => {

      if (response.data.message){
          setLoginStatus(response.data.message)
      } else{
        setLoginStatus(response.data[0].username)
      }
    });
  };

  useEffect(() => {
    mailSignInRef.current.focus();
}, [])

useEffect(() => {
    setValidMailSignIn(MAIL_REGEX.test(mailSignIn));
}, [mailSignIn])

useEffect(() => {
    setValidPwdSignIn(PWD_REGEX.test(pwdSignIn));
}, [pwdSignIn])

useEffect(() => {
    setErrMsg('');
}, [mailSignIn, pwdSignIn])

const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = MAIL_REGEX.test(mailSignIn);
    const v2 = PWD_REGEX.test(pwdSignIn);
    if (!v1 || !v2) {
        setErrMsg("Entrée invalide");
        return;
    }
    try {
        const response = await axios.post(REGISTER_URL,
            JSON.stringify({ mailSignIn, pwdSignIn }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        console.log(response?.data);
        console.log(response?.accessToken);
        console.log(JSON.stringify(response))
        setSuccess(true);
        setMailSignIn('');
        setPwdSignIn('');
        //setMatchPwdSignIn('');
    } catch (err) {
        if (!err?.response) {
            setErrMsg('Aucune réponse du serveur');
        } else {
            setErrMsg('Échec')
        }
        errRef.current.focus();
    }
}

return (
    <>
    <div className='allForms-container'>

        {success ? (
            <section>
                <h1>Succès!</h1>
                <p>
                    <a href="#">Connexion</a>
                </p>
            </section>
        ) : (
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <div className='allForms'>
                <h1>Connexion</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="mail">
                        Email:
                        <FontAwesomeIcon icon={faCheck} className={validMailSignIn ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validMailSignIn || !mailSignIn ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="email"
                        id="mail"
                        ref={mailSignInRef}
                        autoComplete="off"
                        onChange={(e) => setMailSignIn(e.target.value)}
                        value={mailSignIn}
                        required
                        aria-invalid={validMailSignIn ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setMailSignInFocus(true)}
                        onBlur={() => setMailSignInFocus(false)}
                    />
                    {/* <p id="uidnote" className={mailSignInFocus && mailSignIn && !validMailSignIn ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Entrer un emailSignIn valide
                    </p> */}


                    <label htmlFor="password">
                        Mot de passe:
                        <FontAwesomeIcon icon={faCheck} className={validPwdSignIn ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPwdSignIn || !pwdSignIn ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwdSignIn(e.target.value)}
                        value={pwdSignIn}
                        required
                        aria-invalid={validPwdSignIn ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdSignInFocus(true)}
                        onBlur={() => setPwdSignInFocus(false)}
                    />
                    {/* <p id="pwdSignInnote" className={pwdSignInFocus && !validPwdSignIn ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 à 24 caractères.<br />
                        Doit inclure des lettres majuscules et minuscules, un chiffre et un caractère spécial.<br />
                        Caractères spéciaux autorisés : <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p> */}

                    <button disabled={!validMailSignIn || !validPwdSignIn ? true : false} onClick={signin}>Connexion</button>
                    <h1>{loginStatus}</h1>
                </form>
                <p>
                    Pas encore inscrit ?<br />
                    <span className="line">
                        <Link to ='/signup'>Inscription</Link>
                    </span>
                </p>
                </div>
            </section>
        )}
      </div>
    </>
)

}

