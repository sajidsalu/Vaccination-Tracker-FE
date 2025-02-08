import { Box, Container, Typography, Button as MaterialButton } from "@mui/material";
import { Button, InputField } from "@/components";
import { Controller, useForm } from "react-hook-form";
import { SignUpFormType, signUpSchema } from "./Signup.config"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/components/constants/routes";

import LoginBG from "@/assets/images/login_bg.png";

import { useDispatch } from "react-redux";
import { setUser } from '../../store/userStore';
import { rem } from "@/utils/apptheme/themeUtils";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { firstName: "", lastName: "", email: "", password: "" },
    mode: "all",
  });

  const onSubmit = (data: SignUpFormType) => {
    // Handle the form submission logic
    dispatch(setUser(data.email));  // Save the user's email or other details to the store
    navigate(ROUTES.HOME);  // Navigate to home after successful signup
    console.log("Form Submitted", data);
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        height: "100vh",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              p: 4,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "white",
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Create an Account
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <InputField
                    label="First Name"
                    type="text"
                    error={!!errors.firstName?.message}
                    helperText={errors.firstName?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <InputField
                    label="Last Name"
                    type="text"
                    error={!!errors.lastName?.message}
                    helperText={errors.lastName?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <InputField
                    label="Email"
                    type="email"
                    error={!!errors.email?.message}
                    helperText={errors.email?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <InputField
                    label="Password"
                    type="password"
                    error={!!errors.password?.message}
                    helperText={errors.password?.message}
                    {...field}
                  />
                )}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: rem(16) }}>
                <Button title="Sign Up" type="submit" />
                <MaterialButton fullWidth variant="text" onClick={() => navigate(ROUTES.LOGIN)}>
                  Already have an account? Login
                </MaterialButton>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${LoginBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
};

export default SignUp;
