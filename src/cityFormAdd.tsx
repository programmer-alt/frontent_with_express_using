import React, { useState } from "react";
import { apiUrl} from "./api";
import { City } from "./cities";

interface CityFormAddProps {
  onAddCity: (city:City)=> void
}

const CityFormAdd: React.FC<CityFormAddProps> = ({onAddCity}) => {
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
       
        const result = await response.json()
        // const formattedCity: City = {
        //   city_name: cityName, // Используем введенное название города
        //   id: result.id // Используем идентификатор из ответа
        // };
      
        onAddCity(result);
        
        setCityName('')
      } else {
        console.error(" Ошибка добавления города:", response.status);
      }
    } catch (error) {
      console.error(" Ошибка:", error);
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