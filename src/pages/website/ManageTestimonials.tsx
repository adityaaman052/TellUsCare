import { useState } from "react";
import { Search, PlusCircle, Edit2, Trash2, MessageSquare, Star, User, Award } from "lucide-react";

export default function ManageTestimonials() {
  const [searchTerm, setSearchTerm] = useState("");
  const [testimonials] = useState<{ name: string; text: string; rating: number }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const handleAddTestimonial = () => {
    // Handle adding a new testimonial
    console.log("Add testimonial clicked");
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Award className="text-blue-600 h-8 w-8" />
            <h1 className="text-3xl font-bold text-gray-800">Testimonials</h1>
          </div>
          <button 
            onClick={handleAddTestimonial}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <PlusCircle size={18} />
            <span>Post Testimonial</span>
          </button>
        </div>

        <div className="mb-8">
          <div className="flex gap-2">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name or email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={handleSearch}
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-md transition-colors"
            >
              GO
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <User className="text-gray-500" size={16} />
                    <span className="font-medium">{testimonial.name}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit2 size={16} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{testimonial.text}</p>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <MessageSquare className="text-gray-400 h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">No record(s) found!</h3>
            <p className="text-gray-500 mt-2">Try different search terms or add a new testimonial.</p>
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          Copyright © 2025 Talkspace.com
        </div>
      </div>
    </div>
  );
}