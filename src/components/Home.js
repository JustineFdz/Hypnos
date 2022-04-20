import { useNavigate } from 'react-router-dom';

import Navbar from './Navbar';

export const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("accessToken");
  const name = sessionStorage.getItem("name");
  const surname = sessionStorage.getItem("surname");
      return (
        <>
        <Navbar />
        <div className="home-container mx-3 py-3">
          <div className="container">
              <div className="title-container"> 
                {isLoggedIn ? (
                  <div>
                    <div>{`${name} ${surname}`}</div>
                    <div>
                      <a
                        onClick={() => { 
                          sessionStorage.removeItem("accessToken");
                          sessionStorage.removeItem("name");
                          sessionStorage.removeItem("surname");
                          navigate('/login')
                        }}>
                        Se deconnecter
                      </a>
                  </div>
                  </div>
                ) : (
                    <div>
                      <a onClick={() => { navigate('/login') }}>Se Connecter</a>
                    </div>
                )}
              <p>Hypnos est un groupe hôtelier fondé en 2004. Propriétaire de 7 établissements dans les quatre coins 
                  de l’hexagone, chacun de ces hôtels s’avère être une destination idéale pour les couples en quête d’un séjour romantique à deux.
              </p>
            </div>
    
            <div className="content">
            
              <div className="hotels">
             
              </div>
            </div>
          </div>
        </div>
       </>
      )
}