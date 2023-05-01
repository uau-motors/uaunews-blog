import React, { useState } from "react";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
const Newsletter = () => {
  const [email, setEmail] = useState("");

  const Input = styled(TextField)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#1A2027" : "#1A2027",
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o email para o servidor
    console.log(email);
    setEmail("");
  };

  return (
    <Box className="newsletter">
      <Box className={`box-newsletter`}>
        <Stack
          component="form"
          spacing={2}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className={`form-newsletter`}
        >
          <Typography variant="h3">Assine nossa newsletter</Typography>
          <Input
            label="Digite seu e-mail"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            sx={{ mr: 1 }}
          />
          <Button variant="contained" type="submit">
            assinar
          </Button>
          <Typography variant="body2">
            Faça parte da lista VIP, e receba em primeira mão nossas novidades.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Newsletter;
