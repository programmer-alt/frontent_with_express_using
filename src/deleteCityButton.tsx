import React from "react";
import './styles.css'

interface DeleteCityButtonProps {
  cityId: number;
  onSuccess: (id: number) => void;
  isDeleting: boolean
}
const DeleteCityButton: React.FC<DeleteCityButtonProps> = ({ cityId, onSuccess, isDeleting }) => {
  const handleDeleteClick = () => {
    onSuccess(cityId);
  }
  
  return (
    <button onClick={handleDeleteClick} disabled={isDeleting} className="delete-button">
      {isDeleting ? "Удаление..." : ""}
    </button>
  );
};
export default DeleteCityButton;
