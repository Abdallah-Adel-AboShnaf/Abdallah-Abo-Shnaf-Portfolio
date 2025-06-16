import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Linkedin, Github } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center">
                <span className="text-4xl font-bold text-slate-600">A</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  <TypeAnimation
                    sequence={[
                      'Abdallah Adel',
                      2000,
                      '',
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>

          {/* agsdgsdfhfgjghkdhkjkjkkjhl*/}

              <h2 className="text-2xl lg:text-3xl text-slate-600 font-light">
                <TypeAnimation
                  sequence={[
                    'Data Scientist',
                    2000,
                    'AI Developer',
                    2000,
                    'ML Engineer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>

              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Passionate about transforming data into actionable insights and building
                intelligent systems that solve real-world problems. Specialized in machine
                learning, statistical analysis, and data visualization.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/about">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">20+</div>
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

          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-8">
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-blue-600">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-blue-600">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900">
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
