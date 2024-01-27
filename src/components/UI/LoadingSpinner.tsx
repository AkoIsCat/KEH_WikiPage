import PulseLoader from 'react-spinners/PulseLoader';

const LoadingSpinner = () => {
  return (
    <div className="w-full h-full flex justify-center items-center	pt-5	">
      <PulseLoader color="#c1c1c1" size={10} speedMultiplier={0.95} />
    </div>
  );
};

export default LoadingSpinner;
