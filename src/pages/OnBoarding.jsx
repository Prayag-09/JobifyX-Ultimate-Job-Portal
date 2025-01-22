import { useUser } from '@clerk/clerk-react';
import { BarLoader } from 'react-spinners';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const OnBoarding = () => {
	const { user, isLoaded } = useUser();
	const navigate = useNavigate();

	// Clears the role after each refresh { For testing purpose only }
	// useEffect(() => {
	// 	const clearRole = async () => {
	// 		try {
	// 			await user.update({
	// 				unsafeMetadata: { role: null },
	// 			});
	// 			console.log('Role cleared for testing purposes.');
	// 		} catch (error) {
	// 			console.error('Error clearing the role:', error);
	// 		}
	// 	};
	// 	clearRole();
	// }, [user]);

	const handleRoleSelection = async (role) => {
		await user
			.update({
				unsafeMetadata: { role },
			})
			.then(() => {
				navigate(role === 'recruiter' ? '/postjob' : '/jobs');
			})
			.catch((error) => {
				console.log('Error updating the role : ', error);
			});
	};

	useEffect(() => {
		if (user?.unsafeMetadata?.role) {
			navigate(
				user?.unsafeMetadata?.role === 'recruiter' ? '/postjob' : '/jobs'
			);
		}
	}, [user]);

	if (!isLoaded) {
		return <BarLoader className='mb-4' width={'100%'} color='#36d7b7' />;
	}

	return (
		<div className='flex flex-col items-center justify-center mt-32'>
			<div className='gradient-title font-bold text-5xl sm:text-7xl tracking-tighter'>
				<h2>I am a ...</h2>
			</div>
			<div className='mt-16 grid grid-cols-2 gap-4 w-full md:px-40'>
				<Button
					variant='danger'
					className='h-36 text-2xl'
					onClick={() => handleRoleSelection('candidate')}>
					Candidate
				</Button>
				<Button
					variant='dark'
					className='h-36 text-2xl'
					onClick={() => handleRoleSelection('recruiter')}>
					Recruiter
				</Button>
			</div>
		</div>
	);
};

export default OnBoarding;
