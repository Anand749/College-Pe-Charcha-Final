export interface College {
  id: string;
  name: string;
  fullName: string;
  location: string;
  established: number;
  image: string;
  description: string;
  highlights: string[];
  pros: string[];
  cons: string[];
  whatsappLink: string;
  mentors: Mentor[];
}

export interface Mentor {
  id: string;
  name: string;
  branch: string;
  year: string;
  photo: string;
  linkedin?: string;
  instagram?: string;
}

export const colleges: College[] = [
  {
    id: 'coep',
    name: 'COEP',
    fullName: 'College of Engineering Pune',
    location: 'Pune',
    established: 1854,
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?w=800',
    description: 'One of India\'s oldest and most prestigious engineering colleges, known for its rich heritage and excellent placement records.',
    highlights: ['Top placement records', 'Strong alumni network', 'Research excellence', 'Historic campus'],
    pros: ['Excellent faculty', 'Strong industry connections', 'Beautiful campus', 'Rich legacy'],
    cons: ['High competition', 'Limited seats', 'Strict academic environment'],
    whatsappLink: 'https://chat.whatsapp.com/coep-mentors',
    mentors: [
      {
        id: '1',
        name: 'Raj Patel',
        branch: 'Computer Engineering',
        year: 'Final Year',
        photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=200',
        linkedin: 'https://linkedin.com/in/rajpatel',
        instagram: 'https://instagram.com/rajpatel'
      },
      {
        id: '2',
        name: 'Priya Sharma',
        branch: 'Electronics Engineering',
        year: 'Third Year',
        photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=200',
        linkedin: 'https://linkedin.com/in/priyasharma'
      }
    ]
  },
  {
    id: 'pict',
    name: 'PICT',
    fullName: 'Pune Institute of Computer Technology',
    location: 'Pune',
    established: 1983,
    image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?w=800',
    description: 'Premier institute known for excellence in computer science and IT education with outstanding placement records.',
    highlights: ['Top IT placements', 'Industry partnerships', 'Modern infrastructure', 'Innovation hub'],
    pros: ['Excellent IT placements', 'Modern labs', 'Industry exposure', 'Active student community'],
    cons: ['Limited branches', 'High fees', 'Competitive environment'],
    whatsappLink: 'https://chat.whatsapp.com/pict-mentors',
    mentors: [
      {
        id: '3',
        name: 'Arjun Desai',
        branch: 'Computer Engineering',
        year: 'Final Year',
        photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=200'
      },
      {
        id: '4',
        name: 'Sneha Kulkarni',
        branch: 'Information Technology',
        year: 'Third Year',
        photo: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?w=200'
      }
    ]
  },
  {
    id: 'vjti',
    name: 'VJTI',
    fullName: 'Veermata Jijabai Technological Institute',
    location: 'Mumbai',
    established: 1887,
    image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?w=800',
    description: 'Mumbai\'s premier technological institute with excellent engineering programs and strong industry connections.',
    highlights: ['Mumbai advantage', 'Industry proximity', 'Research opportunities', 'Diverse branches'],
    pros: ['Mumbai location', 'Good placements', 'Diverse opportunities', 'Strong alumni'],
    cons: ['High cost of living', 'Competitive admission', 'Limited campus space'],
    whatsappLink: 'https://chat.whatsapp.com/vjti-mentors',
    mentors: [
      {
        id: '5',
        name: 'Kavya Joshi',
        branch: 'Mechanical Engineering',
        year: 'Final Year',
        photo: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?w=200'
      }
    ]
  },
  {
    id: 'spit',
    name: 'SPIT',
    fullName: 'Sardar Patel Institute of Technology',
    location: 'Mumbai',
    established: 1962,
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?w=800',
    description: 'Well-established engineering institute in Mumbai known for quality education and good placement opportunities.',
    highlights: ['Good placements', 'Mumbai location', 'Industry connections', 'Active student life'],
    pros: ['Mumbai advantage', 'Good faculty', 'Industry exposure', 'Cultural activities'],
    cons: ['High competition', 'Expensive city', 'Limited hostel facilities'],
    whatsappLink: 'https://chat.whatsapp.com/spit-mentors',
    mentors: []
  },
  {
    id: 'walchand',
    name: 'Walchand',
    fullName: 'Walchand College of Engineering',
    location: 'Sangli',
    established: 1947,
    image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?w=800',
    description: 'Renowned engineering college in Sangli with excellent academic standards and placement records.',
    highlights: ['Strong academics', 'Good placements', 'Affordable fees', 'Peaceful environment'],
    pros: ['Quality education', 'Affordable', 'Good faculty', 'Less crowded'],
    cons: ['Remote location', 'Limited city opportunities', 'Fewer companies visit'],
    whatsappLink: 'https://chat.whatsapp.com/walchand-mentors',
    mentors: []
  },
  // Adding more colleges...
  {
    id: 'cummins',
    name: 'Cummins',
    fullName: 'Cummins College of Engineering for Women',
    location: 'Pune',
    established: 1990,
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?w=800',
    description: 'Premier women\'s engineering college in Pune with excellent academic standards and empowering environment.',
    highlights: ['Women empowerment', 'Quality education', 'Good placements', 'Supportive environment'],
    pros: ['Women-focused', 'Good faculty', 'Pune location', 'Safe environment'],
    cons: ['Only for women', 'Limited diversity', 'Competitive admission'],
    whatsappLink: 'https://chat.whatsapp.com/cummins-mentors',
    mentors: []
  }
  // Add more colleges as needed...
];

export const getCollegeByName = (collegeName: string): College | undefined => {
  return colleges.find(college => college.id === collegeName.toLowerCase());
};