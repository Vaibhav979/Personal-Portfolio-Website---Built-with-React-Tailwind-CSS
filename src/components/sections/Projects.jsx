import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-start py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">File Sharing Manager</h3>
              <p className="text-gray-400 mb-4">
                A full stack file sharing web application built using Spring
                Boot for the backend and HTML/CSS for the frontend. Users can
                securely upload, manage, and download files, with metadata
                stored in a MySQL database. The application integrates Google
                and GitHub OAuth authentication to ensure secure access control.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "HTML",
                  "CSS",
                  "Spring Boot",
                  "MySQL",
                  "OAuth (Google & GitHub)",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://github.com/Vaibhav979/File-Sharing-Manager/tree/main"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Legal Awareness Website
              </h3>
              <p className="text-gray-400 mb-4">
                A full stack platform designed to bridge the gap between
                citizens and legal authorities. Users can submit their legal
                concerns through a Call-to-Action form, which are then forwarded
                to the appropriate authority figure (e.g., advocates,
                inspectors).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Spring Boot", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://github.com/Vaibhav979/Legal-Awzreness-Website"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Employee Management System
              </h3>
              <p className="text-gray-400 mb-4">
                Developed a full-stack Employee Management System with CRUD
                functionality (Create, Read, Update, Delete) for managing
                employee data. Frontend built using React and Tailwind CSS to
                deliver a clean, responsive, and modern UI. Backend powered by
                Spring Boot, implementing RESTful APIs to handle all business
                logic and database interactions. Integrated with MySQL for
                persistent data storage and efficient querying.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailWind", "Spring Boot", "My SQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://github.com/Vaibhav979/EmployeeManagement-Spring"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* project 12 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Realtime Weather Application
              </h3>
              <p className="text-gray-400 mb-4">
                Designed and built a real-time weather application where users
                can search for weather conditions of any city. Integrated
                OpenWeather API to display live temperature, humidity, and other
                conditions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "HTML",
                  "CSS",
                  "JAVA Servlets",
                  "JSP",
                  "API (OpenWeather API)",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://github.com/Vaibhav979/Weather-Application"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* project 4 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Movieland: Dynamic Movie Search App with React & OMDb API
              </h3>
              <p className="text-gray-400 mb-4">
                Built the frontend with ReactJS fetches real-time movie data
                using the OMDb API, leveraging hooks like useEffect and useState
                for efficient state management and API integration. Implements
                search functionality to fetch and display movie titles, posters,
                and related metadata based on user queries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://movie-land-mu-seven.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* project 5 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                StudySync – Frontend Landing Page
              </h3>
              <p className="text-gray-400 mb-4">
                A responsive and modern landing page, StudySync, built using
                pure HTML5 and CSS3. This project focuses on clean layout
                design, typography, and mobile responsiveness. It showcases a
                structured and semantic approach to frontend development without
                the use of any JavaScript frameworks or libraries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://study-sync-front-end-project.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* project 6 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Mock Interview App: Modern Landing Page Built with React &
                Tailwind CSS
              </h3>
              <p className="text-gray-400 mb-4">
                Landing page for a Mock Interview Application, Built using
                React.js for a component-based, reusable UI structure. 🎨 Styled
                with Tailwind CSS for rapid, responsive, and utility-first
                design. 🖥️ Features a modern layout with clean sections like
                hero, features, testimonials, and call-to-action. 📱 Fully
                responsive design, optimized for mobile, tablet, and desktop
                screens.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://landing-page-for-mock-inetrview-application.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* project 7 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                PW Skills: Responsive Landing Page Built with HTML & Tailwind
                CSS
              </h3>
              <p className="text-gray-400 mb-4">
                A fully responsive landing page of the PW Skills website, built
                using HTML5 and Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "Tailwind"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://github.com/Vaibhav979/Tailwind-Project"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* project 8 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Paste: A Simple and Efficient Notes Management App with React
              </h3>
              <p className="text-gray-400 mb-4">
                Developed a user-friendly notes management application that
                allows users to create, update, and delete notes. The app
                enables seamless note-taking and organization. Built with React,
                this project focuses on frontend development best practices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://paste-simple-note-saving-web-app.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* project 9 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Task Manager - A Task Management App built with React and
                Supabase
              </h3>
              <p className="text-gray-400 mb-4">
                Developed a task management application that allows users to
                efficiently create, update, and delete tasks, with a focus on
                user-friendly design and seamless performance. The app utilizes
                React for frontend development and Supabase for backend and
                authentication, ensuring real-time data synchronization and
                secure user management. This project highlights full-stack
                capabilities with modern tools, offering a responsive and
                scalable solution for task organization and collaboration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Supabase(Baas)"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://task-manager-app-react-supabase.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* project 10 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Mock Interview Application (In Progress)
              </h3>
              <p className="text-gray-400 mb-4">
                Building a full-stack mock interview platform using React,
                Spring Boot technologies. Integrating features like voice-based
                responses, AI feedback on content and delivery, and seamless
                backend interaction.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind", "Spring Boot"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://github.com/Vaibhav979/AI-Powered-Mock-Interview-Assistant"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* project 11 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,224,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Social Media Application (In Progress)
              </h3>
              <p className="text-gray-400 mb-4">
                Developing a scalable social media platform using React,
                Tailwind CSS, Spring Boot, Spring Security, and MySQL. Focused
                on implementing key features such as user authentication,
                real-time data updates, and a dynamic user interface for an
                engaging user experience. Emphasizing security with Spring
                Security to ensure safe and efficient user interactions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Tailwind",
                  "Spring Boot",
                  "Spring Security",
                  "MySQL",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://github.com/Vaibhav979/AI-Powered-Mock-Interview-Assistant"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
