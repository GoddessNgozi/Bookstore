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
      <button className="check-status" type="button" onClick={statusCheck}>CHECK STATUS</button>
      <h1>{status}</h1>
    </div>
  );
};

export default Categories;
