
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Mail, Linkedin, Github} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import { SiDatacamp } from 'react-icons/si';
import { FaKaggle } from "react-icons/fa6";
import { SiCoursera } from 'react-icons/si';
import { SiCredly } from 'react-icons/si';
import { SiHackerrank } from 'react-icons/si';
import { SiCodeforces } from 'react-icons/si';


const Home = () => {
  const handleLearnMore = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/lovable-uploads/097f3196-c743-4c18-8052-1eb8d0d60b71.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-sky-800 mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  <TypeAnimation
                    sequence={[
                      'Abdallah Adel',
                      1000,
                      '',
                      500,
                    ]}
                    speed={80}
                    repeat={Infinity}
                    cursor={true}
                  />
                </span>
              </h1>

              <p className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-bold mb-8 max-w-3xl mx-auto">
                <TypeAnimation
                  sequence={[
                    'Data Scientist',
                    1500,
                    'Data Analyst',
                    1500,
                    'Machine Learning Expert',
                    1500,
                  ]}
                  speed={80}
                  repeat={Infinity}
                  cursor={true}
                />
              </p>

              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Turning data into insights with machine learning, analytics, and visualizations, I deliver impactful solutions that simplify complexity.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
              onClick={handleLearnMore}
            >
              Learn More About Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
              onClick={() => window.open("https://drive.google.com/file/d/1Z1M18WNf78iBTE9rpnbN1FqK9dtvBI23/view?usp=sharing",  "_blank")}
              >
              Download CV
              <Download className="mr-2 h-4 w-4" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">7+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-slate-600">Certifications</div>
              </div>
            </Card>
          </div>

          {/* Social Links and Platform Links */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {/* Social Media Icons */}
            <a href="mailto:aboshnaf.me@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="h-16 w-16 text-slate-600 hover:text-blue-600 flex items-center justify-center">
                <Mail className="h-16 w-16" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/abdallah-adel-aboshnaf/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="h-16 w-16 text-slate-600 hover:text-blue-600 flex items-center justify-center">
                <Linkedin className="h-16 w-16" />
              </Button>
            </a>
            <a href="https://github.com/Abdallah-Adel-AboShnaf" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="h-16 w-16 text-slate-600 hover:text-slate-900 flex items-center justify-center">
                <Github className="h-16 w-16" />
              </Button>
            </a>

            {/* Platform Icons */}
            <a href="https://www.datacamp.com/portfolio/AbdallahAdelAbdallah" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="h-16 w-16 text-slate-600 hover:text-green-600 flex items-center justify-center">
                <SiDatacamp className="h-16 w-16" />
              </Button>
            </a>
            <a href="https://www.kaggle.com/abdallah3del" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="h-16 w-16 text-slate-600 hover:text-blue-600 flex items-center justify-center">
                <FaKaggle className="h-16 w-16" />
              </Button>
            </a>
            <a href="https://www.coursera.org/learner/abo-shnaf" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="h-16 w-16 text-slate-600 hover:text-blue-600 flex items-center justify-center">
                <SiCoursera className="h-16 w-16" />
              </Button>
            </a>
            <a href="https://www.credly.com/users/abo-shnaf" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="h-16 w-16 text-slate-600 hover:text-slate-900 flex items-center justify-center">
                <SiCredly className="h-16 w-16" />
              </Button>
            </a>
            <a href="https://www.hackerrank.com/profile/abdallahadel1851" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="h-16 w-16 text-slate-600 hover:text-black flex items-center justify-center">
                <SiHackerrank className="h-16 w-16" />
              </Button>
            </a>
            <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="h-16 w-16 text-slate-600 hover:text-slate-900 flex items-center justify-center">
                <SiCodeforces className="h-16 w-16" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
