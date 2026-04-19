import { FaArrowUp } from 'react-icons/fa';

function ScrollUpButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label='Scroll to top'
      style={{
        position: 'fixed',
        bottom: '60px',
        right: '20px',
        background: '#3f51b5',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollUpButton;
