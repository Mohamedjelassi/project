import React from "react";
import "../compo.css";

function Home() {
  return (
   
      <div className="hokmeF">
        <h1>
          Rentalcars.com vous connecte aux plus grandes enseignes de location de
          voitures.
        </h1>
        <div className="cons">
          <div>
            <h2>Locations flexibles </h2>
            <p>
              Vous pouvez annuler ou modifier la plupart des réservations
              gratuitement jusqu’à 48 heures avant la prise en charge du
              véhicule.
            </p>
          </div>
          <div>
            <h2>Pas de frais cachés </h2>
            <p> Sachez exactement ce que vous payez </p>
          </div>
          <div>
            <h2> Nous alignons nos tarifs </h2>
            <p>
              Vous avez trouvé la même offre pour moins cher ? Nous ajusterons
              notre tarif en conséquence.
            </p>
          </div>
        </div>
        <div className="cons1">
          <div className="cons1b">
            <h2>
              Des voitures propres. Des réservations flexibles. Des agences
              respectant la distanciation physique.
            </h2>
            <p>
              Nous travaillons avec nos partenaires pour assurer votre sécurité
              au volant.
            </p>
          </div>
          <div className="cons1b">
            <h2>Abonnez-vous pour recevoir nos offres exclusives ! </h2>
            <input placeholder="Adresse e-mail" />
            <button className="green"> Abonnez </button>
          </div>
        </div>
        <div className="qust">
          <div className="qust1">
            <h3>Questions fréquentes </h3>
            <h4> De quoi ai-je besoin pour louer une voiture ?</h4>
            <h4> Quel est l'âge requis pour louer un véhicule ?</h4>
            <h4>
              {" "}
              Puis-je réserver une voiture de location pour quelqu'un d'autre ?{" "}
            </h4>
            <h4>
              {" "}
              Comment puis-je trouver la location de voiture la moins chère ?
            </h4>
            <h4>
              {" "}
              À quoi dois-je donner la priorité lorsque je choisis une voiture ?
            </h4>
            <h4> Tous les frais sont-ils inclus dans le prix de location ?</h4>
          </div>
          <div className="qust1">
            <h3>Informations additionnelles </h3>
            <h4> Recherche avancée</h4>
            <h4> Destinations populaires</h4>
            <h4> Aéroports </h4>
            <h4> Sociétés de location de voitures</h4>
          </div>
        </div>
      </div>
  );
}

export default Home;
