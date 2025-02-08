import { ROUTES } from "@/components/constants/routes";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export type Kid = {
  id: number;
  name: string;
  age: string;
  upcomingVaccination: string;
};
const UserCard = (user: Kid) => {
  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate(ROUTES.DETAILS.replace(":id", "1"));
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          age: {user.age} years old
        </Typography>
        <Typography variant="body2">
          Upcoming: {"Polio - 15 Feb 2025"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={navigateToDetails}>
          View More
        </Button>
      </CardActions>
    </Card>
  );
};
export default UserCard;
