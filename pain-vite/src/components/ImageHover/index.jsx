import React, { useState } from 'react';
import './index.css';

const ImagemHover = ({ imagemPadrao, imagemHover }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="imagem-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={hover ? imagemHover : imagemPadrao}
        alt="Imagem"
        className="imagem"
      />
    </div>
  );
};

export default ImagemHover;
