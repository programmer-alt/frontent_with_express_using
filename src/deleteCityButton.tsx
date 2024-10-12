import React from "react";


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
    <button onClick={handleDeleteClick} disabled={isDeleting}>
      {isDeleting ? "Удаление..." : "Удалить"}
    </button>
  );
};
export default DeleteCityButton;
