import { Container, Typography, Box, Button } from "@mui/material";
import UserCard from "./UserCard";
import { rem } from "@/utils/apptheme/themeUtils";
import { CardLayout, PageLayout } from "@/components/Layout";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/components/constants/routes";

const HomePage = () => {
  const navigate = useNavigate();

  const breadcrumbs = [{ label: "Home" }];
  return (
    <PageLayout breadcrumbs={breadcrumbs}>
      <CardLayout>
        <Container maxWidth="lg" sx={{ marginTop: 4 }}>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Vaccination Tracker
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: {xs:'column',md:'row'}
            }}
          >
            <Typography
              variant="h5"
              align="center"
              paragraph
              sx={{ flexGrow: 1 }}
            >
              Store your kids vaccination details, keep notified about upcoming
              vaccinations
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{ marginBottom: rem(20) }}
              onClick={() => navigate(ROUTES.ADD_KID)}
            >
              + Add Kid
            </Button>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 4,
              justifyItems: "center",
            }}
          >
            {/* Card 1 */}

            <UserCard />

            {/* Card 2 */}

            <UserCard />

            {/* Card 3 */}

            <UserCard />
          </Box>
        </Container>
      </CardLayout>
    </PageLayout>
  );
};

export default HomePage;
