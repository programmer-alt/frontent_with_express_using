import React, { useState } from "react";
import { apiUrl } from "./api";
import { City } from "./cities";

interface CityFormAddProps {
  onAddCity: (city: City) => void;
}

const CityFormAdd: React.FC<CityFormAddProps> = ({ onAddCity }) => {
  const [cityName, setCityName] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/cities/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city_name: cityName }),
      });
      if (response.ok) {
        const addedCity = await response.json();
        const addNewCity: City = {
          id: addedCity.id,
          city_name: cityName,
        };
        console.log("Возвращение id ", addedCity.id); 
        onAddCity(addNewCity);
        setCityName('')
      } else {
        console.error("Ошибка при добавлении города");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={cityName}
        onChange={(event) => setCityName(event.target.value)}
        placeholder="Введите город"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default CityFormAdd;
