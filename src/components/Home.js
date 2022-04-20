import Navbar from './Navbar';

export const Home = () => {
    
      return (
        <>
        <Navbar />
        <div className="home-container mx-3 py-3">
          <div className="container">
            <img  className='gold' src='././assets/gold.png'></img>
            <div className="title-container">   
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