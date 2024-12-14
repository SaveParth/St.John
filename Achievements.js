import React from 'react';

export default function Achievements() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Achievements</h1>
      <p className="text-lg mb-4">
        St. John College of Engineering takes pride in the numerous achievements of our students, faculty, and alumni. Here are some of our recent accomplishments:
      </p>
      <div className="space-y-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">National Robotics Competition Winners</h2>
          <p>Our team of engineering students secured first place in the Annual National Robotics Competition, showcasing their innovative designs and programming skills.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Research Grant for Sustainable Energy</h2>
          <p>Dr. Jane Smith from our Mechanical Engineering department received a prestigious grant for her groundbreaking research in sustainable energy solutions.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">AI Innovation Award</h2>
          <p>Our AIML department's project on AI-driven healthcare diagnostics won the Innovation Award at the International AI Conference.</p>
        </div>
      </div>
    </div>
  );
}

