import React from "react";
import { City } from "./cities";
import './styles.css'
interface CityItemMouseProps {
  city: City;
  onColorChange: (color: string) => void;
}

const CityItemMouse: React.FC<CityItemMouseProps> = ({
  city,
  onColorChange,
}) => {
  const handleMouseEnter = () => {
    onColorChange(city.city_name);
  };

  const handleMouseLeave = () => {
    onColorChange("");
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span className="city-color">{city.city_name}</span>
    </li>
  );
};
export default CityItemMouse