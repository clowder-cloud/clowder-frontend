import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	disabled?: React.ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
}

export default function Button({
	children,
	type = 'button',
	onClick,
	disabled,
}: Props) {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className="bg-blue-500 text-white
			text-base border-none rounded-xl cursor-pointer h-10 mx-auto my-5 p-2
			block disabled:bg-gray-200"
		>
			{children}
		</button>
	);
}
