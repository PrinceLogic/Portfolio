// Mock data and functions for frontend-only implementation
// This will be replaced with actual backend API calls later

export const mockContactSubmit = async (formData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate random success/failure for testing
  const isSuccess = Math.random() > 0.1; // 90% success rate

  if (!isSuccess) {
    throw new Error('Failed to send message');
  }

  // Log to console (will be replaced with actual database storage)
  console.log('Contact form submission (MOCK):', formData);

  return {
    success: true,
    message: 'Thank you for reaching out! I will get back to you soon.',
    data: {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Math.random().toString(36).substr(2, 9)
    }
  };
};

// Mock resume data
export const mockResumeData = {
  personalInfo: {
    name: 'Prince Kahar',
    title: 'MERN Stack Developer',
    email: 'kaharprince2006@gmail.com',
    phone: '+91 6354461079',
    location: 'Surat, Gujarat, India',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  education: {
    degree: 'Bachelor of Technology',
    major: 'Information Technology',
    university: 'Uka Tarsadia University',
    cgpa: '9.00',
    duration: '2024 - 2028'
  },
  skills: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Git & GitHub',
    'RESTful APIs'
  ]
};
