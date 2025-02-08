import { ROUTES } from "@/components/constants/routes";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

const UserCard=()=>{
    const navigate = useNavigate();
    const navigateToDetails =()=>{
        navigate(ROUTES.DETAILS.replace(":id", "1"));
    }
    return(
        <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Card Title 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a description of the first card. It can contain any content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={navigateToDetails}>Learn More</Button>
            </CardActions>
          </Card>
    )
};
export default UserCard;