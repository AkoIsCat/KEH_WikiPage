import { useNavigate } from 'react-router-dom';

import { ListItemProps } from 'types/types';

const ListItem = ({ id, title, contents, allData }: ListItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      id={`${id}`}
      onClick={() =>
        navigate(`/${id}`, { state: { title, contents, id, allData } })
      }
      className="h-itemHeight m-0 text-xl flex items-center p-itemPadding	rounded-myRadius border border-solid border-borderColor cursor-pointer"
    >
      {title}
    </div>
  );
};

export default ListItem;
