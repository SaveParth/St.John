import React from 'react';

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">About St. John College of Engineering</h1>
            <p className="text-lg mb-4">
                At SJCEM, we believe in the holistic development of our students. Apart from academic excellence, we focus on building skills such as leadership, teamwork, and communication. Our state-of-the-art infrastructure and experienced faculty ensure that our students receive the best education possible. Furthermore, our location in the rural and tribal area of Palghar District near Mumbai provides a unique learning environment that is away from the hustle and bustle of the city. Our focus on sustainability and social responsibility also sets us apart from other institutions.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Our Focus Areas</h2>
            <ul className="list-disc list-inside mb-6">
                <li>Our students are taught by experienced faculty</li>
                <li>We focus on building leadership skills</li>
                <li>Our location provides a unique learning environment</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Quality Policy</h2>
            <p className="mb-4">
                To impart quality professional education with a conducive environment for technology-enabled teaching-learning and to nurture socially responsible professionals with enhanced employability skills.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <p className="mb-4">
                The college is situated within a lush green campus in a serene and quiet ambience at the St John Technical Education Complex, located at Vevoor, Palghar (East), district Palghar in Maharashtra. Palghar is a part of the Mumbai Suburban Rail Network which extends up to Dahanu and lies on the Mumbai-Ahmedabad rail route, 30 kms north of Virar.
            </p>
            <p className="mb-4">
                The college is on Palghar-Manor road, about 1.5 kms from Palghar Railway station and about 18 kms from Manor (Mastaan Naka) on the Mumbai-Ahmedabad Western Express Highway and 105 kms from the Santacruz domestic airport, Mumbai.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Minority Status</h2>
            <p className="mb-4">
                SJCEM is a college run by Aldel Education Trust, which is a Christian Religious Minority Institution as notified by the Maharashtra State Minorities Development Department, vide Order Dtd July 25, 2008 (Ref.: 2008/310/164/2008/1).
            </p>

            <h2 className="text-2xl font-semibold mb-4">Courses Offered</h2>
            <p className="mb-4">
                The college is approved by All India Council of Technical Education (AICTE), New Delhi; recognized by Directorate of Technical Education (DTE), Government of Maharashtra. The Diploma courses are affiliated with Maharashtra State Board of Technical Education (MSBTE). The Undergraduate and Post-graduate courses are affiliated with the University of Mumbai.
            </p>

            <h3 className="text-xl font-semibold mb-4">Undergraduate Courses</h3>

            <h4 className="text-lg font-semibold mb-2">Level I – Diploma in Engineering</h4>
            <table className="table-auto w-full mb-6">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Discipline</th>
                        <th className="border px-4 py-2">Duration</th>
                        <th className="border px-4 py-2">Intake</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Civil Engineering</td>
                        <td className="border px-4 py-2">3 years</td>
                        <td className="border px-4 py-2">60</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Electronics and Telecommunication Engineering</td>
                        <td className="border px-4 py-2">3 years</td>
                        <td className="border px-4 py-2">60</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Mechanical Engineering</td>
                        <td className="border px-4 py-2">3 years</td>
                        <td className="border px-4 py-2">60</td>
                    </tr>
                </tbody>
            </table>

            <h4 className="text-lg font-semibold mb-2">Level II – Bachelor in Engineering</h4>
            <table className="table-auto w-full mb-6">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Discipline</th>
                        <th className="border px-4 py-2">Duration</th>
                        <th className="border px-4 py-2">Intake</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Civil Engineering</td>
                        <td className="border px-4 py-2">4 years</td>
                        <td className="border px-4 py-2">120</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Computer Engineering</td>
                        <td className="border px-4 py-2">4 years</td>
                        <td className="border px-4 py-2">120</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Electronics and Telecommunication Engineering</td>
                        <td className="border px-4 py-2">4 years</td>
                        <td className="border px-4 py-2">60</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Information Technology</td>
                        <td className="border px-4 py-2">4 years</td>
                        <td className="border px-4 py-2">60</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Mechanical Engineering</td>
                        <td className="border px-4 py-2">4 years</td>
                        <td className="border px-4 py-2">120</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="text-xl font-semibold mb-4">Postgraduate Course</h3>

            <h4 className="text-lg font-semibold mb-2">Master of Management Studies (MMS)</h4>
            <table className="table-auto w-full mb-6">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Duration</th>
                        <th className="border px-4 py-2">Intake</th>
                        <th className="border px-4 py-2">Specializations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">2 years</td>
                        <td className="border px-4 py-2">60</td>
                        <td className="border px-4 py-2">Marketing, Finance, Human Resources, Operations, and Information Technology</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
