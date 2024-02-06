'use client';

import ConfirmModal from '@/components/confirmModal';
import Image from 'next/image';
import { CSSProperties, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const handleYesClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const buttonContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
    fontFamily: 'cursive',
  };

  const [noButtonStyle, setNoButtonStyle] = useState<CSSProperties>({
    position: 'absolute',
    height: '40px',
    width: '80%',
    maxWidth: '200px',
    backgroundColor: '#E23D80',
    border: '2px solid #ffcccb',
    borderRadius: '1rem',
    color: '#fff',
    marginTop: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'cursive',
  });

  const runAway = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxX = windowWidth - 60;
    const maxY = windowHeight - 40;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    setNoButtonStyle({
      ...noButtonStyle,
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
  };

  return (
    <div className=" overflow-hidden flex flex-col items-center justify-center gap-8 m-auto bg-pink-100 w-screen h-screen rounded-20 text-center pt-10 font-sans shadow-md">
      <h1 className="text-3xl font-bold max-w-64 w-full bg-pink-200 p-2">
        Hey, my love!
      </h1>
      <Image
        src="https://gifman.net/wp-content/uploads/2019/06/ursinho-fofo-apaixonado.gif"
        alt="ursinho-fofo"
        width={300}
        height={300}
        className="rounded-full"
      />
      <h2 className="text-lg font-semibold mt-4 bg-pink-200 p-2">
        Do you wanna marry me?
      </h2>

      <div style={buttonContainerStyle}>
        <button
          id="yes"
          className="gap-2 h-10 w-40 max-w-50  bg-pink-600 p-2 space-x-1 border-2 border-pink-200 rounded-full text-white mt-2.5 shadow-md flex items-center justify-center font-cursive transition-colors duration-300 "
          onClick={handleYesClick}
        >
          Yes! <FaHeart />
        </button>
        <button onMouseOver={runAway} id="no" style={noButtonStyle}>
          No! 😟
        </button>
      </div>
      {showModal && <ConfirmModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Home;
