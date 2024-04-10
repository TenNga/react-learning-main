'use client';
import './style.css';

function ErrorBoundary({error}: {error:Error}) {
    return(
        <h1 className="text-4xl font-red text-gray-900">{error.message}</h1>
    )
};

export default ErrorBoundary;