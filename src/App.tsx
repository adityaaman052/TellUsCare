import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Navbar } from './components/layout/Navbar';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { ChatPage } from './pages/dashboard/ChatPage';
import { Profile } from './pages/company/Profile';
import LookingFor from './pages/company/LookingFor';
import Category from './pages/products/Category';
import SubProduct from './pages/products/Subproducts';
import FAQ from './pages/products/Faq';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/chat" element={<ChatPage />} />
              <Route path="/company/manage" element={<Profile />} />
              <Route path="/company/lookingfor" element={<LookingFor />} />
              <Route path="/products/category" element={<Category />} />
              <Route path="/products/subproduct" element={<SubProduct />} />
              <Route path="/products/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;