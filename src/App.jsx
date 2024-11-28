import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"
import './App.css'
import AppLayout from './layouts/AppLayout';
import LandingPage from './pages/LandingPage';
import JobPage from './pages/JobPage';
import JobListing from './pages/JobListing';
import PostJobs from './pages/postJobs';
import SavedJobs from './pages/savedJobs';



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
				element: <JobListing />,
			},
			{
				path: '/job/:id',
				element: <JobPage />,
			},
			{
				path: '/postjob',
				element: <PostJobs />,
			},
			{
				path: '/saved',
				element: <SavedJobs />,
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
