import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Container>
        <Box className={`page-about`}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box className="about-photos">
                <ul>
                  <li>
                    <img src="/assets/images/about/about-1.jpg" alt="about-1" />
                  </li>
                  <li>
                    <img src="/assets/images/about/about-2.jpg" alt="about-2" />
                  </li>
                  <li>
                    <img src="/assets/images/about/about-3.jpg" alt="about-3" />
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="about-content">
                <h4>Quem Somos</h4>
                <h2>Uma empresa jovem, com uma meta gigante pra você!</h2>

                <p>
                  A UauMotors é um portal de veículos que nasceu com o objetivo
                  de cobrir o universo automotivo, trazendo sempre as melhores
                  informações sobre carros e motos. Levar serviços de qualidades
                  ao nossos clientes para que tenha sucesso em seus negócios.
                </p>

                <p>
                  Nossa missão é compartilhar tudo que está acontecendo no
                  cenário nacional e internacional, sempre mantendo o leitor bem
                  informado. Mantemos também uma seção de testes e avaliações,
                  onde analisamos os veículos de diversas marcas para auxiliar
                  nosso leitor que está em busca de um novo carro a fazer um bom
                  negócio.
                </p>

                <p>
                  Com o nascimento pela paixão no setor automobilístico, o José
                  Roberto, CEO da empresa decidiu investir e criar o UauMotors
                  dando forma a uma antiga paixão.
                </p>
              </Box>
            </Grid>
            <Grid item xs={3} className="about-awards">
              <Box className="funfactor-card">
                <Box className="icon">
                  <i className="fa fa-car" />
                </Box>
                <h4>
                  <span className="funfactor-text">Veículos</span>
                  <span className="funfactor-data">2355</span>
                </h4>
              </Box>
            </Grid>
            <Grid item xs={3} className="about-awards">
              <Box className="funfactor-card">
                <Box className="icon">
                  <i className="fa fa-newspaper-o" />
                </Box>
                <h4>
                  <span className="funfactor-text">Postagens</span>
                  <span className="funfactor-data">2355</span>
                </h4>
              </Box>
            </Grid>
            <Grid item xs={3} className="about-awards">
              <Box className="funfactor-card">
                <Box className="icon">
                  <i className="fa fa-users" />
                </Box>
                <h4>
                  <span className="funfactor-text">Clientes</span>
                  <span className="funfactor-data">2355</span>
                </h4>
              </Box>
            </Grid>
            <Grid item xs={3} className="about-awards">
              <Box className="funfactor-card">
                <Box className="icon">
                  <i className="fa fa-bar-chart" />
                </Box>
                <h4>
                  <span className="funfactor-text">Acessos mensais</span>
                  <span className="funfactor-data">2355</span>
                </h4>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="about-service">
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} className="title">
                <Box>
                  <h2>
                    POR QUE ESCOLHER NOSSOS SERVIÇOS PARA VENDER OU COMPRAR SEU
                    CARRO
                  </h2>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box className="feature-card">
                  <Box className="icon">
                    <i className="fa fa-car"></i>
                  </Box>
                  <h4>Classificados</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat aliquam illo voluptatem, eaque, quidem dicta fugit
                    libero pariatur hic laborum aliquid repellendus similique.
                  </p>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box className="feature-card">
                  <Box className="icon">
                    <i className="fa fa-car"></i>
                  </Box>
                  <h4>Guia de Serviços</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat aliquam illo voluptatem, eaque, quidem dicta fugit
                    libero pariatur hic laborum aliquid repellendus similique.
                  </p>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box className="feature-card">
                  <Box className="icon">
                    <i className="fa fa-car"></i>
                  </Box>
                  <h4>Notícias</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat aliquam illo voluptatem, eaque, quidem dicta fugit
                    libero pariatur hic laborum aliquid repellendus similique.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
      <Box className="about-testimony">
        <Container>
          <Grid container>
            <Grid item xs={4}>
              <Box className="wrap-image">
                <Box className="review-wrap-image">
                  <img
                    src="https://mironmahmud.com/ghurnek/assets/images/review/02.jpg"
                    alt="review"
                  />
                </Box>
                <Box className="review-wrap-user">
                  <img
                    src="https://mironmahmud.com/ghurnek/assets/images/team/02.jpg"
                    alt="review"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box className="review-wrap-content">
                <p className="review-wrap-quote">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Expedita ut porro beatae itaque accusantium nisi Asperiores
                  reprehenderit
                </p>
                <h3 className="review-wrap-user">tahmina bonny</h3>
                <h5 className="review-wrap-type">seller review</h5>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="about-team">
        <Container>
          <Grid container>
            <Grid container spacing={2}>
              <Grid item xs={12} className="title">
                <Box>
                  <h2>
                    CONHEÇA NOSSO TIME, VEJA QUEM SÃO OS QUE FAZEM A DIFERENÇA
                  </h2>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <div className="team-card">
                  <figure className="team-media">
                    <img
                      src="https://mironmahmud.com/ghurnek/assets/images/team/01.jpg"
                      alt="equipe"
                    />
                    <div className="team-overlay">
                      <a href="#" className="bg-facebook">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" className="bg-twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" className=" bg-linkedin">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </figure>
                  <div className="team-meta">
                    <h4>Fulano de tal</h4>
                    <p>CEO, Funder UauMotors</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="team-card">
                  <figure className="team-media">
                    <img
                      src="https://mironmahmud.com/ghurnek/assets/images/team/02.jpg"
                      alt="equipe"
                    />
                    <div className="team-overlay">
                      <a href="#" className="bg-facebook">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" className="bg-twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" className=" bg-linkedin">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </figure>
                  <div className="team-meta">
                    <h4>Fulano de tal</h4>
                    <p>CEO, Funder UauMotors</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="team-card">
                  <figure className="team-media">
                    <img
                      src="https://mironmahmud.com/ghurnek/assets/images/team/03.jpg"
                      alt="equipe"
                    />
                    <div className="team-overlay">
                      <a href="#" className="bg-facebook">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" className="bg-twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" className=" bg-linkedin">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </figure>
                  <div className="team-meta">
                    <h4>Fulano de tal</h4>
                    <p>CEO, Funder UauMotors</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className="team-card">
                  <figure className="team-media">
                    <img
                      src="https://mironmahmud.com/ghurnek/assets/images/team/04.jpg"
                      alt="equipe"
                    />
                    <div className="team-overlay">
                      <a href="#" className="bg-facebook">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" className="bg-twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" className=" bg-linkedin">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </figure>
                  <div className="team-meta">
                    <h4>Fulano de tal</h4>
                    <p>CEO, Funder UauMotors</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
