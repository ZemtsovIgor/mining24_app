import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Title,
  MainContent,
} from '../../elements';
import { HomeTitles } from './Home.Styles';

const Home: React.FC = () => {

  return (
    <MainContent className='content-main home-page'>
      <Container>
        <HomeTitles className="home-titles">
          <Title className="home-title">
            DASHBOARD
          </Title>
        </HomeTitles>
      </Container>
    </MainContent>
  );
};

export default connect()(Home);
