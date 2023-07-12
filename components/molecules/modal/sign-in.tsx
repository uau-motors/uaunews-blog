import * as React from "react";

import { useOverlay } from "@utility/contexts/ProviderContext";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  LinearProgress,
  Alert
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";

const SignInModal: React.FC = () => {
  const { modalOpen, openModal, closeModal, handleChange, handleFormat, name, email, password, format } = useOverlay();
  const [showPassword, setShowPassword] = React.useState(false);
  const [closeAlert, setCloseAlert] = React.useState(true);
  const [titleLogin, setTitleLogin] = React.useState("LOGIN");
  const [descriptLogin, setDescriptLogin] = React.useState("logar.");
  const [progress, setProgress] = React.useState("0");
  const [color, setColor] = React.useState("primary");
  const [repeat, setRepeat] = React.useState("");
  const [compare, setCompare] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleCloseAlert = () => {
    setCloseAlert((show) => !show);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const validate = validatePassword(value);
    const progress = validate.progress ? validate.progress.toString() : "0";
    if (value.length > 0) {
      setProgress(progress);
      setColor(validate.color);
    } else {
      setProgress("0");
      setColor("inherit");
    }
    handleChange(event);
  };

  const handleRepeatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRepeat(value);
  };

  const validatePassword = (password: string) => {
    const letterRegex = /[a-zA-Z]/;
    const numberRegex = /[0-9]/;
    let hasLetter = letterRegex.test(password);
    let hasNumber = numberRegex.test(password);
    let clr = "inherit";

    let counter = Math.min((password.length / 8) * 100, 100);

    if (counter <= 1) {
      counter = 1;
      hasLetter = false;
      hasNumber = false;
    }

    setIsValid(false);

    if (!hasLetter && !hasNumber) {
      clr = "danger";
    }

    if (hasLetter && !hasNumber) {
      clr = "warning";
    }

    if (!hasLetter && hasNumber) {
      clr = "warning";
    }

    if (hasLetter && hasNumber) {
      clr = "success";
    }

    if (password.length > 5) {
      if (!hasLetter || !hasNumber) {
        counter = 75;
      }
    }

    if (hasLetter && hasNumber && password.length >= 8) {
      setIsValid(true);
      setProgress("100");
    }

    return { color: clr, progress: counter };
  };

  React.useEffect(() => {
    if (format === "signin") {
      setTitleLogin("LOGIN");
      setDescriptLogin("Utilize sua conta Google ou Facebook para logar.");
    }
    if (format === "signup") {
      setTitleLogin("CADASTRO");
      setDescriptLogin("Utilize sua conta Google ou Facebook para cadastro.");
    }
    if (format === "forgot") {
      setTitleLogin("ESQUECEU SENHA?");
      setDescriptLogin("Informe seu email abaixo para resetar sua senha.");
    }
  }, [format, isValid]);

  React.useEffect(() => {
    if (password === repeat) {
      setCompare(true);
    } else {
      setCompare(false);
    }
  }, [password, repeat]);

  return (
    <React.Fragment>
      <Dialog open={modalOpen} onClose={closeModal} maxWidth={"sm"} className="modal">
        <DialogContent className="modal-sign-in">
          <Box className="title-login">
            <h4>{titleLogin}</h4>
          </Box>
          <Box className="response">
            <Alert onClose={() => {}} severity="error">
              Dados informado incorretos
            </Alert>
          </Box>
          {format === "signin" && (
            <Box className="socials-login">
              <DialogContentText>{descriptLogin}</DialogContentText>
              <Box className="action-buttons">
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" startIcon={<GoogleIcon />}>
                    Login com Google
                  </Button>
                  <Button variant="outlined" startIcon={<FacebookIcon />}>
                    Login com Facebook
                  </Button>
                </Stack>
              </Box>
            </Box>
          )}
          {format === "signup" && (
            <Box className="socials-login">
              <DialogContentText>{descriptLogin}</DialogContentText>
              <Box className="action-buttons">
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" startIcon={<GoogleIcon />}>
                    Cadastre com Google
                  </Button>
                  <Button variant="outlined" startIcon={<FacebookIcon />}>
                    Cadastre com Facebook
                  </Button>
                </Stack>
              </Box>
            </Box>
          )}

          <Box className="sepatator">
            <Box>
              <Typography variant="h5">
                {format !== "forgot" ? "Use seu email e senha" : "Informe seu email"}
              </Typography>
            </Box>
          </Box>
          <Box className="form-login">
            {format === "signin" && (
              <React.Fragment>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="email">E-mail</InputLabel>
                  <OutlinedInput
                    id="email"
                    value={email}
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <AlternateEmailIcon />
                      </InputAdornment>
                    }
                    label="E-mail"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="password">Senha</InputLabel>
                  <OutlinedInput
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position="start">
                        <PasswordIcon />
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <Button onClick={() => handleFormat("forgot")} variant="text" className="forgout" size="small">
                    Esqueci a senha
                  </Button>
                </FormControl>
              </React.Fragment>
            )}
            {format === "signup" && (
              <React.Fragment>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="email">Nome</InputLabel>
                  <OutlinedInput
                    name="name"
                    value={name}
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    }
                    label="Nome"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="email">E-mail</InputLabel>
                  <OutlinedInput
                    name="email"
                    value={email}
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <AlternateEmailIcon />
                      </InputAdornment>
                    }
                    label="E-mail"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="password">Senha</InputLabel>
                  <OutlinedInput
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position="start">
                        <PasswordIcon />
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <Box sx={{ width: "100%" }} className="progress">
                    <LinearProgress value={parseInt(progress) || 1} color={"inherit"} variant="determinate" />
                  </Box>
                  {closeAlert && (
                    <Box sx={{ width: "100%" }} className="description">
                      <Alert variant="outlined" severity="warning" onClose={handleCloseAlert}>
                        Use 8 ou mais caracteres com letras e números
                      </Alert>
                    </Box>
                  )}
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="repeat">Repetir senha</InputLabel>
                  <OutlinedInput
                    name="repeat"
                    type={showPassword ? "text" : "password"}
                    value={repeat}
                    onChange={handleRepeatChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position="start">
                        <PasswordIcon />
                      </InputAdornment>
                    }
                    label="Repetir senha"
                  />
                </FormControl>
              </React.Fragment>
            )}
            {format === "forgot" && (
              <React.Fragment>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="email">E-mail</InputLabel>
                  <OutlinedInput
                    name="email"
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <AlternateEmailIcon />
                      </InputAdornment>
                    }
                    label="E-mail"
                    className="input-forgot"
                  />
                </FormControl>
              </React.Fragment>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          {format === "forgot" && (
            <Button onClick={() => handleFormat("signin")} variant="outlined">
              LOGIN
            </Button>
          )}
          {format === "signin" && (
            <Button onClick={() => handleFormat("signup")} variant="outlined">
              CADASTRE-SE
            </Button>
          )}
          {format === "signup" && (
            <Button onClick={() => handleFormat("signin")} variant="outlined">
              LOGIN
            </Button>
          )}
          {format === "forgot" && (
            <Button onClick={() => alert("Recuperar senha")} variant="contained">
              RECUPERAR SENHA
            </Button>
          )}
          {format === "signin" && (
            <Button onClick={() => alert("Login")} variant="contained">
              ENTRAR
            </Button>
          )}
          {format === "signup" && (
            <Button onClick={() => alert("Cadastrar")} variant="contained" disabled={!compare}>
              CADASTRAR
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default SignInModal;
