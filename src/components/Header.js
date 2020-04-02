import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Covid-19 Live Stats</p>
        <ul>
          <li>
            <Link to="/">Live Stats</Link>
          </li>
          <li>
            <Link to="/page-2/">Precautions</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
