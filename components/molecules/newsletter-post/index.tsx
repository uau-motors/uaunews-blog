import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography
} from "@mui/material";

const NewsletterPost = () => {
  return (
    <Box className="newsletter-post">
      <Box className="newsletter-post-title">
        <Box className="icon">
          <img src="/assets/images/icons/send.png" alt="send" />
        </Box>
        <Box className="title">
          <Typography variant="h3">Inscreva-se na nossa newsletter</Typography>
          <Typography variant="h4">
            Seja o primeiro! Receba as últimas notícias de última hora
            diretamente na sua caixa de entrada.
          </Typography>
        </Box>
      </Box>
      <Box className="box-form">
        <Stack spacing={2} direction="row">
          <Box className="form-input">
            <TextField id="email" label="E-mail" variant="outlined" />
            <FormControlLabel
              control={<Checkbox />}
              label="Eu li e concordo com os termos e condições"
            />
          </Box>
          <Button variant="contained" color="primary" className="submit">
            Escreva-se agora
          </Button>
        </Stack>
      </Box>
      <Stack spacing={2} direction="row">
        <Typography variant="body2" className="text-term">
          Ao se inscrever, você concorda com nossos{" "}
          <Link href="#">Termos de Uso</Link> e reconhece as práticas de dados
          em nossa <Link href="#">Política de Privacidade</Link>. Você pode
          cancelar sua inscrição a qualquer momento.
        </Typography>
      </Stack>
    </Box>
  );
};

export default NewsletterPost;
