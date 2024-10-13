import React, { useState } from "react";
import { apiUrl } from "./api";
import { City } from "./cities";

const CityFormAdd: React.FC = () => {
  const [cityName, setCityName] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/cities/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city_name: cityName }),
      });
      if (response.ok) {
        console.log(" Город добавлен успешно!");
        setCityName(''); 
      } else {
        console.error("Error adding city:", response.status);
      }
    } catch (error) {
      console.error("Error adding city:", error);
    }
  };

  return (
    
      <form onSubmit={handleSubmit}>
        <input type="text" value={cityName} onChange={(event) => setCityName(event.target.value)} placeholder="Введите город" />
        <button type="submit">Добавить</button>
      </form>
   
  );
};

export default CityFormAdd;