
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 px-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get to know more about my journey, passion, and vision in data science
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Profile Image & Quick Info */}
          <div className="lg:col-span-1">
            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-slate-200 text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1 mb-4 sm:mb-6">
                <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/lovable-uploads/097f3196-c743-4c18-8052-1eb8d0d60b71.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h2 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">Abdallah Adel</h2>
              <h3 className="text-sm sm:text-base text-slate-600 mb-4">Data Scientist</h3>
              
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600">
                <div>📍 Location: Giza, Egypt</div>
                <div>🎓 Bachelor in Data Science</div>
                <div>💼 2+ Years Experience</div>
                <div>🌟 Machine Learning Expert</div>
              </div>
            </Card>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm border-slate-200">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">My Story</h2>
              <div className="prose prose-slate max-w-none space-y-3 sm:space-y-4 text-slate-600">
                <ul className="list-disc pl-4 sm:pl-6 text-sky-700 leading-relaxed space-y-2 sm:space-y-4 text-sm sm:text-base">
                  <li>
                    A passionate Data Scientist with a strong foundation in data analysis, machine learning, and statistical modeling. I am currently pursuing a degree in Data Science and have been awarded competitive scholarships from both DEPI and ALX Africa.
                  </li>
                  
                  <li>
                    My technical skill set includes Python, C, C++, SQL Server, and MySQL. I am committed to delivering data-driven solutions with a focus on both precision and efficiency.
                  </li>
                  
                  <li>
                    Driven by curiosity and a dedication to solving real-world problems, I aim to make meaningful contributions in the world of Data Science.
                  </li>
                </ul>
              </div>
            </Card>

            {/* Interests & Values */}
            <Card className="p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-sm border-slate-200">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">Interests & Values</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-slate-700 mb-3">Core Interests</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {[
                      "Data Scientist","Machine Learning", "Deep Learning",
                      "Statistical Analysis", "Data Visualization",
                      "Big Data", "Cloud Computing", "MLOps"
                    ].map((interest) => (
                      <Badge key={interest} variant="secondary" className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 py-1">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-slate-700 mb-3">Values</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-slate-700">Innovation</h4>
                        <p className="text-xs sm:text-sm text-slate-600">Continuously exploring new methodologies and technologies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal-500 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-slate-700">Collaboration</h4>
                        <p className="text-xs sm:text-sm text-slate-600">Believing in the power of teamwork and knowledge sharing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-slate-700">Ethics</h4>
                        <p className="text-xs sm:text-sm text-slate-600">Ensuring responsible and ethical use of data and AI</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-slate-700">Impact</h4>
                        <p className="text-xs sm:text-sm text-slate-600">Creating solutions that make a meaningful difference</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
