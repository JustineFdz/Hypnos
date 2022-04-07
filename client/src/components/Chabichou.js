import { React } from "react";
export const Chabichou = () => {
    const data = [
        {
          image: "https://www.brunch-creative.com/wp-content/uploads/2014/11/zermatt-piscine-1024.jpg",
          title: "La Diamant",
          description: "Suite Nuptiale",
        },
        {
          image: "https://i0.wp.com/www.week-end-voyage-porto.com/wp-content/uploads/sites/6/2019/01/Suite-Bacchus-avec-jacuzzi-Hotel-The-Yeatman-Vila-Nova-de-Gaia-Porto.jpg",
          title: "La Rubis",
          description: "Suite Nuptiale",
        },
        {
          image: "https://www.cupiroom.fr/wp-content/uploads/2020/12/chambre-jacuzzi-privatif-lyon-le-gourguillon.jpg",
          title: "La Saphir",
          description: "Suite Nuptiale",
        },
        {
          image: "https://www.letsgomylove.com/wp-content/uploads/2021/10/spa-ciney-privatif-suite-montmartre-11-1024x682.jpg",
          title: "L'améthyste",
          description: "Suite Nuptiale",
        },
        {
          image: "https://media-magazine.trivago.com/wp-content/uploads/2015/10/08151112/hotel-chambre-jacuzzi-prive-clos-des-vignes-suite-jacuzzi.jpg",
          title: "L'eben",
          description: "Suite Nuptiale",
          },
        ];
      return (
        <div className="hotel-container mx-3 py-3">
          <div className="container">
            <div className="title-container">
                <h1>Le Chabichou </h1>
              <p>
              Tout commence en 1963 quand le jeune couple Rochedy s’endette pour quelques dizaines d’années en rachetant un petit chalet de 9 chambres situé dans les Alpes françaises, à Courchevel 1850. Michel se charge du restaurant, Maryse de l’hôtellerie.
              Sept ans plus tard, avec force et implication, le Chabichou qui a désormais 25 chambres, gagne ses premiers galons dans l’hôtellerie : 2 étoiles. Les Rochedy pensent plus loin.
              </p>
            </div>
            <h2>Nos suites</h2>
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
      )
}