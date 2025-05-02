import { useState } from 'react';
import { Save, Building, Compass, Target, Briefcase, History, HelpCircle, Award, BookOpen } from 'lucide-react';

export default function AboutUs() {
  // Initial content for each section
  const [aboutUsContent, setAboutUsContent] = useState('');
  const [strategicIdeaContent, setStrategicIdeaContent] = useState('');
  const [visionContent, setVisionContent] = useState('');
  const [missionContent, setMissionContent] = useState('');
  const [whatWeDoContent, setWhatWeDoContent] = useState('');
  const [supportContent, setSupportContent] = useState('');
  const [historyContent, setHistoryContent] = useState('');
  const [professionalWorkContent, setProfessionalWorkContent] = useState('');
  const [nameContent, setNameContent] = useState('');
  const [serviceContent, setServiceContent] = useState('');

  // Function to handle the update button
  const handleUpdate = () => {
    // In a real application, this would save to backend
    console.log('Content updated successfully');
    // Here you might also trigger a notification/toast to indicate success
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <BookOpen className="mr-2 text-blue-500" size={28} />
          About Us Page
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Us Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-700 uppercase flex items-center">
              <Building className="mr-2 text-blue-500" size={20} />
              About Us
            </h2>
            <textarea
              value={aboutUsContent}
              onChange={(e) => setAboutUsContent(e.target.value)}
              className="w-full h-56 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter information about your company..."
            />
          </div>

          {/* Strategic Idea Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-700 uppercase flex items-center">
              <Compass className="mr-2 text-blue-500" size={20} />
              Strategic Idea
            </h2>
            <textarea
              value={strategicIdeaContent}
              onChange={(e) => setStrategicIdeaContent(e.target.value)}
              className="w-full h-56 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe your strategic approach..."
            />
          </div>

          {/* Vision Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-700 uppercase flex items-center">
              <Target className="mr-2 text-blue-500" size={20} />
              Vision
            </h2>
            <textarea
              value={visionContent}
              onChange={(e) => setVisionContent(e.target.value)}
              className="w-full h-56 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Share your vision for the future..."
            />
          </div>

          {/* Mission Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-700 uppercase flex items-center">
              <Briefcase className="mr-2 text-blue-500" size={20} />
              Mission
            </h2>
            <textarea
              value={missionContent}
              onChange={(e) => setMissionContent(e.target.value)}
              className="w-full h-56 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Define your mission statement..."
            />
          </div>

          {/* What We Do Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-700 uppercase flex items-center">
              <Award className="mr-2 text-blue-500" size={20} />
              What We Do
            </h2>
            <textarea
              value={whatWeDoContent}
              onChange={(e) => setWhatWeDoContent(e.target.value)}
              className="w-full h-56 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe your services and offerings..."
            />
          </div>

          {/* 360 Degree Support Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-700 uppercase flex items-center">
              <HelpCircle className="mr-2 text-blue-500" size={20} />
              360 Degree Support
            </h2>
            <textarea
              value={supportContent}
              onChange={(e) => setSupportContent(e.target.value)}
              className="w-full h-56 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Explain your comprehensive support services..."
            />
          </div>

          {/* Our History Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-700 uppercase flex items-center">
              <History className="mr-2 text-blue-500" size={20} />
              Our History
            </h2>
            <textarea
              value={historyContent}
              onChange={(e) => setHistoryContent(e.target.value)}
              className="w-full h-56 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Share your company's journey and milestones..."
            />
          </div>

          {/* Our Professional Work Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-700 uppercase flex items-center">
              <Briefcase className="mr-2 text-blue-500" size={20} />
              Our Professional Work
            </h2>
            <textarea
              value={professionalWorkContent}
              onChange={(e) => setProfessionalWorkContent(e.target.value)}
              className="w-full h-56 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Highlight your professional achievements and portfolio..."
            />
          </div>

          {/* Give Name To It Section (from first image) */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-700 uppercase flex items-center">
              <BookOpen className="mr-2 text-blue-500" size={20} />
              Give Name To It
            </h2>
            <textarea
              value={nameContent}
              onChange={(e) => setNameContent(e.target.value)}
              className="w-full h-56 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Name your project or initiative..."
            />
          </div>

          {/* Service & Support Section (from first image) */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-700 uppercase flex items-center">
              <HelpCircle className="mr-2 text-blue-500" size={20} />
              Service & Support
            </h2>
            <textarea
              value={serviceContent}
              onChange={(e) => setServiceContent(e.target.value)}
              className="w-full h-56 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe your service and support offerings..."
            />
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleUpdate}
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-md"
          >
            <Save className="mr-2" size={20} />
            UPDATE
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()} | Designed by Your Company
        </div>
      </div>
    </div>
  );
}