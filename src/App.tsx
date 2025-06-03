import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, User, Briefcase, GraduationCap, Code, Award, Phone} from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a small delay to trigger animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    // Update document title
    document.title = "Abdul Basit Hansi | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-10 transition-all duration-500 ease-in-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Abdul Basit Hansi
            </span>
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-pink-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-pink-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-pink-400 transition-colors">Education</a>
            <a href="#skills" className="hover:text-pink-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Afzalhansi" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abdul-hansi-77ab24259" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className={`absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10`}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 via-purple-900/70 to-pink-800/70"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">
                  Abdul Basit Hansi
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8">Software Engineer</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Driven by a passion for crafting elegant and efficient solutions to complex problems. 
                I specialize in full-stack development, with hands-on expertise in Frontend as well as Backend technologies. 
                My goal is to build scalable, high-performance applications that deliver real value to users and businesses.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Contact Me
                </a>
                <a href="project-root/project/Abdulhansi.pdf" 
                  download="project-root/project/Abdulhansi.pdf"
                  className="px-8 py-3 bg-transparent border border-white/30 rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                   >
                  <Download size={18} />
               Download Resume
               </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/70 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className={`flex items-center gap-3 mb-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
              <User size={24} className="text-pink-400" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-2">
                <div className={`aspect-square rounded-2xl overflow-hidden shadow-xl opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
                  <img 
                    src="afzal2.jpg" 
                    alt="Abdul Basit Hansi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className={`space-y-6 opacity-0 translate-y-10 transition-all duration-1000 delay-500 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
                  <p className="text-lg leading-relaxed">
                    I'm a recent Electronics and Communication Engineering graduate with a strong foundation in software development and a deep passion for technology. 
                     I’m eager to apply my skills in real-world projects that create meaningful impact.
                  </p>
                  <p className="text-lg leading-relaxed">
                   Throughout my academic journey, I’ve focused on building a solid understanding of modern development practices, problem-solving, and collaborative teamwork. 
                    I'm excited to contribute to innovative solutions that help improve lives and make society better through technology.
                  </p>
                  <p className="text-lg leading-relaxed">
                   Outside of tech, I enjoy exploring new ideas, reading about emerging trends, and continuously learning to grow both personally and professionally.
                  </p>
                  <div className="pt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-pink-400 font-medium mb-2">Location</h3>
                      <p>Hubballi, Karnataka</p>
                    </div>
                    <div>
                      <h3 className="text-pink-400 font-medium mb-2">Email</h3>
                      <p>abdul.hansi12@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className={`flex items-center gap-3 mb-12 opacity-0 translate-y-10 transition-all duration-1000 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
              <Briefcase size={24} className="text-pink-400" />
              <h2 className="text-3xl font-bold">Internships</h2>
            </div>
            
            <div className="relative border-l-2 border-white/20 pl-8 ml-4">
              {/* Experience Item 1 */}
              <div className={`mb-12 relative opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
                <div className="absolute -left-[42px] bg-indigo-500 p-2 rounded-full">
                  <Briefcase size={18} />
                </div>
                <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold">Web Development Intern, Elevate Labs (Remote)</h3>
                    <span className="text-pink-400 font-medium">2025 - Present</span>
                  </div>
                  <h4 className="text-lg text-gray-300 mb-4">Elevate Labs.</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Pursuing a one-month remote internship focused on full-stack web development.</li>
                    <li>Gained hands-on experience with front-end and back-end technologies, including responsive design and deployment.</li>
                    <li>Worked with modern web frameworks to build and optimize real-world applications.</li>
                    <li>Collaborated in a team environment, enhancing problem-solving and project management skills.</li>
                  </ul>
                </div>
              </div>

            {/* Experience Item 2 */}
            <div className={`mb-12 relative opacity-0 translate-y-10 transition-all duration-1000 delay-[900ms] ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
              <div className="absolute -left-[42px] bg-emerald-500 p-2 rounded-full">
              <Briefcase size={18} />
              </div>
               <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
               <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
               <h3 className="text-xl font-bold">AI Data Quality Analyst Intern</h3>
                 <span className="text-pink-400 font-medium">Oct 2024- Jan 2025</span>
              </div>
                <h4 className="text-lg text-gray-300 mb-4">Rooman Technologies</h4>
                 <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Completed a Data Analyst internship under VTU focused on data cleaning, transformation, and analysis.</li>
                  <li>Used statistical methods, visualization tools, and basic machine learning algorithms for data insights.</li>
                  <li>Worked on 5 capstone projects and 1 real-world project to apply analytical skills in practice.</li>
                  <li>Internship also included soft skill training by Wadhwani Foundation, and placement support.</li>
                </ul>
              </div>
            </div>

              {/* Experience Item 3 */}
              <div className={`mb-12 relative opacity-0 translate-y-10 transition-all duration-1000 delay-500 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
                <div className="absolute -left-[42px] bg-purple-500 p-2 rounded-full">
                  <Briefcase size={18} />
                </div>
                <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold">Web Development</h3>
                    <span className="text-pink-400 font-medium">Oct 2023 - Nov 2023</span>
                  </div>
                  <h4 className="text-lg text-gray-300 mb-4">Government Tool Room & Training Centre - Hubli</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Completed a 4-week internship in Web Development.</li>
                    <li>Worked with HTML, CSS, PHP, MySQL, and JavaScript.</li>
                    <li>Applied technical skills to develop and enhance real-world web projects.</li>
                    <li>Gained practical experience in both frontend and backend development.</li>
                  </ul>
                </div>
              </div>
              
              {/* Experience Item 4 */}
              <div className={`relative opacity-0 translate-y-10 transition-all duration-1000 delay-700 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
                <div className="absolute -left-[42px] bg-pink-500 p-2 rounded-full">
                  <Briefcase size={18} />
                </div>
                <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold">3-Week Intra-Instutional Intership</h3>
                    <span className="text-pink-400 font-medium">Oct 2022 -Nov 2022</span>
                  </div>
                  <h4 className="text-lg text-gray-300 mb-4">Visvesvaraya Deshpande Institute of Technology</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Gained hands-on experience with various hardware components.</li>
                    <li>Explored techniques in hardware integration and system connectivity.</li>
                    <li>Practiced troubleshooting and performed regular maintenance tasks.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Education Section */}
<section id="education" className="py-20 px-6 bg-black/20">
  <div className="container mx-auto">
    <div className="max-w-3xl mx-auto">
      {/* Section Header */}
      <div className={`flex items-center gap-3 mb-12 opacity-0 translate-y-10 transition-all duration-1000 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
        <GraduationCap size={24} className="text-pink-400" />
        <h2 className="text-3xl font-bold">Education</h2>
      </div>

      {/* Education Timeline Container */}
      <div className="relative border-l-2 border-white/20 pl-8 ml-4 flex flex-col gap-12">
        {/* Item 1 */}
        <div className={`relative transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute -left-[42px] bg-pink-500 p-2 rounded-full">
            <GraduationCap size={18} />
          </div>
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all h-full">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold">Bachelor of Engineering in Electronics & Communication</h3>
              <span className="text-pink-400 font-medium">2021 - 2025</span>
            </div>
            <h4 className="text-lg text-gray-300 mb-4">Visvesvaraya Deshpande Institute of Technology, Haliyal</h4>
            <p className="text-gray-300">
              An ECE graduate engineer is skilled in designing and developing electronic systems, communication networks, and embedded technologies.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className={`relative transition-all duration-1000 delay-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute -left-[42px] bg-purple-500 p-2 rounded-full">
            <GraduationCap size={18} />
          </div>
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all h-full">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold">Secondary Education (Science)</h3>
              <span className="text-pink-400 font-medium">2019 - 2021</span>
            </div>
            <h4 className="text-lg text-gray-300 mb-4">Adarsh Pre-University Science College, Hubli</h4>
            <p className="text-gray-300">
              Completed secondary education in the science stream with a strong foundation in Physics, Chemistry, Mathematics, and Statistics (PCMS).
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className={`relative transition-all duration-1000 delay-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute -left-[42px] bg-green-500 p-2 rounded-full">
            <GraduationCap size={18} />
          </div>
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all h-full">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold">High School</h3>
              <span className="text-pink-400 font-medium">2016 - 2019</span>
            </div>
            <h4 className="text-lg text-gray-300 mb-4">Basel Mission English Medium School, Hubli</h4>
            <p className="text-gray-300">
              Completed high school education with core subjects focusing on foundational knowledge across Science, Mathematics, and English.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className={`flex items-center gap-3 mb-12 opacity-0 translate-y-10 transition-all duration-1000 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
              <Code size={24} className="text-pink-400" />
              <h2 className="text-3xl font-bold">Skills & Technologies</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div className={`opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
                <h3 className="text-xl font-bold mb-6 text-pink-400">Frontend</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS',].map((skill, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Backend */}
              <div className={`opacity-0 translate-y-10 transition-all duration-1000 delay-500 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
                <h3 className="text-xl font-bold mb-6 text-pink-400">Backend</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Node.js', 'Python', 'Django', 'PHP','MYSQL', 'MongoDB'].map((skill, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* DevOps & Tools */}
              <div className={`opacity-0 translate-y-10 transition-all duration-1000 delay-700 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
                <h3 className="text-xl font-bold mb-6 text-pink-400">DevOps Tools & Languages</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Git', 'Docker', 'GitHub', 'AWS','C','C++'].map((skill, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Soft Skills */}
              <div className={`opacity-0 translate-y-10 transition-all duration-1000 delay-900 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
                <h3 className="text-xl font-bold mb-6 text-pink-400">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Team Leadership', 'Project Management', 'Problem Solving', 'Communication', 'Public Speaking','Mentoring'].map((skill, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Projects Section */}
<section id="projects" className="py-20 px-6 bg-black/20">
  <div className="container mx-auto">
    <div className="max-w-3xl mx-auto">
      <div className={`flex items-center gap-3 mb-12 opacity-0 translate-y-10 transition-all duration-1000 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
        <Award size={24} className="text-pink-400" />
        <h2 className="text-3xl font-bold">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className={`opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
          <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all h-full flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="Rice2.png" alt="Project 1" className="w-full h-full object-cover object-center" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Quality Analysis and Classification of Rice Grain Using Image Processing</h3>
              <p className="text-gray-300 mb-4 flex-1">
                Developed an AI-based system using image processing and deep learning (CNN, MobileNet, DenseNet) to classify rice grains by quality. Achieved 96.2% accuracy with DenseNet. Integrated a ReactJS-Flask web interface for real-time image upload and classification, enhancing speed, accuracy, and consistency in rice quality assessment.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">React</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">HTML</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">CSS</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Javascript</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Python</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Flask/Django</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">TensorFlow</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Keras</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Numpy</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Pandas</span>
                    </div>
              <a href="#" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">View Project <ExternalLink size={16} /></a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className={`opacity-0 translate-y-10 transition-all duration-1000 delay-500 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
          <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all h-full flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg" alt="Project 2" className="w-full h-full object-cover object-center" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Online Government Exams Registration Portal</h3>
              <p className="text-gray-300 mb-4 flex-1">
               Developed a user-friendly web portal for government exam registration using HTML, CSS, JavaScript, PHP, and MySQL. Features include secure login, application tracking, automated notifications, and admin tools for managing listings and verifying applicants, streamlining the process for both users and administrators.
              </p>
               <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">React</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">HTML</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">CSS</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Tailwind</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Javascript</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">PHP</span>
                      <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">SQL</span>
                    </div>
              <a href="#" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">View Project <ExternalLink size={16} /></a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className={`opacity-0 translate-y-10 transition-all duration-1000 delay-700 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
          <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all h-full flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="Luggage.jpg" alt="Project 3" className="w-full h-full object-cover object-center" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">IOT Integrated Smart Luggage Management System</h3>
              <p className="text-gray-300 mb-4 flex-1">
                Engineered an IoT-based smart luggage system with GPS and GSM for real-time tracking and geofencing. Designed a mobile app for location updates and theft alerts. Used microcontroller-based, low-power control to enhance baggage security and improve travel efficiency.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Arduino</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">C++</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Bluetooth Module(HC05)</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">GPS Module</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Motor Driver</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">NodeMCU</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Motor</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Bluetooth</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Wheels</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">PCB</span>
              </div>
              <a href="#" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">View Project <ExternalLink size={16} /></a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className={`opacity-0 translate-y-10 transition-all duration-1000 delay-900 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
          <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all h-full flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="Doctor.png" alt="Project 4" className="w-full h-full object-cover object-center" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Prescripto:Personalized Healthcare and Doctor Appointment Platform</h3>
              <p className="text-gray-300 mb-4 flex-1">
             Developed a full-stack healthcare web app using React.js, Node.js, Express, and MongoDB for appointment booking and doctor consultations. Integrated an AI chatbot with NLP for real-time support, enhancing user engagement and accessibility.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">JavaScript</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">React.js</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Node.js</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Tailwind</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Mongobd</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Django</span>
              </div>
              <a href="#" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">View Project <ExternalLink size={16} /></a>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className={`opacity-0 translate-y-10 transition-all duration-1000 delay-[1100ms] ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
          <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all h-full flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src="tesla-coil.jpg" alt="Project 5" className="w-full h-full object-cover object-center" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Tesla Coil: ElectroHarmony – Resonance Radiance</h3>
              <p className="text-gray-300 mb-4 flex-1">
               Designed and implemented a high-frequency Tesla coil to visually demonstrate electromagnetic induction and wireless power transfer. Showcased expertise in high-voltage circuit design, resonant frequency tuning, and rigorous safety protocols for high-energy systems.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Copper Coil</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Battery</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Wires</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">CFL-Bulb</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Capacitor Bank</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Capacitor Bank</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Bleeder Resistors</span>
                <span className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">Circuit Breaker</span>
              </div>
              <a href="#" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors">View Project <ExternalLink size={16} /></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className={`flex items-center gap-3 mb-12 opacity-0 translate-y-10 transition-all duration-1000 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
              <Mail size={24} className="text-pink-400" />
              <h2 className="text-3xl font-bold">Get In Touch</h2>
            </div>
            
            <div className={`bg-white/5 rounded-xl p-8 opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 translate-y-10 transition-all duration-1000 delay-500 ease-out ${isLoaded ? '!opacity-100 !translate-y-0' : ''}`}>
              <div className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={20} />
                </div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <a href="mailto:abdul.hansi12@gmail.com" className="text-gray-300 hover:text-pink-400 transition-colors">
                  abdul.hansi12@gmail.com
                </a>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin size={20} />
                </div>
                <h3 className="text-lg font-medium mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/abdul-hansi-77ab24259" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
                linkedin.com/in/AbdulHansi
                </a>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github size={20} />
                </div>
                <h3 className="text-lg font-medium mb-2">GitHub</h3>
                <a href="https://github.com/Afzalhansi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
                github.com/AfzalHansi
                </a>
              </div>

               <div className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-all">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={20} />
                </div>
                <h3 className="text-lg font-medium mb-2">Contact Number</h3>
                <a href="tel:+918884176312" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
                  8884176312
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Abdul Basit Hansi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;