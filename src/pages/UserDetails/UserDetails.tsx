import {
  Container,
  Typography,
  Box,
  Avatar,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import { useState } from "react";
import { rem } from "@/utils/apptheme/themeUtils";
import { useNavigate, useParams } from "react-router-dom";
import { dummyUser } from "./UserDetails.config";
import { CardLayout, PageLayout } from "@/components/Layout";
import EditIcon from "@mui/icons-material/Edit";
import { ROUTES } from "@/components/constants/routes";

const UserDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = dummyUser;
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (
    event: React.ChangeEvent<unknown>,
    newIndex: number
  ) => {
    setTabIndex(newIndex);
  };

  const navigateBack = () => {
    navigate(-1);
  };

  const navigateToEditDetails = () => {
    navigate(ROUTES.EDIT_KID);
  };

  const navigateToAddVaccination = () => {
    navigate(ROUTES.ADD_VACCINATION.replace(":id", "1"));
  };
  return (
    <PageLayout breadcrumbs={[{ label: "Users" }, { label: "User Details" }]}>
      <CardLayout
        title="User Details"
        onClickBackButton={navigateBack}
        headerAction={
          <Button
            variant="contained"
            color="primary"
            onClick={navigateToAddVaccination}
          >
            Add Vaccination
          </Button>
        }
      >
        <Container maxWidth="md" sx={{ marginTop: rem(24) }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: rem(16),
                marginBottom: rem(24),
              }}
            >
              <Avatar
                src={user.profileImage}
                alt={user.name}
                sx={{ width: rem(80), height: rem(80) }}
              />
              <Box>
                <Typography variant="h4">{user.name}</Typography>
                <Typography variant="body1">Gender: {user.gender}</Typography>
                <Typography variant="body1">DOB: {user.dob}</Typography>
              </Box>
            </Box>
            <IconButton
              id="back-navigation-button"
              aria-label="back"
              size="medium"
              color="default"
              sx={{
                ".MuiSvgIcon-root": { fontSize: { xs: rem(26), lg: rem(28) } },
              }}
              onClick={navigateToEditDetails}
            >
              <EditIcon />
            </IconButton>
          </Box>
          {/* Tabs Section */}
          <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
            <Tab label="Vaccinations Taken" />
            <Tab label="Upcoming Vaccinations" />
          </Tabs>

          {/* Tab Content */}
          {tabIndex === 0 && (
            <TableContainer component={Paper} sx={{ marginTop: rem(16) }}>
              <Table stickyHeader sx={{ minWidth: { xs: rem(650), md: rem(650) } }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Vaccination Name</TableCell>
                    <TableCell>Shot No.</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Place</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user.vaccinations.map((vaccine, index) => (
                    <TableRow key={index}>
                      <TableCell>{vaccine.name}</TableCell>
                      <TableCell>{vaccine.shotNumber}</TableCell>
                      <TableCell>{vaccine.dateTaken.toDateString()}</TableCell>
                      <TableCell>{vaccine.hospital}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {tabIndex === 1 && (
            <TableContainer component={Paper} sx={{ marginTop: rem(16) }}>
              <Table stickyHeader sx={{ minWidth: { xs: rem(550), md: rem(650) } }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Vaccination Name</TableCell>
                    <TableCell>Shot No.</TableCell>
                    <TableCell>Due Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user.upcomingVaccinations.map((vaccine, index) => (
                    <TableRow key={index}>
                      <TableCell>{vaccine.name}</TableCell>
                      <TableCell>{vaccine.shotNumber}</TableCell>
                      <TableCell>{vaccine.dateTaken.toDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Container>
      </CardLayout>
    </PageLayout>
  );
};

export default UserDetailsPage;
