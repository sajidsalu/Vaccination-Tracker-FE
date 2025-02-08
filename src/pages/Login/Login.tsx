import { Box, Container, Typography, Button as MaterialButton } from "@mui/material";
import { Button, InputField } from "@/components";
import { Controller, useForm } from "react-hook-form";
import { LoginFormType, loginSchema } from "./Login.config";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginBG from "@/assets/images/login_bg.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/components/constants/routes";

import { useDispatch } from "react-redux";
import { setUser } from '../../store/userStore';
import { rem } from "@/utils/apptheme/themeUtils";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "all",
  });

  const onSubmit = (data: LoginFormType) => {
    navigate(ROUTES.HOME);
    dispatch(setUser(data.email));
    console.log("Form Submitted", data);
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        height: "100vh",
        flexDirection:{xs:"column",md:"row"}
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
              Vaccination Tracker
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="email"
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
              <Box sx={{display:'flex', flexDirection:'column',gap:rem(16)}}>
              <Button title="Login" type="submit" />
              <MaterialButton fullWidth variant="text"> Sign up </MaterialButton>
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

export default Login;
