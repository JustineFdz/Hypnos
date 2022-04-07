import { Link } from 'react-router-dom';
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import {faInfoCircle, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


const NAME_REGEX = /^[a-zA-Z]{3}$/;
const SURNAME_REGEX = /^[a-zA-Z]{3}$/;
const MAIL_REGEX = /^[a-zA-Z0-9.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

export default function SignUp() {
  const mailRef = useRef();
  const errRef =useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [surname, setSurname] = useState('');
  const [validSurname, setValidSurname] = useState(false);
  const [surnameFocus, setSurnameFocus] = useState(false);

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
    setValidName(NAME_REGEX.test(name));
}, [name])

useEffect(() => {
    mailRef.current.focus();
}, [])

useEffect(() => {
    setValidSurname(SURNAME_REGEX.test(surname));
}, [surname])

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
        } else if (err.response?.status === 409) {
            setErrMsg('Mail déjà utilisé');
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
                <h1>S'inscrire</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        Nom:
                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validName|| !name ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                    />
                    <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Entrer un nom valide
                    </p>
                    <label htmlFor="surname">
                        Prénom:
                        <FontAwesomeIcon icon={faCheck} className={validSurname ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validSurname|| !surname ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="text"
                        id="surname"
                        onChange={(e) => setSurname(e.target.value)}
                        value={surname}
                        required
                        aria-invalid={validSurname ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setSurnameFocus(true)}
                        onBlur={() => setSurnameFocus(false)}
                    />
                    <p id="uidnote" className={surnameFocus && surname && !validSurname ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Entrer un prénom valide
                    </p>
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
                    <p id="uidnote" className={mailFocus && mail && !validMail ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Entrer un email valide
                    </p>


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
                    <p id="pwdnote" className={pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 à 24 caractères.<br />
                        Doit inclure des lettres majuscules et minuscules, un chiffre et un caractère spécial.<br />
                        Caractères spéciaux autorisés : <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>


                    <label htmlFor="confirm_pwd">
                        Confirmer le mot de passe:
                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Doit correspondre au premier champ de saisie du mot de passe.
                    </p>

                    <button disabled={!validMail || !validPwd || !validMatch ? true : false}>Inscription</button>
                </form>
                <p>
                    Déjà inscrit?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <Link to ='/signin'>Connexion</Link>
                    </span>
                </p>
                </div>
            </section>
        )}
      </div>
    </>
)

}

