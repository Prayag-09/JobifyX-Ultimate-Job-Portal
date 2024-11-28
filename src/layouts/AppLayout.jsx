import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<div className='grid-background'></div>
			<main className='flex-grow container mx-auto'>
				<Header />
				<Outlet />
			</main>
			<footer className='text-center p-10 text-xl text-white mt-10'>
				Made by Prayag
			</footer>
		</div>
	);
};

export default AppLayout;
