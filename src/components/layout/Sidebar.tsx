"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  MessageCircle,
  Building2,
  ShoppingCart,
  BadgeDollarSign,
  Settings,
  Users,
  Calculator,
  FileText,
  Globe,
  Menu,
} from "lucide-react"

// Recursive Type Definition
interface NavItemProps {
  title: string
  path?: string
  icon?: React.ReactNode
  children?: NavItemProps[]
}

const navItems: NavItemProps[] = [
  {
    title: "Manage Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    children: [
      { title: "Dashboard", path: "/dashboard" },
      { title: "Chat", path: "/dashboard/chat" },
    ],
  },
  {
    title: "Manage Company Details",
    icon: <Building2 className="w-5 h-5" />,
    children: [
      { title: "Manage Company", path: "/company/manage" },
      { title: "Manage looking for", path: "/company/lookingfor" },
    ],
  },
  {
    title: "Manage Products and Services and Rate",
    icon: <ShoppingCart className="w-5 h-5" />,
    children: [
      { title: "Manage Category", path: "/products/category" },
      { title: "Manage Product & Subproduct", path: "/products/subproduct" },
      { title: "Manage Faq", path: "/products/faq" },
    ],
  },
  {
    title: "Manage Marketing and Sales",
    icon: <BadgeDollarSign className="w-5 h-5" />,
    children: [
      { title: "Manage Prospects", path: "/marketing/prospects" },
      {
        title: "Manage Enquiry",
        children: [
          {
            title: "Insurance",
            children: [
              { title: "Health Insurance", path: "/marketing/enquiry/insurance/health" },
              { title: "Motor Insurance", path: "/marketing/enquiry/insurance/motor" },
            ],
          },
          {
            title: "Facility Management",
            children: [
              { title: "Cleaning Service", path: "/marketing/enquiry/facility/cleaning" },
              { title: "Pest Control Service", path: "/marketing/enquiry/facility/pest-control" },
              { title: "Technical Service", path: "/marketing/enquiry/facility/technical" },
            ],
          },
          {
            title: "Vehicle Services",
            children: [
              { title: "Motor Servicing", path: "/marketing/enquiry/vehicle/motor-servicing" },
              { title: "Car Tow", path: "/marketing/enquiry/vehicle/car-tow" },
              { title: "Car Wash", path: "/marketing/enquiry/vehicle/car-wash" },
              { title: "Car Repair", path: "/marketing/enquiry/vehicle/car-repair" },
            ],
          },
          {
            title: "Join Portal",
            children: [
              { title: "Consumer", path: "/marketing/enquiry/join-portal/consumer" },
              { title: "Agent", path: "/marketing/enquiry/join-portal/agent" },
              { title: "SBP", path: "/marketing/enquiry/join-portal/sbp" },
              { title: "Advertise With Us", path: "/marketing/enquiry/join-portal/advertise" },
            ],
          },
          {
            title: "General Enquiry",
            children: [
              { title: "Consumer", path: "/marketing/enquiry/general/consumer" },
              { title: "Agent", path: "/marketing/enquiry/general/agent" },
              { title: "SBP", path: "/marketing/enquiry/general/sbp" },
              { title: "Advertise With Us", path: "/marketing/enquiry/general/advertise" },
            ],
          },
          {
            title: "Email Company Profile",
            children: [
              { title: "Consumer", path: "/marketing/enquiry/email-profile/consumer" },
              { title: "Agent", path: "/marketing/enquiry/email-profile/agent" },
              { title: "SBP", path: "/marketing/enquiry/email-profile/sbp" },
              { title: "Advertise With Us", path: "/marketing/enquiry/email-profile/advertise" },
            ],
          },
        ],
      },
      { title: "Manage Quote", path: "/marketing/quote" },
      { title: "Quotation Request", path: "/marketing/request" },
      { title: "CRM", path: "/marketing/crm" },
    ],
  },
  {
    title: "Manage Operations",
    icon: <Settings className="w-5 h-5" />,
    children: [
      {
        title: "Add Order",
        children: [
          { title: "Health Insurance", path: "/operations/add-order/health-insurance" },
          { title: "Motor Insurance", path: "/operations/add-order/motor-insurance" },
          { title: "Facility Services", path: "/operations/add-order/facility-services" },
          { title: "Technical Service", path: "/operations/add-order/technical-service" },
          {
            title: "Vehicle Management",
            children: [
              { title: "Vehicle Servicing", path: "/operations/add-order/vehicle/servicing" },
              { title: "Car Wash", path: "/operations/add-order/vehicle/car-wash" },
              { title: "Car Tow", path: "/operations/add-order/vehicle/car-tow" },
              { title: "Car Repair", path: "/operations/add-order/vehicle/car-repair" },
            ],
          },
        ],
      },
      { title: "Order Management", path: "/operations/order-management" },
      { title: "Manage Members", path: "/operations/manage-members" },
      {
        title: "Manage Providers",
        children: [
          { title: "Manage Providers", path: "/operations/providers/manage" },
          { title: "List View", path: "/operations/providers/list" },
          { title: "Master View", path: "/operations/providers/master" },
        ],
      },
      {
        title: "Master Schedules",
        children: [
          { title: "Calendar View", path: "/operations/schedules/calendar" },
          { title: "List View", path: "/operations/schedules/list" },
        ],
      },
      {
        title: "Service Claim",
        children: [
          { title: "Cleaning", path: "/operations/claim/cleaning" },
          { title: "Pest Control", path: "/operations/claim/pest-control" },
          { title: "Technical Service", path: "/operations/claim/technical" },
        ],
      },
    ],
  },
  {
    title: "Manage HR and Admin",
    icon: <Users className="w-5 h-5" />,
    children: [
      { title: "Interview", path: "/hr/interview" },
      { title: "Add Employee", path: "/hr/addEmployees" },
      { title: "Add in Bulk", path: "/hr/addInBulk" },
      { title: "Listing", path: "/hr/listing" },
      { title: "Attendance", path: "/hr/attendance" },
      { title: "Work status", path: "/hr/workStatus" },
      { title: "Reward", path: "/hr/reward" },
      { title: "Status of Application", path: "/hr/statusOfApplication" },
      { title: "Performance", path: "/hr/performance" },
      { title: "Salary", path: "/hr/salary" },
    ],
  },
  {
    title: "Manage A/C and Finances",
    icon: <Calculator className="w-5 h-5" />,
    children: [
      { title: "Accounts", path: "/finance/accounts" },
      { title: "Transactions", path: "/finance/transactions" },
      { title: "Reports", path: "/finance/reports" },
    ],
  },
  {
    title: "Op & Admin Expenses",
    icon: <FileText className="w-5 h-5" />,
    children: [
      { title: "Petty Cash", path: "/expense/cash" },
      { title: "Rent of Branch", path: "/expense/rent" },
      { title: "Utility Payment", path: "/expense/utilityPayment" },
      { title: "Stationary", path: "/expense/stationary" },
    ],
  },
  {
    title: "Manage Other",
    icon: <MessageCircle className="w-5 h-5" />,
    children: [
      { title: "Offer & Discount", path: "/manageOther/offer" },
      { title: "Manage Health Docs", path: "/manageOther/health-docs" },
      { title: "Manage Motor Docs", path: "/manageOther/motor-docs" },
      { title: "Create Role & Access", path: "/manageOther/roleAccess" },
      { title: "View Role & Access", path: "/manageOther/viewRoleAccess" },
    ],
  },
  {
    title: "Manage Setting",
    icon: <Users className="w-5 h-5" />,
    children: [
      { title: "Create Plan", path: "/setting/create" },
      { title: "Access Plan", path: "/setting/assign" },
    ],
  },
  {
    title: "Manage Website Content",
    icon: <Globe className="w-5 h-5" />,
    children: [
      { title: "Manage Contacts", path: "/website/manage-contacts" },
      { title: "Static Pages", path: "/website/static-pages" },
      { title: "About Us Page", path: "/website/about-us" },
      { title: "Manage Testimonials", path: "/website/testimonials" },
      { title: "Manage Meta", path: "/website/meta" },
      { title: "Manage Blog", path: "/website/blog" },
      { title: "Manage Newsletter", path: "/website/newsletter" },
      {
        title: "Manage SEO",
        children: [
          { title: "SEO", path: "/website/seo" },
          { title: "Bulk Update", path: "/website/seo/bulk-update" },
        ],
      },
      {
        title: "Manage FAQs",
        children: [
          { title: "View FAQ", path: "/website/faqs/view" },
          { title: "Add FAQ", path: "/website/faqs/add" },
          { title: "Map FAQ", path: "/website/faqs/map" },
        ],
      },
      {
        title: "Manage Cookie Setting",
        children: [
          { title: "Add Cookie Setting", path: "/website/cookies/add" },
          { title: "View Cookie Setting", path: "/website/cookies/view" },
        ],
      },
      {
        title: "Manage Services",
        children: [
          {
            title: "Insurance",
            children: [
              { title: "Health Insurance", path: "/website/services/insurance/health" },
              { title: "Motor Insurance", path: "/website/services/insurance/motor" },
            ],
          },
          {
            title: "Facility Management",
            children: [
              { title: "Cleaning Service", path: "/website/services/facility/cleaning" },
              { title: "Pest Control Service", path: "/website/services/facility/pest-control" },
              { title: "Technical Service", path: "/website/services/facility/technical" },
            ],
          },
          {
            title: "Vehicle Management",
            children: [
              { title: "Vehicle Servicing", path: "/website/services/vehicle/servicing" },
              { title: "Car Wash", path: "/website/services/vehicle/car-wash" },
              { title: "Car Tow", path: "/website/services/vehicle/car-tow" },
              { title: "Car Repair", path: "/website/services/vehicle/car-repair" },
            ],
          },
        ],
      },
    ],
  },

  {
    title: "Manage Customer",
    icon: <Globe className="w-5 h-5" />,
    children: [
      { title: "Customer Care", path: "/customer/care" },
      { title: "Send Message", path: "/customer/message" },
    ],
  },
]

const NavItem = ({ item }: { item: NavItemProps }) => {
  const [isOpen, setIsOpen] = useState(false)

  const hasChildren = item.children && item.children.length > 0

  return (
    <div>
      <button
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        <span className="flex-1 text-left">{item.title}</span>
        {hasChildren && (isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />)}
      </button>

      {isOpen && hasChildren && (
        <div className="ml-6">
          {item.children!.map((child, idx) => (
            <div key={idx}>
              {child.path ? (
                <Link
                  to={child.path}
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  {child.title}
                </Link>
              ) : (
                <NavItem item={child} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true)

  return (
    <div className="relative flex">
      {/* Toggle Button */}
      <button
      onClick={() => setSidebarVisible(!sidebarVisible)}
      className={`fixed z-20 p-2 bg-white border border-gray-200 rounded-md shadow-md top-3 ${
        sidebarVisible ? "left-52 md:left-04" : "left-2"
      }`}
      aria-label="Toggle Sidebar"
      >
      <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div className={`${sidebarVisible ? "block" : "hidden"} transition-all duration-300`}>
        <div className="w-64 h-screen bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">Teluscare Sitepanel</h2>
          </div>
          <nav className="mt-4">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
