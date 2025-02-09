import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "@/assets/images/404.jpg";
import { useDispatch } from "react-redux";
import { clearStore } from "@/store/userStore";
const NotFound = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoHome = () => {
    dispatch(clearStore());
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Oops! Page not found.
      </Typography>
      <img src={NotFoundImage} alt="404 Not Found" style={{ maxWidth: "100%", maxHeight: "400px" }} />
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        The page you are looking for might have been moved or deleted.
      </Typography>
      <Box sx={{ marginTop: 3 }}>
        <button
          onClick={handleGoHome}
          style={{
            padding: "10px 20px",
            backgroundColor: "#3f51b5",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go to Home
        </button>
      </Box>
    </Box>
  );
};

export default NotFound;
