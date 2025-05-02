import { useState } from 'react';
import { 
  FileText,

  AlignLeft,
  AlignCenter,
  AlignJustify,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  Undo,
  Redo
} from 'lucide-react';

export default function StaticPages() {
  // State for form inputs
  const [mainPage, setMainPage] = useState('');
  const [subPage, setSubPage] = useState('');
  const [status, setStatus] = useState('Active');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaKeyword, setMetaKeyword] = useState('');
  const [canonical, setCanonical] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [pageDescription, setPageDescription] = useState('');
  
  // State for text editor font size
  const [fontSize, setFontSize] = useState('15');
  
  // Mock function for rich text editor actions
  const handleFormatAction = (action: string) => {
    console.log(`Format action: ${action}`);
    // In a real app, this would apply formatting to the selected text
  };
  
  // Handle update button click
  const handleUpdate = () => {
    console.log('Updating page with form data:', {
      mainPage,
      subPage,
      status,
      metaTitle,
      metaKeyword,
      canonical,
      metaDescription,
      pageDescription
    });
    // In a real app, this would send the data to an API endpoint
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
          <FileText className="mr-2 text-blue-500" size={24} />
          Page Management
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Main Page Dropdown */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 uppercase">Main Page</label>
            <select
              value={mainPage}
              onChange={(e) => setMainPage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="home">Home</option>
              <option value="about">About</option>
              <option value="services">Services</option>
              <option value="contact">Contact</option>
            </select>
          </div>

          {/* Sub Page Dropdown */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 uppercase">Sub Page</label>
            <select
              value={subPage}
              onChange={(e) => setSubPage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              <option value="team">Our Team</option>
              <option value="history">Our History</option>
              <option value="mission">Our Mission</option>
              <option value="vision">Our Vision</option>
            </select>
          </div>

          {/* Status Dropdown */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 uppercase">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Meta Title Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 uppercase">Meta Title</label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter meta title"
            />
          </div>

          {/* Meta Keyword Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 uppercase">Meta Keyword</label>
            <input
              type="text"
              value={metaKeyword}
              onChange={(e) => setMetaKeyword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter meta keywords"
            />
          </div>

          {/* Canonical URL Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 uppercase">Canonical</label>
            <input
              type="text"
              value={canonical}
              onChange={(e) => setCanonical(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter canonical URL"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Meta Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 uppercase">Meta Description</label>
            <textarea
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              className="w-full h-60 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter meta description"
            />
          </div>

          {/* Page Description with Rich Text Editor */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 uppercase">Page Description</label>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              {/* Rich Text Editor Toolbar */}
              <div className="flex flex-wrap items-center gap-1 p-2 bg-gray-50 border-b border-gray-300">
                <button 
                  onClick={() => handleFormatAction('undo')}
                  className="p-1 rounded hover:bg-gray-200"
                  title="Undo"
                >
                  <Undo size={16} />
                </button>
                <button 
                  onClick={() => handleFormatAction('redo')}
                  className="p-1 rounded hover:bg-gray-200"
                  title="Redo"
                >
                  <Redo size={16} />
                </button>
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                <button 
                  onClick={() => handleFormatAction('bold')}
                  className="p-1 rounded hover:bg-gray-200"
                  title="Bold"
                >
                  <Bold size={16} />
                </button>
                <button 
                  onClick={() => handleFormatAction('italic')}
                  className="p-1 rounded hover:bg-gray-200"
                  title="Italic"
                >
                  <Italic size={16} />
                </button>
                <button 
                  onClick={() => handleFormatAction('underline')}
                  className="p-1 rounded hover:bg-gray-200"
                  title="Underline"
                >
                  <Underline size={16} />
                </button>
                <button 
                  onClick={() => handleFormatAction('strikethrough')}
                  className="p-1 rounded hover:bg-gray-200"
                  title="Strikethrough"
                >
                  <Strikethrough size={16} />
                </button>
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="p-1 border border-gray-300 rounded text-sm"
                >
                  <option value="12">12</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                  <option value="24">24</option>
                </select>
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                <button 
                  onClick={() => handleFormatAction('color')}
                  className="p-1 rounded hover:bg-gray-200 flex items-center"
                  title="Text Color"
                >
                  <span className="text-yellow-500">A</span>
                </button>
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                <button 
                  onClick={() => handleFormatAction('bulletList')}
                  className="p-1 rounded hover:bg-gray-200"
                  title="Bullet List"
                >
                  <List size={16} />
                </button>
                <button 
                  onClick={() => handleFormatAction('numberedList')}
                  className="p-1 rounded hover:bg-gray-200"
                  title="Numbered List"
                >
                  <ListOrdered size={16} />
                </button>
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                <button 
                  onClick={() => handleFormatAction('alignLeft')}
                  className="p-1 rounded hover:bg-gray-200"
                  title="Align Left"
                >
                  <AlignLeft size={16} />
                </button>
                <button 
                  onClick={() => handleFormatAction('alignCenter')}
                  className="p-1 rounded hover:bg-gray-200"
                  title="Align Center"
                >
                  <AlignCenter size={16} />
                </button>
                <button 
                  onClick={() => handleFormatAction('alignJustify')}
                  className="p-1 rounded hover:bg-gray-200"
                  title="Align Justify"
                >
                  <AlignJustify size={16} />
                </button>
              </div>
              
              {/* Text Editor Content Area */}
              <textarea
                value={pageDescription}
                onChange={(e) => setPageDescription(e.target.value)}
                className="w-full h-52 p-3 border-0 focus:ring-0"
                placeholder="Enter page description"
              />
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-6">
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()} | Teluscare.com
        </div>
      </div>
    </div>
  );
}