import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>
      <Title>WIKI Page</Title>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  height: 12vh;
  display: flex;
`;

const Title = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 50px;
  color: black;
`;
