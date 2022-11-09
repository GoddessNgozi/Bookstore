import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  const statusCheck = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={statusCheck}>Check status</button>
      <span>{status}</span>
    </div>
  );
};

export default Categories;
