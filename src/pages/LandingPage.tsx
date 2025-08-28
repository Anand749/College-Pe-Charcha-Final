import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Calendar, Star, ChevronLeft, ChevronRight, Linkedin, Instagram } from 'lucide-react';
import teamPhoto1 from '../assets/team-photo-1.jpg';
import arnav from '../assets/core/arnav.jpg';
import vedanti from '../assets/core/vedanti.jpg';
import samarth from '../assets/core/Samarth Dhagate.jpg';
import anand from '../assets/core/anand.jpg';


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
  const accentTextClass = `text-${accentColor}-600`;
  const accentBgClass = `bg-${accentColor}-100`;

  return (
    <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row h-full overflow-hidden" style={{ minHeight: '550px' }}>
      <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 overflow-y-auto">
        <div className="p-4">
          <h2 className={`text-lg font-bold ${accentTextClass} mb-4`}>{title}</h2>
          <div className="space-y-2">
            {members.map(member => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors duration-200 ${
                  selectedMember.id === member.id ? accentBgClass : 'hover:bg-gray-100'
                }`}
              >
                <img src={member.photo} alt={member.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">{member.name}</p>
                  <p className={`text-sm font-medium ${accentTextClass}`}>{member.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4 p-6 md:p-10 lg:p-12">
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
              <img src={selectedMember.photo} alt={selectedMember.name} className="rounded-xl shadow-lg w-full aspect-square object-cover" />
            </div>
            <div className="w-full lg:w-2/3">
              <p className={`text-sm font-semibold ${accentTextClass} uppercase tracking-wider`}>{selectedMember.role}</p>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-1 mb-3">{selectedMember.name}</h1>
              <p className="text-lg font-medium text-gray-500 mb-6">{selectedMember.college} - {selectedMember.year}</p>
              <p className="text-gray-700 leading-relaxed">{selectedMember.bio}</p>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-500 mb-3">Connect:</p>
                <div className="flex space-x-4">
                  {selectedMember.linkedin && <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-blue-700 transition-colors"><Linkedin size={20} /><span>LinkedIn</span></a>}
                  {selectedMember.instagram && <a href={selectedMember.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"><Instagram size={20} /><span>Instagram</span></a>}
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
    { icon: <Users className="h-12 w-12 text-blue-600" />, title: "Direct Senior Connect", description: "Connect directly with seniors from your dream colleges. Get authentic insights and guidance." },
    { icon: <Calendar className="h-12 w-12 text-green-600" />, title: "Expert Sessions", description: "Attend exclusive sessions with industry experts and professionals to boost your career prospects." },
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
    <div className="min-h-screen">
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Your Path to <span className="text-orange-600">Dream College</span> Starts Here</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Maharashtra's only student-led initiative connecting aspiring students with seniors from top colleges.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/predictor" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center w-fit">Try AI Predictor <ArrowRight className="ml-2 h-5 w-5" /></Link>
              <Link to="/colleges" className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-200 w-fit">Find Your Mentor</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive tools and guidance to help you make the right college choices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW TEAM SECTION */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Core Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The driving force behind our strategy, technology, and content.</p>
          </div>
          <TeamShowcase 
            title="Core Team" 
            members={coreTeamMembers} 
            accentColor="orange"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600">Real experiences from students who found their path</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (<Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />))}
              </div>
              <p className="text-lg text-gray-700 mb-4 italic">"{testimonials[currentTestimonial].text}"</p>
              <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
              <div className="text-orange-600">{testimonials[currentTestimonial].college}</div>
            </div>
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"><ChevronLeft className="h-6 w-6 text-gray-600" /></button>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"><ChevronRight className="h-6 w-6 text-gray-600" /></button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of students who've found their dream colleges with our guidance</p>
          <Link to="/signup" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors duration-200 inline-flex items-center">Get Started Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;



 