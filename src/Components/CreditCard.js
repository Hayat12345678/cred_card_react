import React from 'react';

import Bank from './Bank';
import CardNumber from './CardNumber';
import CardSecurity from './CardSecurity';
import CardExpiration from './CardExpiration';
import CardHolder from './CardHolder';

import '../credCard.css';

export default function CreditCard({ cardInfo }) {
	return (
		<main className="creditCard">
			<Bank name={cardInfo.bank} />
			<CardNumber number={cardInfo.number} />
			<CardSecurity security={cardInfo.security} />
			<CardExpiration expirationDate={cardInfo.expirationDate} />
			<CardHolder person={cardInfo.cardHolder} />
		</main>
	);
}
