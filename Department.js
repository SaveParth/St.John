import React from 'react';
import { useParams } from 'react-router-dom';

const departments = {
  civil: {
    name: 'Civil Engineering',
    description: 'Our Civil Engineering department focuses on designing, constructing, and maintaining the built environment.',
    vision: 'To create high quality civil engineers with global perspective and to inculcate in them professionalism and work ethics for building a stronger society.',
    mission: [
      'To nurture civil Engineers with competent technical skills, professional and ethical values to serve the Nation.',
      'To transform the department into a centre of excellence in the field of civil engineering and allied research.',
      'To provide knowledge base through consultancy services to the community in all areas of civil engineering.',
      'To inculcate innovation and eco sustainable construction in the minds of budding civil engineers to face ever evolving challenges.'
    ],
    courses: ['Structural Engineering', 'Geotechnical Engineering', 'Transportation Engineering', 'Environmental Engineering'],
  },
  aiml: {
    name: 'Artificial Intelligence and Machine Learning',
    description: 'The AIML department is at the forefront of cutting-edge research in artificial intelligence and machine learning technologies.',
    vision: 'To be a department committed to develop capable and efficient Artificial Intelligence and Machine Learning graduates with an aptitude for research and leadership qualities.',
    mission: [
      'To inculcate a habit of lifelong learning to become globally competent efficient Artificial Intelligence and Machine Learning graduates.',
      'To promote excellence by encouraging creativity, critical thinking, and discipline.',
      'To establish relationships with other institutes as well as industries to have collaborative learning.'
    ],
    courses: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'],
  },
  mechanical: {
    name: 'Mechanical Engineering',
    description: 'Our Mechanical Engineering department covers a wide range of areas from design and manufacturing to thermodynamics and robotics.',
    courses: ['Thermodynamics', 'Fluid Mechanics', 'Robotics', 'Manufacturing Processes'],
  },
  computer: {
    name: 'Computer Engineering',
    description: 'The Computer Engineering department focuses on the design and development of computer systems and software.',
    vision: 'To be a department committed to develop capable and efficient Computer Engineering graduates with an aptitude for research and leadership qualities.',
    mission: [
      'To inculcate a habit of lifelong learning to become globally competent efficient Artificial Intelligence and Machine Learning graduates.',
      'To promote excellence by encouraging creativity, critical thinking, and discipline.',
      'To establish relationships with other institutes as well as industries to have collaborative learning.'
    ],
    courses: ['Data Structures and Algorithms', 'Operating Systems', 'Computer Networks', 'Software Engineering'],
  },
  it: {
    name: 'Information Technology',
    description: 'Our IT department prepares students for careers in the rapidly evolving field of information technology.',
    vision: 'To be a student centred, innovative department preparing graduates to be efficient problem solvers, researchers, innovators and entrepreneurs to serve diverse communities and producing lifelong learners to become competent professionals in the dynamic field of Information Technology.',
    mission: [
      'To provide best infrastructure facility to achieve excellence in teaching learning process.',
      'To provide technical Programs to enhance the student’s knowledge in the latest technologies.',
      'To impart high quality undergraduate programs in order to prepare our graduates to become leaders in their profession.',
      'To promote conducive ambiance for research and creativity.'
    ],
    courses: ['Database Management', 'Web Development', 'Cybersecurity', 'Cloud Computing'],
  },
};

export default function Department() {
  const { dept } = useParams();
  const department = departments[dept];

  if (!department) {
    return <div>Department not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{department.name}</h1>
      <p className="text-lg mb-6">{department.description}</p>

      {/* Vision Section */}
      {department.vision && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vision</h2>
          <p className="text-lg mb-6">{department.vision}</p>
        </div>
      )}

      {/* Mission Section */}
      {department.mission && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Mission</h2>
          <ul className="list-disc list-inside mb-6">
            {department.mission.map((missionItem, index) => (
              <li key={index}>{missionItem}</li>
            ))}
          </ul>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">Courses Offered</h2>
      <ul className="list-disc list-inside mb-6">
        {department.courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}
