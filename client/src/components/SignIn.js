import { Link } from 'react-router-dom';
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import {faInfoCircle, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


const USER_REGEX = /^[a-zA-Z]/;
const MAIL_REGEX = /^[a-zA-Z0-9.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

export default function SignIn() {
  const mailRef = useRef();
  const errRef =useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [mail, setMail] = useState('');
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    mailRef.current.focus();
}, [])

useEffect(() => {
    setValidName(USER_REGEX.test(user));
}, [user])

useEffect(() => {
    setValidMail(MAIL_REGEX.test(mail));
}, [mail])

useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
}, [pwd, matchPwd])

useEffect(() => {
    setErrMsg('');
}, [mail, pwd, matchPwd])

const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = MAIL_REGEX.test(mail);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
        setErrMsg("Entrée invalide");
        return;
    }
    try {
        const response = await axios.post(REGISTER_URL,
            JSON.stringify({ mail, pwd }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        console.log(response?.data);
        console.log(response?.accessToken);
        console.log(JSON.stringify(response))
        setSuccess(true);
        setMail('');
        setPwd('');
        setMatchPwd('');
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
                        <FontAwesomeIcon icon={faCheck} className={validMail ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validMail || !mail ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="email"
                        id="mail"
                        ref={mailRef}
                        autoComplete="off"
                        onChange={(e) => setMail(e.target.value)}
                        value={mail}
                        required
                        aria-invalid={validMail ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setMailFocus(true)}
                        onBlur={() => setMailFocus(false)}
                    />
                    {/* <p id="uidnote" className={mailFocus && mail && !validMail ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Entrer un email valide
                    </p> */}


                    <label htmlFor="password">
                        Mot de passe:
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    {/* <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 à 24 caractères.<br />
                        Doit inclure des lettres majuscules et minuscules, un chiffre et un caractère spécial.<br />
                        Caractères spéciaux autorisés : <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p> */}

                    <button disabled={!validMail || !validPwd ? true : false}>Connexion</button>
                </form>
                <p>
                    Pas encore inscrit ?<br />
                    <span className="line">
                        {/*put router link here*/}
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

