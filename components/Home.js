import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/chatbot"); // Redirect to Chatbot
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #2196F3, #21CBF3)",
        color: "#fff",
        textAlign: "center",
        padding: 4,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to Gov Connect
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: 600, mb: 4 }}>
        Gov Connect helps citizens connect with government authorities by
        analyzing query severity and notifying officials for quick response.
        Navigate to our chatbot to get started!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleNavigate}
        sx={{
          backgroundColor: "#FFC107",
          "&:hover": { backgroundColor: "#FFA000" },
        }}
      >
        Go to Chatbot
      </Button>
    </Box>
  );
};

export default Home;
