/* eslint-disable react/prop-types */
import { useUser } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	const { isSignedIn, isLoaded } = useUser();
	const { pathname } = useLocation();

	if (!isSignedIn && isLoaded && isSignedIn !== undefined) {
		return <Navigate to='/?sign-in=true' />;
	}
	return children;
};

export default ProtectedRoute;
