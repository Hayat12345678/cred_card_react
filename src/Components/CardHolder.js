import React from 'react';

import '../credCard.css';

export default function CardHolder({ person }) {
  return <span className="cardHolder">{person}</span>;
}
