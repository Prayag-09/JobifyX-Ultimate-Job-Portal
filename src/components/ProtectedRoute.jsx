/* eslint-disable react/prop-types */
import { useUser } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	const { isSignedIn, user, isLoaded } = useUser();
	const { pathname } = useLocation();

	if (!isSignedIn && isLoaded && isSignedIn !== undefined) {
		return <Navigate to='/?sign-in=true' />;
	}

	// Check onBoarding Status
	if (
		user !== undefined &&
		!user?.unsafeMetadata.role &&
		pathname !== '/onboarding'
	) {
		return <Navigate to={'/onboarding'} />;
	}
	return children;
};

export default ProtectedRoute;
