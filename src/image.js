import React from 'react';

const Image = ({ url, description }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <img src={url} alt={description} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{description}</p>
    </div>
  );
};

export default Image;
