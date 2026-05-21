import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} aria-label='Go back'>
      <FaChevronLeft />
    </button>
  );
};

export default BackButton;
