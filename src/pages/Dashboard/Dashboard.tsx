import { ROUTES } from "@/components/constants/routes";
import { CardLayout, PageLayout } from "@/components/Layout";
import UserCard from "@/components/UserCard/Usercard";
import { kids } from "@/constants/user.constants";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const breadcrumbs = [{ label: "Dashboard" }];
  const navigate = useNavigate();

  return (
    <PageLayout breadcrumbs={breadcrumbs}>
      <CardLayout>
        <Container maxWidth="md">
          <Box sx={{ display:"flex", flex: 1, justifyContent:"space-between",alignItems:"center", flexDirection:{xs:'column',md:'row'}}}>
            <Typography variant="h4" gutterBottom>
              Vaccination Tracker
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(ROUTES.ADD_KID)}
            >
              Add Kid
            </Button>
          </Box>

          {kids.length === 0 ? (
            <Typography variant="body1">
              No kids added yet. Click below to add.
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {kids.map((kid) => (
                <Grid item xs={12} sm={6} key={kid.id}>
                  <UserCard {...kid} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </CardLayout>
    </PageLayout>
  );
};

export default Dashboard;
