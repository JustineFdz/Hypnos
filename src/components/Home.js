import Navbar from './Navbar';

export const Home = () => {
    const data = [
        {
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/81/d9/78/la-bergerie.jpg?w=2000&h=-1&s=1",
          title: "La Bergerie",
          description: "Hôtel de luxe en front de Neige, Courchevel",
        },
        {
          image: "https://www.frenchydubai.com/wp-content/uploads/2021/04/hotels-luxe-dubai.jpg",
          title: "L'Altapura",
          description: "Hôtel de luxe en front de Neige, Saint-Tropez",
        },
        {
          image: "https://www.alti-mag.com/wp-content/uploads/2021/12/238382115.jpg",
          title: "Le Chabichou",
          description: "Hôtel de luxe en front de Neige, Courchevel",
        },
        {
          image: "https://www.frenchydubai.com/wp-content/uploads/2021/04/hotels-luxe-dubai.jpg",
          title: "L'Altapura",
          description: "Hôtel de luxe en front de Neige, Courchevel",
        },
      ];
      return (
        <>
        <Navbar />
        <div className="hotel-container mx-3 py-3">
          <div className="container">
            <div className="title-container">
              <p>Hypnos est un groupe hôtelier fondé en 2004. Propriétaire de 7 établissements dans les quatre coins 
                  de l’hexagone, chacun de ces hôtels s’avère être une destination idéale pour les couples en quête d’un séjour romantique à deux.
              </p>
            </div>
            <h2>Nos établissements</h2>
            <div className="content">
            
              <div className="hotels">
              {
                data.map(({image,title,description},index)=>{
                  return (
                    <div className="hotel" key={index}>
                      <img src={image} alt="hotel" />
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  );
                })
              }
              </div>
            </div>
          </div>
        </div>
       </>
      )
}