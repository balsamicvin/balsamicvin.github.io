import React, { useState } from 'react';
import { Home, Phone, Briefcase, Code, ExternalLink, Github, CheckCircle, Send } from 'lucide-react';

// --- Shared Project Data for Portfolio ---
const mockProjects = [
    {
        id: '1',
        title: 'Real-Time Logistics Dashboard',
        description: 'A full-stack application built using React and Node.js to provide real-time tracking and optimization for delivery logistics. Features include live map updates and anomaly detection.',
        techStack: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
        github: 'https://github.com/qtech/logistics-dashboard',
        preview: 'https://demo.qtech.com/logistics',
    },
    {
        id: '2',
        title: 'SaaS Billing API Integration',
        description: 'Consulting and development of a secure, highly scalable microservice for managing subscription billing and payment processing via Stripe and AWS Lambda.',
        techStack: ['Python/Lambda', 'Stripe API', 'PostgreSQL', 'AWS'],
        github: 'https://github.com/qtech/billing-service',
        preview: 'https://demo.qtech.com/billing-api',
    },
    {
        id: '3',
        title: 'E-commerce Headless CMS',
        description: 'Migration of a legacy e-commerce platform to a modern headless architecture using Next.js and a cloud-based CMS, significantly improving load times and content management workflows.',
        techStack: ['Next.js', 'Sanity/Strapi CMS', 'Tailwind CSS'],
        github: 'https://github.com/qtech/headless-shop',
        preview: 'https://demo.qtech.com/ecommerce',
    },
];


// --- Shared Navigation Component ---
const Navbar = ({ currentPage, setPage }) => {
    const navItems = [
        { name: 'Home', view: 'home', icon: Home, color: 'text-blue-600', activeBg: 'bg-blue-100' },
        { name: 'Portfolio', view: 'portfolio', icon: Code, color: 'text-orange-600', activeBg: 'bg-orange-100' },
        { name: 'Contact Us', view: 'contact', icon: Phone, color: 'text-green-600', activeBg: 'bg-green-100' },
        { name: 'About', view: 'about', icon: Briefcase, color: 'text-indigo-600', activeBg: 'bg-indigo-100' },
    ];

    return (
        <nav className="flex flex-wrap gap-2 p-4 border-b bg-white shadow-sm">
            {navItems.map((item) => {
                const isActive = currentPage === item.view;
                return (
                    <button
                        key={item.view}
                        onClick={() => setPage(item.view)}
                        className={`
                            flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition duration-200
                            ${isActive 
                                ? `${item.activeBg} ${item.color} shadow-inner` 
                                : 'text-gray-700 hover:bg-gray-100'
                            }
                        `}
                    >
                        <item.icon size={20} />
                        <span>{item.name}</span>
                    </button>
                );
            })}
        </nav>
    );
};

// --- View 1: Home Page Component ---
const HomeView = () => (
    <div className="p-8 bg-white">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-4 tracking-tight leading-tight">
            Build the future of your business, one **project** at a time.
        </h2>
        
        {/* Updated Introductory Text - Option 1 */}
        <p className="text-lg text-gray-600 mb-8 border-l-4 border-blue-400 pl-4 py-1">
            **Q Tech Digital LLC** is your partner for **end-to-end digital solutions,** providing **full-stack consulting, development, and expert project management.** Our goal is delivering **robust, scalable web applications,** whether you need a quick-start template or a custom-built scope.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Consulting</h3>
                <p className="text-gray-600">Strategic planning and architectural guidance to ensure a solid foundation for your digital transformation.</p>
            </div>
             <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Development</h3>
                <p className="text-gray-600">Full-stack engineering of robust, high-performance web and mobile applications tailored to your business needs.</p>
            </div>
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Project Management</h3>
                <p className="text-gray-600">Agile methodologies to ensure projects are delivered on time, within budget, and to specification.</p>
            </div>
        </div>
    </div>
);

// --- View 2: Portfolio Page Component ---
const PortfolioView = () => {
    // State to track which project's detail card is currently visible
    const [selectedProject, setSelectedProject] = useState(mockProjects[0]);

    const ProjectDetailCard = ({ project }) => (
        <div className="p-6 bg-orange-50 border border-orange-300 rounded-xl shadow-lg transition duration-300">
            <h3 className="text-3xl font-bold text-orange-700 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 text-sm font-medium bg-orange-200 text-orange-800 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex flex-wrap gap-4">
                <a 
                    href={project.preview} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white bg-orange-600 hover:bg-orange-700 transition px-4 py-2 rounded-lg font-semibold shadow-md"
                >
                    <ExternalLink size={18} />
                    <span>Live Preview</span>
                </a>
                <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-800 bg-gray-200 hover:bg-gray-300 transition px-4 py-2 rounded-lg font-semibold"
                >
                    <Github size={18} />
                    <span>View GitHub</span>
                </a>
            </div>
        </div>
    );

    return (
        <div className="p-8 bg-gray-50">
            <h2 className="text-4xl font-extrabold text-orange-700 mb-6">Our Select Project Portfolio</h2>
            
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column: Project List */}
                <div className="lg:w-1/3 space-y-3 p-4 bg-white rounded-xl shadow-md border border-gray-200">
                    <p className="text-lg font-semibold text-gray-700 border-b pb-2 mb-2">Project List</p>
                    {mockProjects.map(project => (
                        <button
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className={`
                                w-full text-left p-3 rounded-lg transition duration-200 flex items-center justify-between
                                ${selectedProject.id === project.id 
                                    ? 'bg-orange-100 text-orange-700 font-bold border-l-4 border-orange-500' 
                                    : 'text-gray-700 hover:bg-gray-50'
                                }
                            `}
                        >
                            <span>{project.title}</span>
                            {selectedProject.id === project.id && <Code size={18} />}
                        </button>
                    ))}
                </div>

                {/* Right Column: Interactive Preview (Detail Card) */}
                <div className="lg:w-2/3">
                    {selectedProject && <ProjectDetailCard project={selectedProject} />}
                </div>
            </div>

            <p className="mt-8 text-sm text-gray-500 text-center">
                Note: All GitHub links are mock placeholders for demonstration.
            </p>
        </div>
    );
};

// --- View 3: Contact Page Component (UPDATED with API simulation) ---
const ContactView = () => {
    // State to hold form input data
    const [formData, setFormData] = useState({
        name: '',
        clientEmail: '', // Changed name to clarify this is the client's email
        message: '',
    });
    // State to track submission status
    const [isSubmitted, setIsSubmitted] = useState(false);
    // State for loading/sending status
    const [isSending, setIsSending] = useState(false);
    // State for error handling
    const [error, setError] = useState(null);

    // Handler for all input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        // Clear status when user starts typing again
        setIsSubmitted(false);
        setError(null);
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setIsSending(true);
        setError(null);

        // --- PRODUCTION LOGIC START ---
        // This is the actual network request that would hit your Firebase Cloud Function or other backend service.
        // Replace 'YOUR_BACKEND_EMAIL_API_ENDPOINT' with the URL of your deployed function.
        const API_ENDPOINT = 'YOUR_BACKEND_EMAIL_API_ENDPOINT'; // Example: https://us-central1-yourproject.cloudfunctions.net/sendEmail

        try {
            // For demonstration, we'll simulate the network delay
            // In a real app, this is where you'd use fetch:
            /*
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send request. Server error.');
            }
            */
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated 1.5 second delay

            // Success handling after API returns 200/202
            setIsSubmitted(true);
            setFormData({ name: '', clientEmail: '', message: '' }); 

        } catch (err) {
            console.error("Submission error:", err);
            setError("There was a problem submitting your request. Please try again.");
        } finally {
            setIsSending(false);
        }
        // --- PRODUCTION LOGIC END ---
    };

    return (
        <div className="p-8 bg-gray-50">
            <h2 className="text-4xl font-extrabold text-green-700 mb-4">Let's Discuss Your Project</h2>
            <p className="text-gray-600 mb-6">
                Tell us about your digital goals, and we'll provide a roadmap for success. Required fields are marked with an asterisk (*).
            </p>
            
            <form 
                onSubmit={handleSubmit} 
                className="space-y-4 max-w-lg mx-auto p-8 bg-white rounded-xl shadow-2xl border border-green-200"
            >
                <h3 className="text-2xl font-semibold text-green-600">Project Inquiry</h3>

                {/* Success Message */}
                {isSubmitted && (
                    <div className="flex items-center space-x-3 p-4 bg-green-100 text-green-700 rounded-lg border-l-4 border-green-500 transition-opacity duration-500">
                        <CheckCircle size={24} />
                        <span className="font-semibold">Thank you! Your request has been received. We'll be in touch shortly.</span>
                    </div>
                )}
                
                {/* Error Message */}
                {error && (
                    <div className="flex items-center space-x-3 p-4 bg-red-100 text-red-700 rounded-lg border-l-4 border-red-500">
                        <span className="font-semibold">{error}</span>
                    </div>
                )}


                {!isSubmitted && (
                    <>
                        {/* Field 1: Name (REQUIRED) */}
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Your Name *" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isSending}
                            required
                        />
                        
                        {/* Field 2: Email (REQUIRED) */}
                        <input 
                            type="email" 
                            name="clientEmail" // Use clientEmail to prevent naming confusion with your target mailbox
                            placeholder="Your Work Email *" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            value={formData.clientEmail}
                            onChange={handleChange}
                            disabled={isSending}
                            required 
                        />
                        
                        {/* Field 3: Message (OPTIONAL) */}
                        <textarea 
                            name="message"
                            placeholder="Briefly describe your project..." 
                            rows="5" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={isSending}
                        ></textarea>
                        
                        <button 
                            type="submit" 
                            disabled={isSending}
                            className={`w-full py-3 text-white font-bold rounded-lg transition shadow-lg transform hover:scale-[1.01] flex items-center justify-center space-x-2 
                                ${isSending ? 'bg-green-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}
                            `}
                        >
                            {isSending ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    <span>Submit Consultation Request</span>
                                </>
                            )}
                        </button>
                    </>
                )}
            </form>
        </div>
    );
};

// --- View 4: About Page Component ---
const AboutView = () => (
    <div className="p-8 bg-white">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-4">The Q Tech Digital Difference</h2>
        <p className="text-gray-600 mb-6">
            Our mission is to empower businesses with efficient, custom-built digital solutions that solve real-world problems and drive growth.
        </p>
        <div className="space-y-4 text-gray-700 p-6 bg-indigo-50 rounded-xl shadow-inner border border-indigo-200">
            <p className="font-semibold text-indigo-600">Core Values:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>**Transparency:** Clear communication and honest roadmaps from start to finish.</li>
                <li>**Scalability:** Building solutions that grow seamlessly with your business.</li>
                <li>**Quality:** Adherence to modern best practices in coding and security.</li>
            </ul>
        </div>
    </div>
);


// --- Main Application Component (The "Router") ---
const App = () => {
    // 1. Define the state that tracks the current page view
    const [currentPage, setCurrentPage] = useState('home');

    // 2. Function to determine which component to render
    const renderView = () => {
        switch (currentPage) {
            case 'home':
                return <HomeView />;
            case 'portfolio':
                return <PortfolioView />; 
            case 'contact':
                return <ContactView />;
            case 'about':
                return <AboutView />;
            default:
                return <div className="p-8 text-red-500">404: Page Not Found</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-sans">
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
                
                {/* Header */}
                <header className="p-6 bg-gray-900 text-white flex items-center space-x-4">
                    {/* Placeholder for Logo */}
                    <img 
                        src="https://placehold.co/50x50/3498db/ffffff?text=QTD" 
                        alt="Q Tech Digital LLC Logo Placeholder" 
                        className="rounded-full shadow-lg border-2 border-blue-400"
                        // Fallback in case placeholder fails
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/50x50/4f46e5/ffffff?text=Q'; }}
                    />
                    <div className="flex-grow">
                         <h1 className="text-3xl font-bold tracking-wider">Q Tech Digital LLC</h1>
                         <p className="text-sm opacity-75 mt-0.5">Full Stack Consulting & Development</p>
                    </div>
                </header>
                
                {/* Navigation (Always Visible) */}
                <Navbar currentPage={currentPage} setPage={setCurrentPage} />
                
                {/* Main Content Area: Renders the selected component */}
                <main className="min-h-[60vh]">
                    {renderView()}
                </main>

                {/* Footer (Always Visible) */}
                <footer className="p-4 text-center text-xs text-gray-500 border-t bg-gray-50">
                    &copy; {new Date().getFullYear()} Q Tech Digital LLC. All Rights Reserved.
                </footer>
            </div>
        </div>
    );
};

export default App;
