import React from 'react';
import { Download, Lock, FileText, Star, Users } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'College Rankings' | 'Branch Analysis' | 'Career Guidance' | 'Placement Data';
  isPremium: boolean;
  price?: number;
  downloads: number;
  rating: number;
  previewImage: string;
  lastUpdated: string;
}

const ResourcesPage = () => {
  const { user } = useAuth();

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Top 15 ROI Engineering Colleges in Maharashtra 2024',
      description: 'Comprehensive analysis of Return on Investment for engineering colleges including placement data, fee structure, and career outcomes.',
      category: 'College Rankings',
      isPremium: true,
      price: 149,
      downloads: 1248,
      rating: 4.8,
      previewImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400',
      lastUpdated: '2024-01-15'
    },
    {
      id: '2',
      title: 'Branch-wise College Rankings 2024',
      description: 'Detailed rankings of Maharashtra engineering colleges organized by branch - Computer Science, IT, Electronics, Mechanical, and more.',
      category: 'Branch Analysis',
      isPremium: true,
      price: 99,
      downloads: 892,
      rating: 4.7,
      previewImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=400',
      lastUpdated: '2024-01-20'
    },
    {
      id: '3',
      title: 'Complete Guide to Engineering Entrance Exams',
      description: 'Everything you need to know about MHT-CET, JEE Main, and other entrance exams including preparation strategies and cutoff trends.',
      category: 'Career Guidance',
      isPremium: false,
      downloads: 2156,
      rating: 4.9,
      previewImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=400',
      lastUpdated: '2024-01-25'
    },
    {
      id: '4',
      title: 'Placement Statistics Report 2023-24',
      description: 'Comprehensive placement data for top engineering colleges including average packages, top recruiters, and hiring trends.',
      category: 'Placement Data',
      isPremium: true,
      price: 199,
      downloads: 756,
      rating: 4.6,
      previewImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=400',
      lastUpdated: '2024-01-30'
    },
    {
      id: '5',
      title: 'Career Path Analysis: Engineering vs Other Fields',
      description: 'Comparative analysis of career prospects in engineering versus other professional fields like management, law, and medicine.',
      category: 'Career Guidance',
      isPremium: false,
      downloads: 1432,
      rating: 4.5,
      previewImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=400',
      lastUpdated: '2024-02-01'
    },
    {
      id: '6',
      title: 'Hidden Gems: Underrated Engineering Colleges',
      description: 'Discover lesser-known but excellent engineering colleges that offer great education and placement opportunities.',
      category: 'College Rankings',
      isPremium: true,
      price: 79,
      downloads: 543,
      rating: 4.4,
      previewImage: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?w=400',
      lastUpdated: '2024-02-05'
    }
  ];

  const handleDownload = (resource: Resource) => {
    if (resource.isPremium && !user) {
      alert('Please login to download premium resources');
      return;
    }
    
    if (resource.isPremium) {
      // Handle payment integration here
      alert(`Payment integration would be implemented here for ₹${resource.price}`);
    } else {
      // Handle free download
      alert('Free download started!');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const categories = ['All', ...new Set(resources.map(r => r.category))];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resource Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access curated guides, rankings, and insights to make informed decisions about your engineering career. 
            All resources are created by our expert team and updated regularly.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={resource.previewImage}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {resource.isPremium && (
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Lock className="h-3 w-3 mr-1" />
                      Premium
                    </div>
                  )}
                  <div className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    {resource.category}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{resource.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    <span>{resource.rating}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 mb-4">
                  Last updated: {formatDate(resource.lastUpdated)}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    {resource.isPremium ? (
                      <span className="text-2xl font-bold text-orange-600">
                        ₹{resource.price}
                      </span>
                    ) : (
                      <span className="text-lg font-semibold text-green-600">
                        Free
                      </span>
                    )}
                  </div>
                  
                  {resource.isPremium && !user ? (
                    <Link
                      to="/login"
                      className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors text-sm flex items-center"
                    >
                      Login to Download
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleDownload(resource)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center ${
                        resource.isPremium
                          ? 'bg-orange-600 text-white hover:bg-orange-700'
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {resource.isPremium ? 'Buy & Download' : 'Download'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No resources found
            </h3>
            <p className="text-gray-600">
              Try selecting a different category or check back later for new resources.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl shadow-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Custom Research?
          </h2>
          <p className="text-lg mb-6 text-orange-100">
            Can't find what you're looking for? Our team can create custom reports and analysis based on your specific needs.
          </p>
          <a
            href="mailto:research@collegepecharcha.com"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 inline-flex items-center"
          >
            <FileText className="h-5 w-5 mr-2" />
            Request Custom Research
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;