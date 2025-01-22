/* eslint-disable react/prop-types */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary:
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
				blue: 'bg-blue-500 hover:bg-blue-600',

				// New Variants
				success: 'bg-green-500 text-white hover:bg-green-600',
				warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
				danger: 'bg-red-500 text-white hover:bg-red-600',
				info: 'bg-cyan-500 text-white hover:bg-cyan-600',
				light: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
				dark: 'bg-gray-900 text-white hover:bg-gray-800',
				gradient:
					'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600',
				subtle: 'bg-gray-50 text-gray-700 hover:bg-gray-100',
				shadow: 'bg-primary text-primary-foreground shadow-lg hover:shadow-md',
				neon: 'bg-black text-green-400 hover:text-green-300 border border-green-400',
				glass: 'bg-white/30 backdrop-blur-sm text-gray-900 hover:bg-white/50',
				vibrant: 'bg-orange-500 text-white hover:bg-orange-600',
				soft: 'bg-blue-50 text-blue-800 hover:bg-blue-100',
				tertiary: 'bg-teal-500 text-white hover:bg-teal-600',
			},

			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
				xl: 'h-14 sm:h-16 rounded-md px-14 text-lg sm:text-xl font-bold',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

const Button = React.forwardRef(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
