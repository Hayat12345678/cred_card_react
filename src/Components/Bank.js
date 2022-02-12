import React from 'react';

import '../credCard.css';

export default function Bank({ name }) {
  return (
      <strong className="bankName">{name}</strong>
  );
}
