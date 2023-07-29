import React, { useContext, useState } from "react";
import { Box, TextField, Button, Typography, Stack, Checkbox, FormControlLabel } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    background: theme === "dark" ? "#202020" : "#f0f0f0",
    color: theme === "dark" ? "#ffffff" : "#212121"
  }
}));

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const classes = useStyles();

  const handleSubmit = (event: any) => {
    event.preventDefault();
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

          <Typography variant="body2" className="info">
            Faça parte da lista VIP, e receba em primeira mão nossas novidades.
          </Typography>

          <TextField
            label="Digite seu e-mail"
            variant="filled"
            value={email}
            size="small"
            color="primary"
            onChange={(event) => setEmail(event.target.value)}
            InputProps={{ className: classes.input }}
            sx={{ m: 2 }}
          />

          <FormControlLabel
            required
            control={<Checkbox />}
            label="Eu li e concordo com os termos e condições"
            className="term"
          />

          <Button variant="contained" type="submit">
            escreva-se agora
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Newsletter;
