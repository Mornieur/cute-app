'use client';

import { CSSProperties } from 'react';

const ConfirmModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const modalStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    gap: '1rem',
    backgroundColor: '#728CB0',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 9999,
    margin: 'auto',
    width: '100%',
  };

  return (
    <div style={modalStyle}>
      <p className="text-lg">You made a great choice!</p>
      <button
        onClick={onClose}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  );
};

export default ConfirmModal;
