import { Link, useSearchParams } from 'react-router-dom';
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react';

const Header = () => {
	const [showSignIn, setShowSignIn] = useState(false);
	const [search, setSearch] = useSearchParams();

	// Show sign-in modal if "sign-in" param is present
	useEffect(() => {
		if (search.get('sign-in')) {
			setShowSignIn(true);
		}
	}, [search]);

	function handleOverlay(e) {
		if (e.target === e.currentTarget) {
			setShowSignIn(false);
			search.delete('sign-in');
			setSearch(search);
		}
	}

	return (
		<div>
			<nav className='py-4 flex justify-between items-center'>
				<Link to='/'>
					<img src='/Logo.jpg' alt='Logo' className='h-12' />
				</Link>
				<div className='flex gap-8'>
					<SignedOut>
						<Button variant='outline' onClick={() => setShowSignIn(true)}>
							Login
						</Button>
					</SignedOut>
					<SignedIn>
						{/* Show "Post a Job" only for recruiters */}
						<Link to='/postjob'>
							<Button variant='secondary'>
								<PenBox size={20} className='mr-2' />
								Post a Job
							</Button>
						</Link>
						<UserButton
							appearance={{
								elements: {
									avatarBox: 'w-10 h-10',
								},
							}}>
								<UserButton.MenuItems>
									<UserButton.Link
									label='My Jobs'
									labelIcon={<BriefcaseBusiness size={15} />}
									href='/myjobs'
									>	
									</UserButton.Link>

									<UserButton.Link
									label='Saved Jobs'
									labelIcon={<Heart size={15} />}
									href='/savedjobs'
									>	
									</UserButton.Link>
								</UserButton.MenuItems>

							</UserButton>
					</SignedIn>
				</div>
			</nav>

			{showSignIn && (
				<div
					className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-70'
					onClick={handleOverlay}>
					<SignIn
						signUpFallbackRedirectUrl='/onboarding'
						fallbackRedirectUrl='/onboarding'
					/>
				</div>
			)}
		</div>
	);
};

export default Header;
