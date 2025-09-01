import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 shadow-lg relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Latest Updates:</span>
            <span className="text-red-100">
              New expert session with Barclays coming soon! Register now for exclusive insights.
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-red-100 transition-colors duration-200 p-1"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default NotificationBar;
