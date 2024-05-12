import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 hover:border-purple-500 transition duration-300 ease-in-out transform hover:scale-105">
        <img className="w-full h-auto" src="project1.jpg" alt="Project Image 1" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Project Title 1</h2>
          <p className="text-gray-700 mb-4">
            This project is aimed at solving [describe the problem or purpose of the project]. 
            It was developed using [list the technologies or frameworks used].
          </p>
          <a href="#" className="text-purple-500 hover:underline">View Project Details</a>
        </div>
      </div>
      <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 hover:border-purple-500 transition duration-300 ease-in-out transform hover:scale-105">
        <img className="w-full h-auto" src="project2.jpg" alt="Project Image 2" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Project Title 2</h2>
          <p className="text-gray-700 mb-4">
            This project is aimed at solving [describe the problem or purpose of the project]. 
            It was developed using [list the technologies or frameworks used].
          </p>
          <a href="#" className="text-purple-500 hover:underline">View Project Details</a>
        </div>
      </div>
      <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200 hover:border-purple-500 transition duration-300 ease-in-out transform hover:scale-105">
        <img className="w-full h-auto" src="project3.jpg" alt="Project Image 3" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Project Title 3</h2>
          <p className="text-gray-700 mb-4">
            This project is aimed at solving [describe the problem or purpose of the project]. 
            It was developed using [list the technologies or frameworks used].
          </p>
          <a href="#" className="text-purple-500 hover:underline">View Project Details</a>
        </div>
      </div>
      {/* Add more project cards as needed */}
    </div>
  );
}

export default About;
