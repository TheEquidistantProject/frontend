import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	placeItems?: 'center' | 'start' | 'end';
	justifyCenter?: boolean | undefined;
	justifyItems?: 'center' | 'between' | 'evenly';
	className?: string | undefined;
}>;

const FlexBox: FC<Props> = ({ children, className, justifyCenter }) => (
	<div
		className={clsx(
			'flex items-center',
			justifyCenter && 'justify-center',
			className
		)}
	>
		{children}
	</div>
);

export default FlexBox;
