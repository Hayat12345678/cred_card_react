import React, { Fragment } from 'react';

import '../credCard.css';

function CardNumber({ number }) {
	let splitNumber = '';
	if (number.length !== 16) {
		console.log(
			`Invalid card number. Expected 16 digits, found ${number.length}`
		);
		
	} else if (!number.includes(' ')) {
		splitNumber = number.match(/.{1,4}/g);
		
	} else {
		splitNumber = number.split(' ');
	}

	return (
		<Fragment>
			{splitNumber.length === 4 && (
				<ol className="cardNumber">
					<li className="numberSetOne">{splitNumber[0]}</li>
					<li className="numberSetTwo">{splitNumber[1]}</li>
					<li className="numberSetThree">{splitNumber[2]}</li>
					<li className="numberSetFour">{splitNumber[3]}</li>
				</ol>
			)}
		</Fragment>
	);
}

export default CardNumber;
