import notFound from "../assets/img/not-found.jpg";

const NoMatch = () => {
  return (
    <div className="not-found">
      <div className="not-found-img">
        <img src={notFound} alt="404 not found" />
      </div>

      <div className="not-found-details">
        <h1>404 PAGE NOT FOUND</h1>
        <p>
          Vérifiez que vous avez saisi l'adresse correctement, revenez à votre
          page précédente ou essayez d'utiliser la recherche sur notre site pour
          trouver quelque chose de spécifique.
        </p>
      </div>
    </div>
  );
};

export default NoMatch;
