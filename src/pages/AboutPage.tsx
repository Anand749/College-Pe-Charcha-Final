import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Target, Award, Heart, Sparkles, TrendingUp, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-orange-600" />, number: "15000+", label: "Happy Visitors on website" },
    { icon: <GraduationCap className="w-8 h-8 text-orange-600" />, number: "15+", label: "Colleges Included" },
    { icon: <Target className="w-8 h-8 text-orange-600" />, number: "5000+", label: "Students Helped" },
    { icon: <Award className="w-8 h-8 text-orange-600" />, number: "120+", label: "Expert Mentors" },
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-orange-600" />,
      title: "Students Centric",
      description: "Everything we do is centered around helping students make informed decisions about their future."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-orange-600" />,
      title: "Authentic Insights",
      description: "Real experiences from actual students who've been through the same journey you're about to embark on."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-orange-600" />,
      title: "Continuous Growth",
      description: "We're constantly evolving and improving our platform based on student feedback and needs."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-orange-600" />,
      title: "Knowledge Sharing",
      description: "Building a community where knowledge flows freely from experienced seniors to aspiring juniors."
    }
  ];

  const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    description: "Started as a small group of students helping juniors navigate the complex college admission process — successfully guiding 500+ students on our own."
  },
  {
    year: "March 2025",
    title: "Growing Community",
    description: "Expanded to multiple colleges across Maharashtra, building a trusted network of seniors and mentors to guide thousands of students."
  },
  {
    year: "Sept 2025",
    title: "AI-Powered Platform",
    description: "Launched our AI college predictor and mentorship platform to provide personalized guidance and transparent insights."
  },
  {
    year: "2026",
    title: "Campus to Corporate",
    description: "Started connecting students with employees from their dream companies like Microsoft, Amazon, Barclays, and more — bridging the gap between education and industry."
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About College Pe Charcha</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maharashtra's only student-led initiative connecting aspiring students with seniors from top engineering colleges.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-3xl p-6 text-center shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To bridge the gap between college aspirants and current students by providing authentic insights, 
                personalized guidance, and a supportive community that helps students make informed decisions about their future.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every student deserves access to real, unfiltered information about college life, 
                academics, and career opportunities from those who have walked the same path.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 shadow-2xl">
              <div className="text-center">
                <GraduationCap className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowering Students</h3>
                <p className="text-gray-700">
                  Through technology, community, and authentic experiences, we're making college admissions 
                  more transparent and accessible for every student in Maharashtra.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a small student initiative to a comprehensive platform
            </p>
          </motion.div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-orange-500 to-orange-600"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-300">
                    <div className="text-2xl font-bold text-orange-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            Join Our Community
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
          >
            Be part of a community that's changing how students approach college admissions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://chat.whatsapp.com/HbLY6umdG2G5jKfeRIfbxf" className="bg-white text-orange-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg transform hover:scale-105">
              Get Started Today
            </a>
            <a href="/team" className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
              Meet Our Team
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;