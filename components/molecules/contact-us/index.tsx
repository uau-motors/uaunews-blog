import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import React, { useState } from "react";
import Breadcrumb from "../breadcrumb";
import Select from "react-select";

const arrayStates = [{ value: "", label: "Informe o estado" }];
const arrayCities = [{ value: "", label: "Selecione a cidade" }];

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [capcha, setCaptcha] = useState("");
  const [capcha2, setCaptcha2] = useState("");
  const [states, setStates] = useState();
  const [cities, setCities] = useState();

  const handleChange = (name: any) => (event: any) => {};

  return (
    <>
      <Container>
        <Breadcrumb />
        <Box className={`page-contact`}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box className="box-title">
                <Box>
                  <h5>Fale Conosco</h5>
                  <p>
                    Entre em contato conosco caso tenha alguma dúvida ou queira
                    contratar algum de nossos serviços, temos uma equipe
                    especializada que irá lhe atender.
                  </p>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="box-location">
                <Box className="map">
                  <Grid container spacing={2}>
                    <Box className="box-content">
                      <Grid item xs={4}>
                        <Box className="box-info">
                          <Box className="icon">
                            <PhoneInTalkIcon />
                          </Box>
                          <Box>
                            <h4>11 98111-9841</h4>
                            <p>Seg à Sex 8h às 18h / Sáb 8h às 13h</p>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box className="box-info">
                          <Box className="icon">
                            <ForwardToInboxIcon />
                          </Box>
                          <Box>
                            <h4>contato@uaumotors.com.br</h4>
                            <p>Responderemos o mais rápido possível</p>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box className="box-info">
                          <Box className="icon">
                            <ShareLocationIcon />
                          </Box>
                          <Box>
                            <p>
                              Rua George Ohm, 206 - Torre B - 10º andar
                              <br />
                              Cidade Moções - São Paulo-SP, CEP: 04576-020
                            </p>
                          </Box>
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={5} className="box-info">
              <Box className="box-image">
                <Typography variant="h3">Como podemos ajudar?</Typography>
                <Typography variant="body2">
                  Preencha as informações ao lado que em breve entraremos em
                  contato com você.
                </Typography>
                <img src="/assets/images/contact.webp" alt="contact person" />
              </Box>
            </Grid>
            <Grid item xs={7} className="box-form">
              <form className="form-contact">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="name"
                      label="Nome:"
                      className="input-text"
                      onChange={handleChange("name")}
                      margin="normal"
                      variant="outlined"
                      value={name}
                      required
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="email"
                      label="Email:"
                      className="input-text"
                      onChange={handleChange("email")}
                      margin="normal"
                      variant="outlined"
                      value={email}
                      required
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="phone"
                      label="Celular:"
                      className="input-text"
                      onChange={handleChange("phone")}
                      margin="normal"
                      variant="outlined"
                      value={phone}
                      required
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Select
                      id="uf"
                      options={states}
                      className="select"
                      defaultValue={arrayStates}
                      isSearchable
                      isClearable
                      onChange={handleChange("uf")}
                      margin="normal"
                      value={uf}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      id="city"
                      label="Cidade:"
                      className="input-text"
                      onChange={handleChange("city")}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="message"
                      label="Mensagem:"
                      className="textarea"
                      onChange={handleChange("message")}
                      margin="normal"
                      variant="outlined"
                      multiline
                      minRows={7}
                      maxRows={9}
                      required
                    />
                    <FormControlLabel
                      required
                      control={<Checkbox />}
                      label="Ao clicar em um dos botões abaixo, você está declarando que leu e concordou com nosso termo e com o politica de privacidade"
                    />
                  </Grid>
                  <Grid item xs={7}>
                    Contate-me via
                  </Grid>
                  <Grid item xs={5}>
                    Capcha
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      disabled={true}
                      startIcon={<WhatsAppIcon />}
                    >
                      Whatsapp
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      disabled={true}
                      startIcon={<PhoneInTalkIcon />}
                    >
                      Ligue-me
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      disabled={true}
                      startIcon={<ForwardToInboxIcon />}
                    >
                      Por email
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ContactUs;
