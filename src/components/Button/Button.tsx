import { Button } from "@mui/material";

interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onClick,
  type = "button",
  fullWidth = true,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      sx={{ mt: 2 }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
