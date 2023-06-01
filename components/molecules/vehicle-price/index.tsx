import React from "react";
import { Chip } from "@material-ui/core";

interface VehiclePriceProps {
  label: string;
  onClick?: () => void;
}

const VehiclePrice: React.FC<VehiclePriceProps> = ({ label, onClick }) => {
  return (
    <Chip
      label={label}
      className="vehicle-price"
      onClick={onClick}
      variant="outlined"
    />
  );
};

export default VehiclePrice;
