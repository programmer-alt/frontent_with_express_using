import React, { useState, useEffect } from "react";
import { getCities } from "./api";
import DeleteCityButton from "./deleteCityButton";
interface City {
  city_name: string;
  id: number;
}
const Cities = () => {
  const [cities, setCities] = useState<City[]>([]);
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
        <li key={city.id}>{city.city_name}
         <DeleteCityButton cityId={city.id} onSuccess={() => {}} />
        </li>
       
      ))}
    </ul>
  );
};

export default Cities;
