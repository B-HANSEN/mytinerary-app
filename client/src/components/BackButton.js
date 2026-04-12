import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} aria-label='Go back'>
      <i className='material-icons'>arrow_back_ios</i>
    </button>
  );
};

export default BackButton;
