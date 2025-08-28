import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Award, Building, ChevronRight, Search } from 'lucide-react';

// --- TYPE DEFINITIONS ---
// Defines the structure for a single college object
interface College {
  id: number;
  name: string;
  location: string;
  courses: string[];
  // Cutoffs are based on percentile for different categories
  cutoffs: {
    general: number;
    obc: number;
    sc: number;
  };
  logo: string; // URL or path to the college logo
}

// --- MOCK DATA ---
// A sample list of colleges. In a real application, this would come from an API.
const collegeData: College[] = [
  {
    id: 1,
    name: 'College of Engineering, Pune (COEP)',
    location: 'Pune, Maharashtra',
    courses: ['Computer Engineering', 'Mechanical Engineering', 'Electrical Engineering'],
    cutoffs: { general: 98.5, obc: 97.8, sc: 95.2 },
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/College_of_Engineering_Pune_logo.png/220px-College_of_Engineering_Pune_logo.png'
  },
  {
    id: 2,
    name: 'Veermata Jijabai Technological Institute (VJTI)',
    location: 'Mumbai, Maharashtra',
    courses: ['Information Technology', 'Civil Engineering', 'Textile Technology'],
    cutoffs: { general: 99.1, obc: 98.5, sc: 96.0 },
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Vjti_logo.png/220px-Vjti_logo.png'
  },
  {
    id: 3,
    name: 'Vishwakarma Institute of Technology (VIT)',
    location: 'Pune, Maharashtra',
    courses: ['Electronics & Telecommunication', 'Computer Engineering', 'Instrumentation'],
    cutoffs: { general: 97.0, obc: 96.2, sc: 93.1 },
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/VIT_Pune_Logo.png'
  },
  {
    id: 4,
    name: 'Sardar Patel Institute of Technology (SPIT)',
    location: 'Mumbai, Maharashtra',
    courses: ['Computer Engineering', 'EXTC', 'Information Technology'],
    cutoffs: { general: 98.2, obc: 97.5, sc: 94.5 },
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Sardar_Patel_Institute_of_Technology_logo.png/220px-Sardar_Patel_Institute_of_Technology_logo.png'
  },
  {
    id: 5,
    name: 'Walchand College of Engineering, Sangli',
    location: 'Sangli, Maharashtra',
    courses: ['Civil Engineering', 'Mechanical Engineering', 'IT'],
    cutoffs: { general: 96.5, obc: 95.8, sc: 92.0 },
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Walchand_College_of_Engineering_logo.png/220px-Walchand_College_of_Engineering_logo.png'
  },
];

// --- MAIN COMPONENT ---
const CollegePredictor = () => {
  // --- STATE MANAGEMENT ---
  const [exam, setExam] = useState<'MHT-CET' | 'JEE-Main'>('MHT-CET');
  const [percentile, setPercentile] = useState<number>(90);
  const [category, setCategory] = useState<'general' | 'obc' | 'sc'>('general');
  const [predictedColleges, setPredictedColleges] = useState<College[]>([]);
  const [hasPredicted, setHasPredicted] = useState(false);

  // --- LOGIC ---
  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter logic: finds colleges where the user's percentile is >= the cutoff for their category
    const predictions = collegeData.filter(college => {
      const cutoff = college.cutoffs[category];
      return percentile >= cutoff;
    });

    // Sort by highest cutoff first
    predictions.sort((a, b) => b.cutoffs[category] - a.cutoffs[category]);
    
    setPredictedColleges(predictions);
    setHasPredicted(true);
  };

  // --- UI RENDERING ---
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <Award className="mx-auto h-12 w-12 text-blue-600" />
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
            Engineering College Predictor 2025
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-500">
            Enter your score to discover which colleges in Maharashtra you can get into.
          </p>
        </div>

        {/* Predictor Form Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-10">
          <form onSubmit={handlePredict} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            
            {/* Exam Selection */}
            <div className="w-full">
              <label htmlFor="exam" className="block text-sm font-medium text-gray-700 mb-1">
                Select Exam
              </label>
              <select
                id="exam"
                value={exam}
                onChange={(e) => setExam(e.target.value as 'MHT-CET' | 'JEE-Main')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              >
                <option>MHT-CET</option>
                <option>JEE-Main</option>
              </select>
            </div>
            
            {/* Category Selection */}
            <div className="w-full">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Select Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value as 'general' | 'obc' | 'sc')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="general">General / Open</option>
                <option value="obc">OBC</option>
                <option value="sc">SC / ST</option>
              </select>
            </div>
            
            {/* Percentile Slider */}
            <div className="md:col-span-2">
              <label htmlFor="percentile" className="block text-sm font-medium text-gray-700">
                Your Percentile: <span className="font-bold text-blue-600 text-lg">{percentile.toFixed(2)}</span>
              </label>
              <input
                type="range"
                id="percentile"
                min="50"
                max="100"
                step="0.01"
                value={percentile}
                onChange={(e) => setPercentile(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 mt-2"
              />
            </div>
            
            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Search size={20} />
                Predict My Colleges
              </button>
            </div>
          </form>
        </div>

        {/* Results Section */}
        {hasPredicted && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Building size={24} />
                Predicted Colleges For You
            </h2>
            <AnimatePresence>
              {predictedColleges.length > 0 ? (
                <ul className="space-y-4">
                  {predictedColleges.map((college, index) => (
                    <motion.li
                      key={college.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <img src={college.logo} alt={`${college.name} logo`} className="w-16 h-16 object-contain flex-shrink-0" />
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg text-gray-900">{college.name}</h3>
                          <p className="text-sm text-gray-600">{college.location}</p>
                          <div className="mt-2 text-xs font-medium">
                            <span className="text-gray-500">Your Category Cutoff: </span>
                            <span className="text-green-600 font-bold">{college.cutoffs[category]}%</span>
                          </div>
                        </div>
                        <ChevronRight className="text-gray-400" />
                      </div>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center bg-white p-8 rounded-lg shadow-md"
                >
                  <Book size={48} className="mx-auto text-gray-400" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">No Colleges Found</h3>
                  <p className="mt-1 text-gray-500">
                    Try adjusting your percentile or category. Don't be discouraged, many factors influence admissions!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

      </div>
    </div>
  );
};

export default CollegePredictor;