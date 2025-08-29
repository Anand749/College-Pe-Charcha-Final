import React, { useState } from 'react';
import { Linkedin, Instagram, Mail, ChevronDown, ChevronUp, GraduationCap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import arnav from '../assets/core/arnav.jpg';
import vedanti from '../assets/core/vedanti.jpg';
import samarth from '../assets/core/Samarth Dhagate.jpg';
import anand from '../assets/core/anand.jpg';


// The TeamMember interface remains the same
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

// A reusable, now stateful, component for the "List & Detail" showcase
const TeamShowcase = ({ title, members, accentColor, initialVisibleCount }: { title: string, members: TeamMember[], accentColor: string, initialVisibleCount?: number }) => {
  if (members.length === 0) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedMember, setSelectedMember] = useState<TeamMember>(members[0]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isExpanded, setIsExpanded] = useState(false);
  
  const accentTextClass = `text-${accentColor}-600`;
  const accentBgClass = `bg-${accentColor}-100`;

  // Determine if the "View More" button is needed and which members to show
  const canBeTruncated = initialVisibleCount && members.length > initialVisibleCount;
  const visibleMembers = canBeTruncated && !isExpanded ? members.slice(0, initialVisibleCount) : members;

  return (
    <section className="mb-16">
      <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-orange-100 md:h-[640px]">
        
        {/* Left Panel: Scrollable List of Members */}
        <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 flex flex-col">
          {/* This inner div will now scroll because its parent has a fixed height */}
          <div className="p-6 flex-grow overflow-y-auto">
            <h2 className={`text-xl font-bold ${accentTextClass} mb-6`}>{title}</h2>
            <div className="space-y-3">
              {visibleMembers.map(member => (
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

          {/* "View More" Button */}
          {canBeTruncated && (
            <div className="p-6 border-t border-gray-200">
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="w-full flex items-center justify-center space-x-2 text-sm font-semibold text-gray-600 hover:text-gray-900 py-3 rounded-2xl hover:bg-gray-100 transition-all duration-300"
              >
                <span>{isExpanded ? 'View Less' : `View All ${members.length} Members`}</span>
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
          )}
        </div>
        
        {/* Right Panel: Detailed View of Selected Member */}
        <div className="w-full md:w-2/3 lg:w-3/4 p-8 md:p-12 lg:p-16 overflow-y-auto">
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
                    {selectedMember.email && <a href={`mailto:${selectedMember.email}`} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"><Mail size={24} /><span>Email</span></a>}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};


const TeamPage = () => {
  const teamMembers: TeamMember[] = [
    // Core Team Members
    { id: '1', name: 'Anand Chapke', role: 'Founder & Lead', college: 'VIT Pune', year: 'Third Year', bio: 'Passionate about bridging the gap between aspirants and achievers.', photo: anand, linkedin: '#', instagram: '#'},
    { id: '2', name: 'Samarth Dhagate', role: 'Operation Lead', college: 'VIT Pune', year: 'Second Year', bio: 'Leading our mentorship program and student engagement initiatives.', photo: samarth, linkedin: '#' },
    { id: '3', name: 'Vedanti Raut', role: 'Marketing Lead', college: 'VIT Pune', year: 'Second Year', bio: 'Building the tech infrastructure that powers our platform.', photo: vedanti, linkedin: '#' },
    { id: '4', name: 'Hardik Rokade', role: 'Operation Lead', college: 'VIT Pune', year: 'Third Year', bio: 'Crafting user-centric designs that enhance the learning experience.', photo: arnav, linkedin: '#' },
    { id: '5', name: 'Arnav Mahajan', role: 'Marketing Lead', college: 'VIT Pune', year: 'Second Year', bio: 'Building the tech infrastructure that powers our platform.', photo: arnav, linkedin: '#' },
    { id: '6', name: 'Devesh Nhalde', role: 'Research Lead', college: 'VIT Pune', year: 'Second Year', bio: 'Building the tech infrastructure that powers our platform.', photo: vedanti, linkedin: '#' },
    
    // College Heads (More than 4 to demonstrate "View More")
    { id: '7', name: 'Varun Mehta', role: 'College Head - PICT', college: 'PICT Pune', year: 'Final Year', bio: 'Managing PICT mentor network and student connections.', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=800', linkedin: '#' },
    { id: '8', name: 'Ananya Singh', role: 'College Head - COEP', college: 'COEP Pune', year: 'Third Year', bio: 'Coordinating mentorship programs for COEP aspirants.', photo: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?w=800', linkedin: '#' },
    { id: '9', name: 'Karthik Rao', role: 'College Head - VJTI', college: 'VJTI Mumbai', year: 'Final Year', bio: 'Building bridges between VJTI seniors and junior aspirants.', photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=800', linkedin: '#' },
    { id: '10', name: 'Nisha Gupta', role: 'College Head - SPIT', college: 'SPIT Mumbai', year: 'Third Year', bio: 'Organizing expert sessions and networking events for SPIT.', photo: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?w=800', linkedin: '#' },
    { id: '11', name: 'Ravi Kumar', role: 'College Head - Walchand', college: 'Walchand Sangli', year: 'Final Year', bio: 'Building and nurturing our student community in Walchand.', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=800', linkedin: '#' },
    { id: '12', name: 'Meera Shah', role: 'College Head - Cummins', college: 'Cummins College', year: 'Third Year', bio: 'Creating beautiful and intuitive user experiences for our members.', photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=800', linkedin: '#' }
  ];

  // Separate members into their respective sections
  const coreTeam = teamMembers.filter(member => !member.role.includes('College Head'));
  const collegeHeads = teamMembers.filter(member => member.role.includes('College Head'));

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="text-center py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Meet The Team</h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          The passionate students dedicated to guiding the next generation.
        </motion.p>
      </div>

      <div className="max-w-7xl w-full mx-auto p-4 md:p-8">
        
        {/* Showcase 1: Core Team */}
        <TeamShowcase 
          title="Core Team" 
          members={coreTeam} 
          accentColor="orange"
          initialVisibleCount={4}
        />

        {/* Showcase 2: College Heads */}
        <TeamShowcase 
          title="College Heads" 
          members={collegeHeads} 
          accentColor="orange"
          initialVisibleCount={4}
        />
        
      </div>
    </div>
  );
};

export default TeamPage;