import React from "react";


export const Hotel = () => {
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
      image: "/assets/courchevel.jpeg",
      title: "L'Altapura",
      description: "Hôtel de luxe en front de Neige, Courchevel",
    },
  ];
  return (
    <div className="hotel-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Nos établissements</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
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