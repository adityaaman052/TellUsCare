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
import Prospects from './pages/marketing/Prospects';
import Health from './pages/marketing/enquiry/insurance/Health';
import Quotation from './pages/marketing/Quotation';
import QuotRequest from './pages/marketing/QuotRequest';
import AssignProviders from './pages/marketing/AssignProvider';
import Motor from './pages/marketing/enquiry/insurance/Motor';
import Cleaning from './pages/marketing/enquiry/facilityManagement/Cleaning';
import PestControl from './pages/marketing/enquiry/facilityManagement/PestControl';
import TechnicalService from './pages/marketing/enquiry/facilityManagement/TechnicalService';
import CarTow from './pages/marketing/enquiry/vehicleServices/CarTow';
import MotorService from './pages/marketing/enquiry/vehicleServices/MotorService';
import CarWash from './pages/marketing/enquiry/vehicleServices/CarWash';
import CarRepair from './pages/marketing/enquiry/vehicleServices/CarRepair';
import Consumer from './pages/marketing/enquiry/joinPortal/Consumer';
import Agent from './pages/marketing/enquiry/joinPortal/Agent';
import SBP from './pages/marketing/enquiry/joinPortal/SBP';
import Advertise from './pages/marketing/enquiry/joinPortal/Advertise';
import Interview from './pages/hr/Interview';
import AddEmployees from './pages/hr/AddEmployees';
import AddInBulk from './pages/hr/AddInBulk';
import Attendance from './pages/hr/Attendance';
import PettyCash from './pages/opAdminExpenses/PettyCash';
import RentOfBranch from './pages/opAdminExpenses/RentofBranch';
import UtilityPayment from './pages/opAdminExpenses/UtilityPayment';
import Stationary from './pages/opAdminExpenses/Stationary';
import CreatePlan from './pages/setting/CreatePlan';
import AssignPlan from './pages/setting/AssignPlan';
import Care from './pages/customer/Care';
import Message from './pages/customer/Message';

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
              <Route path="/marketing/prospects" element={<Prospects />} />
              <Route path="/marketing/enquiry/insurance/health" element={<Health />} />
              <Route path="/marketing/enquiry/insurance/motor" element={<Motor />} />
              <Route path="/marketing/enquiry/facility/cleaning" element={<Cleaning />} />
              <Route path="/marketing/enquiry/facility/pest-control" element={<PestControl />} />
              <Route path="/marketing/enquiry/facility/technical" element={<TechnicalService />} />
              <Route path="/marketing/enquiry/vehicle/car-tow" element={<CarTow />} />
              <Route path="/marketing/enquiry/vehicle/motor-servicing" element={<MotorService />} />
              <Route path="/marketing/enquiry/vehicle/car-wash" element={<CarWash />} />
              <Route path="/marketing/enquiry/vehicle/car-repair" element={<CarRepair />} />
              <Route path="/marketing/enquiry/join-portal/consumer" element={<Consumer />} />
              <Route path="/marketing/enquiry/join-portal/agent" element={<Agent />} />
              <Route path="/marketing/enquiry/join-portal/sbp" element={<SBP />} />
              <Route path="/marketing/enquiry/join-portal/advertise" element={<Advertise />} />
              <Route path="/marketing/enquiry/general/consumer" element={<Consumer />} />
              <Route path="/marketing/enquiry/general/agent" element={<Agent />} />
              <Route path="/marketing/enquiry/general/sbp" element={<Motor />} />
              <Route path="/marketing/enquiry/general/advertise" element={<Motor />} />
              <Route path="/marketing/enquiry/email-profile/consumer" element={<Motor />} />
              <Route path="/marketing/enquiry/email-profile/agent" element={<Motor />} />
              <Route path="/marketing/enquiry/email-profile/sbp" element={<Motor />} />
              <Route path="/marketing/enquiry/email-profile/advertise" element={<Motor />} />



              <Route path="/marketing/quote" element={<Quotation />} />
              <Route path="/marketing/request" element={<QuotRequest />} />
              <Route path="/marketing/request/assignProvider" element={<AssignProviders />} />
              <Route path="/hr/interview" element={<Interview />} />
              <Route path="/hr/addEmployees" element={<AddEmployees />} />
              <Route path="/hr/addInBulk" element={<AddInBulk />} />
              <Route path="/hr/attendance" element={<Attendance />} />
              <Route path="/expense/cash" element={<PettyCash />} />
              <Route path="/expense/rent" element={<RentOfBranch />} />
              <Route path="/expense/utilityPayment" element={<UtilityPayment />} />
              <Route path="/expense/stationary" element={<Stationary />} />
              <Route path="/customer/message" element={<Message />} />
              <Route path="/customer/care" element={<Care />} />
              <Route path="/customer/care" element={<Stationary />} />
              <Route path="/setting/create" element={<CreatePlan />} />
              <Route path="/setting/assign" element={<AssignPlan />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;