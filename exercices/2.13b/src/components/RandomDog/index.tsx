import { useEffect, useState } from "react";
import "./RandomDog.css";
import type { Image } from "../../../types";

const RandomDog = () => {
  const [image, setImages] = useState<Image | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `fetch error: ${response.status} : ${response.statusText}`,
          );
        }
        return response.json();
      })
      .then((img) => {
        setImages({
          message: img?.message,
          status: img?.status,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(`API::error: ${err}`);
        setError("Erreur lors du chargement de l'image");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="dog-card">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <div className="loading-text">Chargement...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dog-card">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="dog-card fade-in">
      <img src={image?.message} alt="chien aléatoire" className="dog-image" />
      <div className="dog-status">{image?.status}</div>
    </div>
  );
};

export default RandomDog;
