
const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center text-gray-800">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">Page Not Found</p>
        <p className="text-gray-600 mb-6">Sorry, the page you're looking for doesn't exist or has been moved.</p>
        
        <div>
          {/* <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all mr-4"
          >
            Go Back
          </button> */}
          {/* <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all"
          >
            Go to Home
          </button> */}
        </div>
      </div>
    );
};

export default Error;