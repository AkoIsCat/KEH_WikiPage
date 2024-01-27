import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const onClickTitle = () => {
    navigate('/');
  };

  return (
    <header className="h-headerHeight flex">
      <div
        onClick={onClickTitle}
        className="p-5 text-title text-black	cursor-pointer	"
      >
        WiKi Page
      </div>
    </header>
  );
};

export default Header;
