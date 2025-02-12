import { Box, Container, Typography, Button as MaterialButton } from "@mui/material";
import { Button, InputField } from "@/components";
import { Controller, useForm } from "react-hook-form";
import { LoginFormType, loginSchema } from "./Login.config";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginBG from "@/assets/images/login_bg.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/components/constants/routes";

import { useDispatch } from "react-redux";
import { setUser, setLoginResponse } from '../../store/userStore';
import { rem } from "@/utils/apptheme/themeUtils";
import useLogin from "@/services/auth/useLogin";
import { LoginAPIResponse, LoginPayload } from "@/services/auth/auth.types";
import { FailedAPIStatus } from "@/types/api.types";
import { useToast } from "@/hooks";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showSuccessToast, showErrorToast } = useToast();
  
  const onLoginSuccess =(data:LoginAPIResponse)=>{
    showSuccessToast("Login successful!");
    console.log('login response is',data?.result)
    dispatch(setLoginResponse(data?.result));
    navigate(ROUTES.HOME);
  }

  const onLoginFailed =(error:FailedAPIStatus)=> {
    showErrorToast(error?.result?.message)
  }
  const {mutateAsync: loginUser} = useLogin({onSuccess: onLoginSuccess, onError: onLoginFailed});

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
    mode: "all",
  });

  const onSubmit = async(data: LoginFormType) => {
    dispatch(setUser(data.email));
    const payload: LoginPayload ={
      email: data.email,
      password: data.password,
    };
    await loginUser(payload);
  };

  const navigateToSignup = ()=>{
    navigate(ROUTES.SIGN_UP);
  }

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
              <MaterialButton fullWidth variant="text" onClick={navigateToSignup}> Sign up </MaterialButton>
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
