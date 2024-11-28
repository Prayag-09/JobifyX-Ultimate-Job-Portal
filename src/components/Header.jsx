import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Button } from './ui/button';


const Header = () => {
	return (
		<div>
			<nav className='py-4 flex justify-between items-center '>
				<Link>
					<img src='/Logo.jpg' className='h-12' />
				</Link>
				<SignedOut>
					<Button variant='outline'>Login</Button>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</nav>
		</div>
	);
};

export default Header;
