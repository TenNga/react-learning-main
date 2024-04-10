'use client';
import './style.css';

function ErrorBoundary({error}: {error:Error}) {
    //you also have option to reset, you can use reset from props {error,reset} and make page as a client component
    return(
        <h1 className="text-4xl text-red-600">{error.message}</h1>
    )
};

export default ErrorBoundary;