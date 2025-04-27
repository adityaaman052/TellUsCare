// AddInBulk.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Download, FileText, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

const AddInBulk: React.FC = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Check if file is CSV or Excel
      const validExtensions = ['.csv', '.xlsx', '.xls'];
      const fileExtension = selectedFile.name.substring(selectedFile.name.lastIndexOf('.')).toLowerCase();
      
      if (validExtensions.includes(fileExtension)) {
        setFile(selectedFile);
        setUploadError(false);
        setErrorMessage('');
      } else {
        setFile(null);
        setUploadError(true);
        setErrorMessage('Please upload a valid CSV or Excel file.');
      }
    }
  };

  const handleUpload = () => {
    if (!file) {
      setUploadError(true);
      setErrorMessage('Please select a file to upload.');
      return;
    }

    setIsUploading(true);
    setUploadError(false);
    setErrorMessage('');

    // Simulate API call with timeout
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      
      // Reset after a few seconds
      setTimeout(() => {
        setUploadSuccess(false);
      }, 3000);
    }, 2000);
  };

  const downloadTemplate = () => {
    // In a real application, this would trigger a file download
    console.log('Downloading template file...');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Navigation */}
      <div className="bg-white py-4 px-6 shadow-md">
        <div className="flex flex-wrap justify-center gap-2">
          <button 
            onClick={() => navigate('/interview')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            INTERVIEW
          </button>
          
          <button 
            onClick={() => navigate('/add-employee')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            ADD EMPLOYEE
          </button>
          
          <button 
            onClick={() => navigate('/add-in-bulk')}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            ADD IN BULK
          </button>
          
          <button 
            onClick={() => navigate('/listing')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            LISTING
          </button>
          
          <button 
            onClick={() => navigate('/attendance')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            ATTENDANCE
          </button>
          
          <button 
            onClick={() => navigate('/work-status')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            WORK STATUS
          </button>
          
          <button 
            onClick={() => navigate('/reward')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            REWARD
          </button>
          
          <button 
            onClick={() => navigate('/application-status')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            STATUS OF APPLICATION
          </button>
          
          <button 
            onClick={() => navigate('/performance')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            PERFORMANCE
          </button>
          
          <button 
            onClick={() => navigate('/salary')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            SALARY
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate('/interview')}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={20} className="mr-1" />
            Back to Dashboard
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-6">Add Employees in Bulk</h1>
          
          <div className="space-y-8">
            {/* Template Download Section */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-lg font-medium text-blue-800 mb-2">Download Template</h3>
              <p className="text-blue-600 mb-4">Download our template file to ensure your data is formatted correctly.</p>
              <button 
                onClick={downloadTemplate}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                <Download size={18} />
                Download CSV Template
              </button>
            </div>
            
            {/* File Upload Section */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <FileText size={48} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">Upload Employee Data</h3>
              <p className="text-gray-500 mb-6">Upload a CSV or Excel file with your employee data</p>
              
              <div className="flex flex-col items-center">
                <label htmlFor="file-upload" className="cursor-pointer flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4">
                  <Upload size={18} />
                  Select File
                </label>
                <input 
                  id="file-upload" 
                  type="file" 
                  accept=".csv, .xlsx, .xls" 
                  className="hidden"
                  onChange={handleFileChange}
                />
                
                {file && (
                  <div className="text-sm text-gray-600 mb-4">
                    Selected file: {file.name}
                  </div>
                )}
                
                <button 
                  onClick={handleUpload}
                  disabled={isUploading || !file}
                  className={`w-full md:w-auto flex items-center justify-center gap-2 px-6 py-2 rounded transition ${
                    isUploading || !file 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-green-500 text-white hover:bg-green-600'
                  }`}
                >
                  {isUploading ? 'Uploading...' : 'Upload File'}
                </button>
              </div>
            </div>
            
            {/* Status Messages */}
            {uploadSuccess && (
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                <CheckCircle size={20} className="text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-green-800">Upload Successful</h3>
                  <p className="text-green-600">Your file has been uploaded and processed successfully.</p>
                </div>
              </div>
            )}
            
            {uploadError && (
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                <AlertCircle size={20} className="text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-red-800">Upload Failed</h3>
                  <p className="text-red-600">{errorMessage}</p>
                </div>
              </div>
            )}
            
            {/* Instructions */}
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Instructions</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Use our template file to ensure your data is formatted correctly.</li>
                <li>Make sure all required fields are filled in properly.</li>
                <li>Name, Email, and Phone Number are required fields.</li>
                <li>Date formats should be in DD-MM-YYYY format.</li>
                <li>The system will validate your data before importing.</li>
                <li>A success report will be generated after successful import.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white py-4 text-center text-gray-500 text-sm mt-12">
        Copyright © 2025 HR-Learn.com
      </div>
    </div>
  );
};

export default AddInBulk;