import { AuthLayout } from "@/components/Layout";
import { ROUTES } from "@/components/constants/routes";
import UserDetailsPage from "@/pages/UserDetails";
import { Box, Typography } from "@mui/material";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/Login"));
const HomePage = lazy(() => import("@/pages/Home"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const AddKid = lazy(() => import("@/pages/AddKid"));
const AddVaccination = lazy(() => import("@/pages/AddVaccination"));
const ProfilePage = lazy(() => import("@/pages/Profile"));

const PageRoutes = () => {
  return (
    <Suspense
      fallback={
        <Box>
          <Typography>Loading...</Typography>
        </Box>
      }
    >
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.DETAILS} element={<UserDetailsPage />} />
          <Route path={ROUTES.ADD_KID} element={<AddKid />} />
          <Route path={ROUTES.EDIT_KID} element={<AddKid />} />
          <Route path={ROUTES.ADD_VACCINATION} element={<AddVaccination />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default PageRoutes;
