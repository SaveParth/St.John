import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Examination() {
  const [isHallTicketVisible, setIsHallTicketVisible] = useState(false);
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    pid: '',
    rollno: '',
    sem: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails({
      ...studentDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsHallTicketVisible(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Examination Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Exam Timetables</h2>
          <ul className="list-disc list-inside">
            <li><Link to="/path/to/Semester1Timetable.pdf" className="text-blue-600 hover:underline" target="_blank" download>Semester 1 Exam Timetable</Link></li>
            <li><Link to="/path/to/Semester2Timetable.pdf" className="text-blue-600 hover:underline" target="_blank" download>Semester 2 Exam Timetable</Link></li>
            <li><Link to="/path/to/FinalYearProjectSchedule.pdf" className="text-blue-600 hover:underline" target="_blank" download>Final Year Project Presentations Schedule</Link></li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Hall Tickets</h2>
          <p className="mb-4">Hall tickets for the upcoming examinations will be available for download from July 1, 2024.</p>
          <button
            onClick={() => setIsHallTicketVisible(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Generate Hall Ticket
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Past Papers</h2>
          <ul className="list-disc list-inside">
            <li><Link to="/path/to/2023ExamPapers.pdf" className="text-blue-600 hover:underline" target="_blank" download>2023 Examination Papers</Link></li>
            <li><Link to="/path/to/2022ExamPapers.pdf" className="text-blue-600 hover:underline" target="_blank" download>2022 Examination Papers</Link></li>
            <li><Link to="/path/to/2021ExamPapers.pdf" className="text-blue-600 hover:underline" target="_blank" download>2021 Examination Papers</Link></li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Exam Regulations</h2>
          <p className="mb-4">Please review the examination regulations and guidelines before your exams.</p>
          <Link to="/path/to/ExamRegulations.pdf" className="text-blue-600 hover:underline" target="_blank" download>Read Exam Regulations</Link>
        </div>
      </div>

      {isHallTicketVisible && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-semibold mb-4">Enter Your Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg mb-2">Student Name</label>
              <input
                type="text"
                name="name"
                value={studentDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2">PID</label>
              <input
                type="text"
                name="pid"
                value={studentDetails.pid}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2">Roll No</label>
              <input
                type="text"
                name="rollno"
                value={studentDetails.rollno}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2">Semester</label>
              <input
                type="text"
                name="sem"
                value={studentDetails.sem}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Generate Hall Ticket
            </button>
          </form>

          {isHallTicketVisible && studentDetails.name && (
            <div className="mt-6 bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold">Hall Ticket</h2>
              <p><strong>Name:</strong> {studentDetails.name}</p>
              <p><strong>PID:</strong> {studentDetails.pid}</p>
              <p><strong>Roll No:</strong> {studentDetails.rollno}</p>
              <p><strong>Semester:</strong> {studentDetails.sem}</p>
              <p className="mt-4">Your hall ticket is ready! Please take a printout for your exams.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
