import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';

import './App.css';

import AppLayout from './layouts/AppLayout';
import LandingPage from './pages/LandingPage';
import JobPage from './pages/JobPage';
import JobListing from './pages/JobListing';
import PostJobs from './pages/postJobs';
import SavedJobs from './pages/savedJobs';
import MyJobs from './pages/MyJobs';
import ProtectedRoute from './components/ProtectedRoute';
import OnBoarding from './pages/OnBoarding';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <LandingPage />,
			},
			{
				path: '/jobs',
				element: (
					<ProtectedRoute>
						<JobListing />
					</ProtectedRoute>
				),
			},
			{
				path: '/job/:id',
				element: (
					<ProtectedRoute>
						<JobPage />
					</ProtectedRoute>
				),
			},
			{
				path: '/postjob',
				element: (
					<ProtectedRoute>
						<PostJobs />
					</ProtectedRoute>
				),
			},
			{
				path: '/savedjobs',
				element: (
					<ProtectedRoute>
						<SavedJobs />
					</ProtectedRoute>
				),
			},
			{
				path: '/myjobs',
				element: (
					<ProtectedRoute>
						<MyJobs />
					</ProtectedRoute>
				),
			},
			{
				path: '/onboarding',
				element: (
					<ProtectedRoute>
						<OnBoarding />
					</ProtectedRoute>
				),
			},
		],
	},
]);

const App = () => {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

export default App;
