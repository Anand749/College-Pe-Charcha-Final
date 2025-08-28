import React, { useEffect, useState } from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [mentorCount, setMentorCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const animateCounter = (target: number, setter: (value: number) => void, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 50);
    };

    animateCounter(15000, setVisitorCount);
    animateCounter(120, setMentorCount);
    animateCounter(4500, setStudentCount);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-600">College Pe Charcha</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Maharashtra's only student-led initiative dedicated to bridging the gap between aspiring students 
              and their dream colleges. By students, for students.
            </p>
            <div className="inline-flex items-center bg-orange-100 px-6 py-3 rounded-full">
              <Heart className="h-5 w-5 text-orange-600 mr-2" />
              <span className="text-orange-800 font-medium">Non-profit • Student-led • Impact-driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to authentic guidance and mentorship for engineering aspirants in Maharashtra. 
                We believe that every student deserves to make informed decisions about their future, backed by 
                real experiences and insights from those who've walked the path.
              </p>
              <p className="text-lg text-gray-600">
                Through our platform, we connect juniors with seniors from top colleges, provide AI-powered 
                college predictions, and offer resources that aren't available anywhere else - all completely 
                free or at minimal cost.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Student-First</h3>
                <p className="text-gray-600 text-sm">Every decision we make prioritizes student success and well-being</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Community Driven</h3>
                <p className="text-gray-600 text-sm">Built by students, maintained by students, for the benefit of students</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">We strive for excellence in everything we do and deliver</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Impact</h3>
                <p className="text-gray-600 text-sm">Measuring success by the positive impact on students' lives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-orange-100">Numbers that reflect our commitment to student success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                {visitorCount.toLocaleString()}+
              </div>
              <div className="text-xl text-orange-100">Website Visitors</div>
              <div className="text-orange-200 text-sm mt-2">Students who've found guidance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                {mentorCount}+
              </div>
              <div className="text-xl text-orange-100">Senior Mentors</div>
              <div className="text-orange-200 text-sm mt-2">From top colleges across Maharashtra</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                {studentCount.toLocaleString()}+
              </div>
              <div className="text-xl text-orange-100">Students Mentored</div>
              <div className="text-orange-200 text-sm mt-2">Dreams supported and guided</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                College Pe Charcha was born out of a simple observation: aspiring engineering students in Maharashtra 
                had no reliable way to connect with seniors who had already navigated the complex college admission process.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                As students ourselves, we experienced firsthand the confusion, misinformation, and anxiety that comes 
                with choosing the right college and branch. We saw our juniors struggling with the same issues, 
                making decisions based on incomplete or inaccurate information.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                That's when we decided to build something different. Not another coaching institute or admission consultancy, 
                but a genuine platform where students could connect with students - where authenticity and empathy would 
                drive every interaction.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Starting with a simple WhatsApp group in 2022, we've grown into a comprehensive platform that serves 
                thousands of students across Maharashtra. We've maintained our core principle: this is by students, 
                for students, with no commercial agenda.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, College Pe Charcha stands as Maharashtra's only student-led initiative in the education space, 
                and we're proud to have helped thousands of students make informed decisions about their futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Community</h2>
            <p className="text-xl text-gray-600">Passionate students working together to make a difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=600"
                alt="Team collaboration"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
                <p className="text-orange-200">Working together to build something meaningful</p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=600"
                alt="Student mentorship"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Mentorship in Action</h3>
                <p className="text-orange-200">Seniors guiding juniors toward their dreams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authenticity</h3>
              <p className="text-gray-600">
                We provide real, unfiltered experiences and insights. No sugar-coating, no fake promises - 
                just honest guidance from students who've been there.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessibility</h3>
              <p className="text-gray-600">
                Education guidance should be accessible to all. We keep our services free or at minimal cost, 
                ensuring no student is left behind due to financial constraints.
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering the highest quality resources, predictions, and guidance. 
                Our reputation is built on the success of the students we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a student seeking guidance or a senior willing to mentor, 
            you can be part of this incredible journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/signup"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
            >
              Get Started
            </a>
            <a
              href="/team"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;