import React, { useState } from 'react';
import { Calendar, Clock, Users, ExternalLink, MapPin } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'Expert Session' | 'Workshop' | 'Webinar';
  speaker: string;
  company?: string;
  image: string;
  lumaLink: string;
  isUpcoming: boolean;
}

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const events: Event[] = [
    {
      id: '1',
      title: 'Breaking into Tech: A Software Engineer\'s Journey',
      description: 'Learn from a Google software engineer about career paths, interview preparation, and what it takes to succeed in top tech companies.',
      date: '2024-02-25',
      time: '7:00 PM IST',
      type: 'Expert Session',
      speaker: 'Rajesh Kumar',
      company: 'Google',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=400',
      lumaLink: 'https://lu.ma/tech-career-session',
      isUpcoming: true
    },
    {
      id: '2',
      title: 'Product Management 101: From Engineer to PM',
      description: 'Discover the transition from engineering to product management with insights from a Microsoft Product Manager.',
      date: '2024-02-28',
      time: '6:30 PM IST',
      type: 'Workshop',
      speaker: 'Priya Sharma',
      company: 'Microsoft',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=400',
      lumaLink: 'https://lu.ma/product-management-workshop',
      isUpcoming: true
    },
    {
      id: '3',
      title: 'Startup Ecosystem in India: Opportunities & Challenges',
      description: 'An interactive session with successful entrepreneurs about building startups in India.',
      date: '2024-03-05',
      time: '8:00 PM IST',
      type: 'Webinar',
      speaker: 'Arjun Patel',
      company: 'Founder, TechStartup',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=400',
      lumaLink: 'https://lu.ma/startup-ecosystem-webinar',
      isUpcoming: true
    },
    {
      id: '4',
      title: 'Data Science Career Path: From College to Industry',
      description: 'Learn about data science opportunities, required skills, and career progression from an industry expert.',
      date: '2024-01-20',
      time: '7:00 PM IST',
      type: 'Expert Session',
      speaker: 'Dr. Sneha Kulkarni',
      company: 'Amazon',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=400',
      lumaLink: 'https://lu.ma/data-science-career',
      isUpcoming: false
    },
    {
      id: '5',
      title: 'Cracking Coding Interviews: Tips & Tricks',
      description: 'A comprehensive workshop on coding interview preparation with practical examples and problem-solving techniques.',
      date: '2024-01-15',
      time: '6:00 PM IST',
      type: 'Workshop',
      speaker: 'Vikram Singh',
      company: 'Meta',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?w=400',
      lumaLink: 'https://lu.ma/coding-interview-workshop',
      isUpcoming: false
    }
  ];

  const upcomingEvents = events.filter(event => event.isUpcoming);
  const pastEvents = events.filter(event => !event.isUpcoming);
  const displayEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Events & Expert Sessions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join exclusive sessions with industry experts, successful professionals, and gain insights 
            that can shape your career journey.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'upcoming' 
                  ? 'bg-orange-600 text-white' 
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Upcoming Events ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'past' 
                  ? 'bg-orange-600 text-white' 
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Past Events ({pastEvents.length})
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.type === 'Expert Session' ? 'bg-orange-100 text-orange-800' :
                    event.type === 'Workshop' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {event.type}
                  </span>
                </div>
                {!event.isUpcoming && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.speaker}</span>
                    {event.company && (
                      <span className="text-orange-600 ml-1">@ {event.company}</span>
                    )}
                  </div>
                </div>
                
                <a
                  href={event.lumaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    event.isUpcoming 
                      ? 'bg-orange-600 text-white hover:bg-orange-700' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {event.isUpcoming ? 'Register Now' : 'View Details'}
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {displayEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No {activeTab} events
            </h3>
            <p className="text-gray-600">
              {activeTab === 'upcoming' 
                ? 'Stay tuned for exciting upcoming sessions!' 
                : 'Check back later for past event recordings.'}
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl shadow-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to Host an Event?
          </h2>
          <p className="text-lg mb-6 text-orange-100">
            Are you an industry expert or successful professional? Share your knowledge with aspiring students.
          </p>
          <a
            href="mailto:events@collegepecharcha.com"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 inline-flex items-center"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Partner With Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;