export default function Loading() {
    return (
        // <div className="h-screen flex items-center justify-center">
            <button type="button" className="bg-indigo-500" disabled>
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            </svg>
            Loading...
            </button>
        // </div>  
    );
  }