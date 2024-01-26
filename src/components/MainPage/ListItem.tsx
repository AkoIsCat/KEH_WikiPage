import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ListItemProps } from 'types/types';

const ListItem = ({ id, title, contents }: ListItemProps) => {
  const navigate = useNavigate();

  return (
    <Item
      id={`${id}`}
      onClick={() => navigate(`/${id}`, { state: { title, contents, id } })}
    >
      {title}
    </Item>
  );
};

export default ListItem;

const Item = styled.div`
  height: 50px;
  margin: 0px 0;
  display: flex;
  font-size: 20px;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cdd2ed;
  cursor: pointer;
`;
