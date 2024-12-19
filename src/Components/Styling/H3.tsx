import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function H3({ children }: Props) {
	return (
		<h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-5">
			{children}
		</h3>
	);
}
