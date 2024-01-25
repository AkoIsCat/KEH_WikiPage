import styled from 'styled-components';
import PulseLoader from 'react-spinners/PulseLoader';

const LoadingSpinner = () => {
  return (
    <Wrap>
      <PulseLoader color="#c1c1c1" size={10} speedMultiplier={0.95} />
    </Wrap>
  );
};

export default LoadingSpinner;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
