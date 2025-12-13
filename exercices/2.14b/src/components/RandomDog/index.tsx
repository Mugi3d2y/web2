import { useEffect, useState } from "react";
import "./RandomDog.css";
import type { Image } from "../../../types";

const RandomDog = () => {
  const [image, setImage] = useState<Image | undefined>(undefined);

  useEffect(() => {
    fetchDogImage();

    const interval = setInterval(() => {
      fetchDogImage();
    },5000);
    return () => clearInterval(interval);
  }, []);
  const fetchDogImage = async () => {
    setImage(undefined); // Efface l'ancienne image avant de charger la nouvelle
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");

      if (!response.ok)
        throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

      const image = await response.json();
      setImage({
        message: image?.message,
        status: image?.status,
      });
    } catch (err) {
      console.error("HomePage::error: ", err);
    }
  };

  return (
    <div className="dog-card fade-in">
      <img src={image?.message} alt="chien aléatoire" className="dog-image" />
      <div className="dog-status">{image?.status}</div>
    </div>
  );
};

export default RandomDog;
