import React, { useState, useEffect } from "react";
import { apiUrl, getCities } from "./api";
import DeleteCityButton from "./deleteCityButton";
import CityItemMouse from "./cityItemMouse";
import "./styles.css";

 export interface City {
  city_name: string;
  id: number;
}

const Cities: React.FC = () => { 
  const [cities, setCities] = useState<City[]>([]);
  const [isDeleting, setDeleting] = useState<boolean>(false);
  const [color, setColor] = useState<Record<string, string>>({})
 
  const handleColorChange = (cityName: string, color: string) => {
    setColor(prevColors => ({
      ...prevColors,
      [cityName]: color
    }))
  }
  const handleDelete = async (id: number): Promise<void> => {
    const successMessage = () => {
      alert("Город успешно удален");
    };
    setDeleting(true);
    try {
      const response = await fetch(`${apiUrl}/cities/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        successMessage();
        setCities((prevCities) => prevCities.filter((city) => city.id !== id));
      } else {
        alert("Город не был удален");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setDeleting(false);
    }
  };

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const data = (await getCities()) as City[];
        if (data) {
          setCities(data);
        } else {
          console.log("Данные не были получены");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCities();
  }, []);

  return (
    <ul>
      {cities.map((city) => (
        <li key={city.id}>
          <CityItemMouse city={city} onColorChange={handleColorChange} />
          <DeleteCityButton
            cityId={city.id}
            onSuccess={handleDelete}
            isDeleting={isDeleting}
          />
        </li>
      ))}
    </ul>
  );
};

export default Cities;