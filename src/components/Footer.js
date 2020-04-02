import React from 'react';

import Container from 'components/Container';
const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; {new Date().getFullYear()}, Kamal Vasamsetti. Build Using Gatsby.JS</p>

      </Container>
    </footer>
  );
};

export default Footer;
