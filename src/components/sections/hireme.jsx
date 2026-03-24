import React from 'react';

export const HireMe = () => {
  return (
    <section id="hireme" className="hireme min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
              bg-clip-text text-transparent"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          🚀 Why Hire Me?
        </h2>
        <ul>
            <li className="text-gray-300 text-2xl mb-6">
                <strong className="text-pink-400">Strong Foundation in React and Modern Frontend Development:</strong> I have a solid understanding of React and modern frontend technologies, which enables me to build robust and scalable web applications.
            </li>
            <li className="text-gray-300 text-2xl mb-6">
                <strong className="text-pink-400">Experience Building Real-World, API-Driven Applications:</strong> I have hands-on experience in developing real-world applications that integrate with RESTful APIs and handle dynamic data effectively.
            </li>
            <li className="text-gray-300 text-2xl mb-6">
                <strong className="text-pink-400">Focus on Clean Code, Performance, and User Experience:</strong> I prioritize writing clean, maintainable code while ensuring optimal performance and a great user experience.
            </li>
            <li className="text-gray-300 text-2xl mb-6">
                <strong className="text-pink-400">Quick Learner with a Growth Mindset:</strong> I am committed to continuous learning and staying updated with the latest industry trends and best practices.
            </li>
            <li className="text-gray-300 text-2xl mb-6">
                <strong className="text-pink-400">Comfortable Working Remotely and Collaborating with Teams:</strong> I thrive in remote work environments and have experience working effectively with diverse teams to achieve common goals.
            </li>
        </ul>
      </div>
    </section>
  );
};      