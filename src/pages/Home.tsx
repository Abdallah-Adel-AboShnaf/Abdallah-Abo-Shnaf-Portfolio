
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Linkedin, Github } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
          {/* Hero Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/lovable-uploads/097f3196-c743-4c18-8052-1eb8d0d60b71.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block sm:inline">
                  <TypeAnimation
                    sequence={[
                      'Abdallah Adel',
                      2000,
                      '',
                      500,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    cursor={true}
                  />
                </span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6 sm:mb-8 max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                <TypeAnimation
                  sequence={[
                    'Data Scientist',
                    2000,
                    'Data Analyst',
                    2000,
                    'Machine Learning Expert',
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </p>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2">
                I turn data into direction. With a focus on machine learning, analytics, and visualization, I build smart solutions that simplify complexity and deliver real-world impact.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link to="/about" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-sm sm:text-base">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-slate-300 hover:bg-slate-50 text-sm sm:text-base"
              onClick={() => window.open("https://drive.google.com/file/d/1Z1M18WNf78iBTE9rpnbN1FqK9dtvBI23/view?usp=sharing", "_blank")}
            >
              Download CV
              <Download className="mr-2 h-4 w-4" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 px-2">
            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-sm sm:text-base text-slate-600">Years Experience</div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-2">7+</div>
                <div className="text-sm sm:text-base text-slate-600">Projects Completed</div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-sm sm:text-base text-slate-600">Certifications</div>
              </div>
            </Card>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-3 sm:space-x-4 pt-6 sm:pt-8">
            <a href="mailto:abdallah.adel.abdallah10@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-slate-600 hover:text-blue-600 h-10 w-10 sm:h-12 sm:w-12">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/abdallah-adel-aboshnaf/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-slate-600 hover:text-blue-600 h-10 w-10 sm:h-12 sm:w-12">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
            <a href="https://github.com/Abdallah-Adel-AboShnaf" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900 h-10 w-10 sm:h-12 sm:w-12">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
