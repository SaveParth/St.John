import React from 'react';
import megalio from '../Images/megalio.png';

export default function TechFest() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">TechFest 2024</h1>
            <div className="mb-8">
                <img
                    src={megalio}
                    alt="TechFest 2024"
                    className="w-full h-auto rounded-lg"
                />
            </div>
            <p className="text-lg mb-6">
                Join us for our annual technology festival featuring workshops, competitions, and guest lectures from industry experts. TechFest 2024 promises to be an exciting showcase of innovation and creativity in the world of engineering and technology.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Event Highlights</h2>
            <ul className="list-disc list-inside mb-6">
                <li>Robotics Competition</li>
                <li>Hackathon</li>
                <li>AI and Machine Learning Workshop</li>
                <li>IoT Showcase</li>
                <li>Guest Lectures from Industry Leaders</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Schedule</h2>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-2">Day 1 - October 15, 2024</h3>
                <ul className="list-disc list-inside">
                    <li>9:00 AM - Opening Ceremony</li>
                    <li>10:00 AM - Keynote Speech</li>
                    <li>11:30 AM - Workshop Sessions Begin</li>
                    <li>2:00 PM - Robotics Competition Preliminary Round</li>
                    <li>5:00 PM - Day 1 Closing Remarks</li>
                </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-2">Day 2 - October 16, 2024</h3>
                <ul className="list-disc list-inside">
                    <li>9:00 AM - Hackathon Kickoff</li>
                    <li>10:30 AM - AI and Machine Learning Workshop</li>
                    <li>2:00 PM - IoT Showcase</li>
                    <li>4:00 PM - Robotics Competition Finals</li>
                    <li>6:00 PM - Closing Ceremony and Awards</li>
                </ul>
            </div>
            <p className="text-lg mb-4">
                Don't miss out on this incredible opportunity to learn, network, and showcase your skills. Register now to secure your spot at TechFest 2024!
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Register for TechFest 2024
            </button>
        </div>
    );
}

