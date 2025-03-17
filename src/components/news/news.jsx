import './news.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const News = () => {
  return (
    <Container fluid
      className="noticias"
      id="noticias"
      style={{
        backgroundImage: 'url(./src/background-images/background_pattern.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
      }}
    >
      <Container className="conteriner-card-noticioas">
        <Container className="header-cards-container">
          <h2>Notícias em tempo real</h2>
          <h3>
            Temos notícias sobre o Agro no Brasil e no Mundo atualizadas em tempo real
          </h3>
          <p>
            Fique por dentro de tudo que acontece no mundo do Agronegócio no Brasil e no Mundo com nossas
            notícias em tempo real e notificações.
          </p>
        </Container>
        <Row className="cards-container">
          <Col className="card-noticia">
            <div className="img-noticia">
              <img
                className="img-fluid"
                src="https://elcomercio.pe/resizer/VUAEI-3DDp4kF4HIL_rTYZ_K6lA=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/7TQPOIJ7UJF2LJEU2RSY7DYKN4.jpg"
                alt="Imagem do El Ninho"
              />
            </div>
            <div className="header-card-noticia">
              <div className="titulo-noticia">
                <h4>Impactos do Fenômeno El Niño em 2024</h4>
              </div>
            </div>
            <p>
              O El Niño continua afetando as safras de 2024, com secas no Norte e temperaturas elevadas no
              Centro-Oeste. Apesar das adversidades climáticas, o Brasil se destaca no mercado internacional como
              líder em soluções sustentáveis, incluindo bioinsumos e biocombustíveis, com potencial para fortalecer o
              mercado de carbono.
            </p>
            <div>
              <a
                href="https://veja.abril.com.br/ciencia/el-nino-deve-durar-pelo-menos-ate-abril-de-2024-diz-agencia-da-onu"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ler mais
              </a>
            </div>
          </Col>
          <Col className="card-noticia">
            <div className="img-noticia">
              <img
                className="img-fluid"
                src="https://portal.agro2business.com/wp-content/uploads/2023/01/04-racao-para-gado-1.jpeg"
                alt="Gado se alimentando de ração"
              />
            </div>
            <div className="header-card-noticia">
              <div className="titulo-noticia">
                <h4>Estimativa do setor de rações é de crescimento de cerca de 2,7% até o final de 2024</h4>
              </div>
            </div>
            <p>
              O Sindicato Nacional da Indústria de Alimentação Animal (Sindirações) divulgou, por meio de
              entrevista coletiva na tarde desta quarta-feira (4), uma projeção do crescimento do setor para 2027, se
              baseando nos dados consolidados entre janeiro e setembro deste ano.
            </p>
            <div>
              <a
                href="https://www.noticiasagricolas.com.br/noticias/agronegocio/389970-estimativa-do-setor-de-racoes-e-de-crescimento-de-cerca-de-2-7-ate-o-final-de-2024.html#:~:text=%E2%80%9CO%20ritmo%20de%20crescimento%20durante,X%202%C2%BA%20trimestre%20de%202024)."
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ler mais
              </a>
            </div>
          </Col>
          <Col className="card-noticia">
            <div className="img-noticia">
              <img
                className="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpD0aRCjYvanvpU6KqaU2C0_7tXJUK4MrBA&s"
                alt="Plantação de milho"
              />
            </div>
            <div className="header-card-noticia">
              <div className="titulo-noticia">
                <h4>Cotações do milho revertem movimentos na B3 e contabilizam ganhos de até 1,6% nesta quinta-feira</h4>
              </div>
            </div>
            <p>
              A quinta-feira (05) chegou ao final com os preços futuros do milho contabilizando movimentações
              positivas na Bolsa Brasileira (B3). As principais cotações do cereal flutuaram na faixa entre R$ 68,00
              e R$ 72,35, subindo até 1,6%.
            </p>
            <div>
              <a
                href="https://www.noticiasagricolas.com.br/noticias/milho/390074-cotacoes-do-milho-revertem-movimentos-na-b-3-e-contabilizam-ganhos-de-ate-1-6-nesta-quinta-feira.html"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ler mais
              </a>
            </div>
          </Col>
          <Col className="card-noticia">
            <div className="img-noticia">
              <img
                className="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AzjidDBH1--n9fZQgxqDjp2w6A9RBvbj6w&s"
                alt="Plantação de Uva"
              />
            </div>
            <div className="header-card-noticia">
              <div className="titulo-noticia">
                <h4>Mercado da China está aberto para a uva do Brasil, mas primeiros embarques devem ficar para 2025</h4>
              </div>
            </div>
            <p>
              Na última quarta-feira (20) os presidentes do Brasil e da China se encontraram como parte das agendas do
              G20 para discutir uma série de acordos bilaterais entre os dois países. Entre as tratativas, estava a
              abertura do mercado chinês para as uvas brasileiras, o que efetivamente foi confirmado durante a reunião.
            </p>
            <div>
              <a
                href="https://www.noticiasagricolas.com.br/noticias/hortifruti/389268-mercado-da-china-esta-aberto-para-a-uva-do-brasil-mas-primeiros-embarques-devem-ficar-para-2025.html#:~:text=SIGA%2DNOS-,Mercado%20da%20China%20est%C3%A1%20aberto%20para%20a%20uva%20do%20Brasil,embarques%20devem%20ficar%20para%202025&text=Na%20%C3%BAltima%20quarta%2Dfeira%20(20,bilaterais%20entre%20os%20dois%20pa%C3%ADses."
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ler mais
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export { News };
