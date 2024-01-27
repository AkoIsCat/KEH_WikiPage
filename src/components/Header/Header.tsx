import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const onClickTitle = () => {
    navigate('/');
  };

  return (
    <HeaderStyle>
      <Title onClick={onClickTitle}>WiKi Page</Title>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  height: 12vh;
  display: flex;
`;

const Title = styled.div`
  padding: 20px;
  font-size: 50px;
  color: black;
  cursor: pointer;
`;
