import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Search, Filter, AlertTriangle, AlertCircle, MapPin, Calendar, Star, Building, TrendingUp } from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface College {
  id: number;
  name: string;
  location: string;
  branch: string;
  cutoff: number;
  category: string;
  examType: string;
  capRound: string;
}

// --- MOCK DATA ---
const collegeData: College[] = [
  {
    id: 1,
    name: 'College of Engineering, Pune (COEP)',
    location: 'Pune',
    branch: 'Computer Engineering',
    cutoff: 98.5,
    category: 'General',
    examType: 'MHT-CET',
    capRound: 'CAP_01'
  },
  {
    id: 2,
    name: 'Veermata Jijabai Technological Institute (VJTI)',
    location: 'Mumbai',
    branch: 'Information Technology',
    cutoff: 99.1,
    category: 'General',
    examType: 'MHT-CET',
    capRound: 'CAP_01'
  },
  {
    id: 3,
    name: 'Vishwakarma Institute of Technology (VIT)',
    location: 'Pune',
    branch: 'Computer Engineering',
    cutoff: 97.0,
    category: 'General',
    examType: 'MHT-CET',
    capRound: 'CAP_01'
  },
  {
    id: 4,
    name: 'Sardar Patel Institute of Technology (SPIT)',
    location: 'Mumbai',
    branch: 'Computer Engineering',
    cutoff: 98.2,
    category: 'General',
    examType: 'MHT-CET',
    capRound: 'CAP_01'
  },
  {
    id: 5,
    name: 'Walchand College of Engineering',
    location: 'Sangli',
    branch: 'Mechanical Engineering',
    cutoff: 96.5,
    category: 'General',
    examType: 'MHT-CET',
    capRound: 'CAP_01'
  },
];

// --- MAIN COMPONENT ---
const CollegePredictorPage = () => {
  // --- STATE MANAGEMENT ---
  const [examType, setExamType] = useState<'MHT-CET' | 'JEE'>('MHT-CET');
  const [capRound, setCapRound] = useState<'CAP_01' | 'CAP_02' | 'CAP_03'>('CAP_01');
  const [percentile, setPercentile] = useState<string>('');
  const [casteCategory, setCasteCategory] = useState<string>('');
  const [defenceCategory, setDefenceCategory] = useState<boolean>(false);
  const [pwdCategory, setPwdCategory] = useState<boolean>(false);
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [predictedColleges, setPredictedColleges] = useState<College[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  // --- HELPER FUNCTIONS ---
  const addBranch = () => {
    if (selectedBranch && !selectedBranches.includes(selectedBranch)) {
      setSelectedBranches([...selectedBranches, selectedBranch]);
      setSelectedBranch('');
    }
  };

  const removeBranch = (branch: string) => {
    setSelectedBranches(selectedBranches.filter(b => b !== branch));
  };

  const addLocation = () => {
    if (selectedLocation && !selectedLocations.includes(selectedLocation)) {
      setSelectedLocations([...selectedLocations, selectedLocation]);
      setSelectedLocation('');
    }
  };

  const removeLocation = (location: string) => {
    setSelectedLocations(selectedLocations.filter(l => l !== location));
  };

  const handleFindColleges = () => {
    if (!percentile) return;

    const percentileNum = parseFloat(percentile);
    if (isNaN(percentileNum)) return;

    // Filter colleges based on criteria
    let filtered = collegeData.filter(college => {
      // Basic percentile check
      if (college.cutoff > percentileNum) return false;
      
      // Exam type check
      if (college.examType !== examType) return false;
      
      // CAP round check
      if (college.capRound !== capRound) return false;
      
      // Branch filter
      if (selectedBranches.length > 0 && !selectedBranches.includes(college.branch)) return false;
      
      // Location filter
      if (selectedLocations.length > 0 && !selectedLocations.includes(college.location)) return false;
      
      return true;
    });

    setPredictedColleges(filtered);
    setHasSearched(true);
  };

  // --- UI RENDERING ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">College Predictor 2025</h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Find your perfect engineering college based on your percentile and preferences
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 pb-12">
          
          {/* Left Column - Filter Criteria */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Filter className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Filter Criteria</h2>
              </div>

              {/* Exam Type */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-4">Select Exam Type:</label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setExamType('MHT-CET')}
                    className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      examType === 'MHT-CET'
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    MHT-CET
                  </button>
                  <button
                    type="button"
                    onClick={() => setExamType('JEE')}
                    className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      examType === 'JEE'
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    JEE
                  </button>
                </div>
              </div>

              {/* CAP Round */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-4">CAP Round:</label>
                <div className="grid grid-cols-3 gap-2">
                  {['CAP_01', 'CAP_02', 'CAP_03'].map((round) => (
                    <button
                      key={round}
                      type="button"
                      onClick={() => setCapRound(round as any)}
                      className={`py-3 px-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                        capRound === round
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                      }`}
                    >
                      {round}
                    </button>
                  ))}
                </div>
              </div>

              {/* Percentile */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Your Percentile:</label>
                <div className="relative">
                  <input
                    type="text"
                    value={percentile}
                    onChange={(e) => setPercentile(e.target.value)}
                    placeholder="Enter percentile (e.g., 85.5)"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                  </div>
                </div>
              </div>

              {/* Caste Category */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Select Caste Category:</label>
                <select
                  value={casteCategory}
                  onChange={(e) => setCasteCategory(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg"
                >
                  <option value="">-- Select Caste Category --</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="EWS">EWS</option>
                </select>
              </div>

              {/* Special Categories */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-4">Special Categories:</label>
                <div className="space-y-3">
                  <label className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={defenceCategory}
                      onChange={(e) => setDefenceCategory(e.target.checked)}
                      className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <span className="ml-3 text-gray-700 font-medium">Defence Category</span>
                  </label>
                  <label className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={pwdCategory}
                      onChange={(e) => setPwdCategory(e.target.checked)}
                      className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <span className="ml-3 text-gray-700 font-medium">Person with Disability (PWD)</span>
                  </label>
                </div>
              </div>

              {/* Select Branches */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Select Branches:</label>
                <div className="flex gap-2 mb-3">
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="flex-1 p-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                  >
                    <option value="">Select Branch</option>
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
                  </select>
                  <button
                    type="button"
                    onClick={addBranch}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg"
                  >
                    Add
                  </button>
                </div>
                {selectedBranches.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedBranches.map((branch) => (
                      <span
                        key={branch}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-orange-100 text-orange-800 text-sm rounded-xl font-medium"
                      >
                        {branch}
                        <button
                          onClick={() => removeBranch(branch)}
                          className="text-orange-600 hover:text-orange-800 font-bold"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Select Locations */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Select Locations:</label>
                <div className="flex gap-2 mb-3">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="flex-1 p-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300"
                  >
                    <option value="">Select Location</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Aurangabad">Aurangabad</option>
                    <option value="Sangli">Sangli</option>
                    <option value="Kolhapur">Kolhapur</option>
                  </select>
                  <button
                    type="button"
                    onClick={addLocation}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg"
                  >
                    Add
                  </button>
                </div>
                {selectedLocations.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedLocations.map((location) => (
                      <span
                        key={location}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-orange-100 text-orange-800 text-sm rounded-xl font-medium"
                      >
                        {location}
                        <button
                          onClick={() => removeLocation(location)}
                          className="text-orange-600 hover:text-orange-800 font-bold"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Find Colleges Button */}
              <button
                onClick={handleFindColleges}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <Search className="w-5 h-5" />
                Find Colleges
              </button>
            </motion.div>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100"
            >
              {!hasSearched ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Find Your College?</h3>
                  <p className="text-gray-600 text-lg max-w-md mx-auto">
                    Fill in your details and preferences to discover colleges that match your profile.
                  </p>
                </div>
              ) : predictedColleges.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No colleges found</h3>
                  <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                    No colleges match your criteria. Try adjusting the filters or percentile.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Found {predictedColleges.length} colleges</h3>
                  </div>
                  <div className="space-y-6">
                    {predictedColleges.map((college, index) => (
                      <motion.div 
                        key={college.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-2 border-orange-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h4>
                            <div className="flex items-center gap-4 mb-3">
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="w-4 h-4 text-orange-500" />
                                <span className="font-medium">{college.location}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Calendar className="w-4 h-4 text-orange-500" />
                                <span className="font-medium">{college.branch}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full">
                                <Star className="w-4 h-4 text-orange-600" />
                                <span className="text-sm font-semibold text-orange-700">Cutoff: {college.cutoff}%</span>
                              </div>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                              <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Informational Messages */}
              <div className="mt-8 space-y-4">
                {/* Yellow Alert */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-semibold mb-1">Important Note:</p>
                      <p>If you are not getting any results, it can mean that there is no seat for your caste or gender in any college for the given percentile.</p>
                    </div>
                  </div>
                </div>

                {/* Red Warning */}
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div className="text-sm text-red-800">
                      <p className="font-semibold mb-1">Disclaimer:</p>
                      <p>This tool uses official data provided by MHT-CET, but our model may have limitations. Do not rely solely on these results for your decisions. Always verify with official sources before making any final choices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegePredictorPage;