import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Calendar, Star, ChevronLeft, ChevronRight, Linkedin, Instagram, GraduationCap, Sparkles, TrendingUp, Award } from 'lucide-react';
import teamPhoto1 from '../assets/team-photo-1.jpg';
import arnav from '../assets/core/arnav.jpg';
import vedanti from '../assets/core/vedanti.jpg';
import samarth from '../assets/core/Samarth Dhagate.jpg';
import anand from '../assets/core/anand.jpg';
import NotificationBar from '../components/layout/NotificationBar';


// Interface for a Team Member
interface TeamMember {
  id: string;
  name: string;
  role: string;
  college: string;
  year: string;
  bio: string;
  photo: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
}

// Define props for the TeamShowcase component using an interface
interface TeamShowcaseProps {
  title: string;
  members: TeamMember[];
  accentColor: string;
}

// Reusable component for the "List & Detail" showcase, now typed with React.FC
const TeamShowcase: React.FC<TeamShowcaseProps> = ({ title, members, accentColor }) => {
  if (members.length === 0) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedMember, setSelectedMember] = useState<TeamMember>(members[0]);
  const [showAllMembers, setShowAllMembers] = useState(false);
  const accentTextClass = `text-${accentColor}-600`;
  const accentBgClass = `bg-${accentColor}-100`;

  // Show only 4 members initially, or all if showAllMembers is true
  const displayedMembers = showAllMembers ? members : members.slice(0, 4);

  return (
    <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-orange-100" style={{ minHeight: showAllMembers ? '550px' : '400px' }}>
      <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 flex flex-col">
        <div className="p-6 flex-grow overflow-y-auto">
          <h2 className={`text-xl font-bold ${accentTextClass} mb-6`}>{title}</h2>
          <div className="space-y-3">
            {displayedMembers.map(member => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`w-full flex items-center space-x-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                  selectedMember.id === member.id ? accentBgClass : 'hover:bg-gray-100'
                }`}
              >
                <img src={member.photo} alt={member.name} className="w-14 h-14 rounded-2xl object-cover flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-lg">{member.name}</p>
                  <p className={`text-sm font-semibold ${accentTextClass}`}>{member.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Show More/Less Button */}
        {members.length > 4 && (
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={() => setShowAllMembers(!showAllMembers)}
              className={`w-full flex items-center justify-center space-x-2 text-sm font-semibold py-3 rounded-2xl transition-all duration-300 ${
                showAllMembers 
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                  : `${accentTextClass} hover:bg-${accentColor}-50`
              }`}
            >
              <span>{showAllMembers ? 'Show Less' : `View All ${members.length} Members`}</span>
              {showAllMembers ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
      
      <div className="w-full md:w-2/3 lg:w-3/4 p-8 md:p-12 lg:p-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMember.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12"
          >
            <div className="w-full lg:w-1/3">
              <img src={selectedMember.photo} alt={selectedMember.name} className="rounded-3xl shadow-2xl w-full aspect-square object-cover" />
            </div>
            <div className="w-full lg:w-2/3">
              <p className={`text-sm font-semibold ${accentTextClass} uppercase tracking-wider`}>{selectedMember.role}</p>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 mb-4">{selectedMember.name}</h1>
              <p className="text-xl font-medium text-gray-500 mb-6">{selectedMember.college} - {selectedMember.year}</p>
              <p className="text-gray-700 leading-relaxed text-lg">{selectedMember.bio}</p>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-500 mb-4">Connect:</p>
                <div className="flex space-x-6">
                  {selectedMember.linkedin && <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-blue-700 transition-colors"><Linkedin size={24} /><span>LinkedIn</span></a>}
                  {selectedMember.instagram && <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"><Instagram size={24} /><span>Instagram</span></a>}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};


const LandingPage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const testimonials = [
    { id: 1, name: "Priya Sharma", college: "COEP Pune", rating: 5, text: "College Pe Charcha helped me connect with seniors who guided me through the entire admission process. The AI predictor was spot-on!", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150" },
    { id: 2, name: "Rahul Patil", college: "PICT Pune", rating: 5, text: "The mentorship I received was invaluable. Seniors shared real insights about college life and placement preparation.", avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=150" },
    { id: 3, name: "Sneha Kulkarni", college: "VIT Pune", rating: 5, text: "Amazing platform! The college predictor helped me make informed decisions, and the expert sessions were incredibly helpful.", avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?w=150" },
  ];

  const features = [
    { icon: <BookOpen className="h-12 w-12 text-orange-600" />, title: "AI College Predictor", description: "Get accurate college predictions based on your percentile and category with our AI-powered tool." },
    { icon: <Users className="h-12 w-12 text-orange-600" />, title: "Direct Senior Connect", description: "Connect directly with seniors from your dream colleges. Get authentic insights and guidance." },
    { icon: <Calendar className="h-12 w-12 text-orange-600" />, title: "Expert Sessions", description: "Attend exclusive sessions with industry experts and professionals to boost your career prospects." },
  ];

  const heroImages = [
    teamPhoto1,
  ];

  const coreTeamMembers: TeamMember[] = [
    { id: '1', name: 'Anand Chapke', role: 'Founder & Lead', college: 'VIT Pune', year: 'Third Year', bio: 'Passionate about bridging the gap between aspirants and achievers.', photo: anand, linkedin: '#', instagram: '#'},
    { id: '2', name: 'Samarth Dhagate', role: 'Operation Lead', college: 'VIT Pune', year: 'Second Year', bio: 'Leading our mentorship program and student engagement initiatives.', photo: samarth, linkedin: '#' },
    { id: '3', name: 'Vedanti Raut', role: 'Marketing Lead', college: 'VIT Pune', year: 'Second Year', bio: 'Building the tech infrastructure that powers our platform.', photo: vedanti, linkedin: '#' },
     { id: '4', name: 'Hardik Rokade', role: 'Operation Lead', college: 'VIT Pune', year: 'Third Year', bio: 'Crafting user-centric designs that enhance the learning experience.', photo: arnav, linkedin: '#' },
      { id: '5', name: 'Arnav Mahajan', role: 'Marketing Lead', college: 'VIT Pune', year: 'Second Year', bio: 'Building the tech infrastructure that powers our platform.', photo: arnav, linkedin: '#' },
       { id: '6', name: 'Devesh Nhalde', role: 'Research  Lead', college: 'VIT Pune', year: 'Second Year', bio: 'Building the tech infrastructure that powers our platform.', photo: vedanti, linkedin: '#' },
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    const heroImageInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => {
      clearInterval(testimonialInterval);
      clearInterval(heroImageInterval);
    };
  }, []);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Notification Bar */}
      <NotificationBar />
      
      {/* Hero Section */}
      <section
        className="relative py-20 transition-all duration-1000 ease-in-out overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 40%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 100%), url(${heroImages[currentHeroImage]})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          minHeight: '600px',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Your Path to <span className="text-orange-600">Dream College</span> Starts Here!
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              Maharashtra's only student-led initiative connecting aspiring students with seniors from top colleges.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link to="/predictor" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center w-fit shadow-lg transform hover:scale-105">
                Try AI Predictor <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/colleges" className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 w-fit">
                Find Your Mentor
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive tools and guidance to help you make the right college choices</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 hover:shadow-2xl transition-all duration-300 border border-orange-200"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW TEAM SECTION */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Core Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The driving force behind our strategy, technology, and content.</p>
          </motion.div>
          <TeamShowcase 
            title="Core Team" 
            members={coreTeamMembers} 
            accentColor="orange"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600">Real experiences from students who found their path</p>
          </motion.div>
          <div className="relative max-w-4xl mx-auto">
            <motion.div 
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-orange-100"
            >
              <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} className="w-20 h-20 rounded-3xl mx-auto mb-6 object-cover shadow-lg" />
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (<Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />))}
              </div>
              <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">"{testimonials[currentTestimonial].text}"</p>
              <div className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
              <div className="text-orange-600 font-medium">{testimonials[currentTestimonial].college}</div>
            </motion.div>
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300"><ChevronLeft className="h-6 w-6 text-gray-600" /></button>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300"><ChevronRight className="h-6 w-6 text-gray-600" /></button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of students who've found their dream colleges with our guidance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/signup" className="bg-white text-orange-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-orange-50 transition-all duration-300 inline-flex items-center shadow-lg transform hover:scale-105">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;



 