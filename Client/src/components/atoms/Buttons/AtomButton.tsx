import React from "react";
import { Button, ButtonProps } from "@mui/material";
import AtomSpinner from "../Spinner/AtomSpinner";

interface AtomButtonProps extends ButtonProps {
  label: string;
  onClick?: () => void;
  isLoading?: boolean;
}

const AtomButton: React.FC<AtomButtonProps> = ({
  label,
  variant = "contained",
  color = "primary",
  onClick,
  isLoading = false,
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      {...rest}
      sx={{ mt: 3, mb: 2 }}
    >
      {isLoading ? <AtomSpinner /> : label}
    </Button>
  );
};

export default AtomButton;
