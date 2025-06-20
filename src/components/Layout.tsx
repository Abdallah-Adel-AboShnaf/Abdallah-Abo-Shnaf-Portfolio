
import { useState } from "react";
import { Menu, X, Home, User, Briefcase, Book, Award, Contact } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: Book },
    { name: "Skills", href: "#skills", icon: Award },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Certifications", href: "#certifications", icon: Award },
    { name: "Contact", href: "#contact", icon: Contact },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Horizontal Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Portfolio
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 text-sm"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white/90 backdrop-blur-sm border-slate-200 hover:bg-white h-10 w-10"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/20" onClick={() => setIsOpen(false)}>
          <div className="fixed top-14 sm:top-16 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-b border-slate-200 max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-3 py-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 text-sm"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;
