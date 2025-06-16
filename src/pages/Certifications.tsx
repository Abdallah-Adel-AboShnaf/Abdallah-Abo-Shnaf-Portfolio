
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-ML-2023-001",
      description: "Comprehensive certification covering machine learning implementation and optimization on AWS platform.",
      skills: ["AWS SageMaker", "ML Pipelines", "Model Deployment", "Data Engineering"],
      level: "Expert",
      color: "bg-orange-500"
    },
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-DE-2023-002",
      description: "Professional-level certification demonstrating expertise in designing and building data processing systems.",
      skills: ["BigQuery", "Dataflow", "Pub/Sub", "Cloud ML Engine"],
      level: "Professional",
      color: "bg-blue-500"
    },
    {
      title: "Microsoft Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "AZ-100-2022-003",
      description: "Certification validating skills in implementing and running machine learning workloads on Azure.",
      skills: ["Azure ML", "MLOps", "Model Management", "Data Science"],
      level: "Associate",
      color: "bg-sky-500"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2022",
      credentialId: "TF-DEV-2022-004",
      description: "Certification demonstrating proficiency in using TensorFlow to solve deep learning and ML problems.",
      skills: ["TensorFlow", "Keras", "Neural Networks", "Computer Vision"],
      level: "Professional",
      color: "bg-amber-500"
    },
    {
      title: "Certified Analytics Professional (CAP)",
      issuer: "INFORMS",
      date: "2021",
      credentialId: "CAP-2021-005",
      description: "Industry-standard certification for analytics professionals demonstrating mastery of the analytics process.",
      skills: ["Statistical Analysis", "Business Analytics", "Data Mining", "Predictive Modeling"],
      level: "Professional",
      color: "bg-green-500"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera (Andrew Ng)",
      date: "2021",
      credentialId: "DL-SPEC-2021-006",
      description: "Comprehensive specialization covering deep learning fundamentals and advanced techniques.",
      skills: ["Deep Learning", "Neural Networks", "CNN", "RNN"],
      level: "Specialization",
      color: "bg-purple-500"
    },
    {
      title: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "2020",
      credentialId: "IBM-DS-2020-007",
      description: "Professional certificate program covering the entire data science workflow and methodology.",
      skills: ["Python", "Data Analysis", "Machine Learning", "Data Visualization"],
      level: "Professional",
      color: "bg-blue-600"
    },
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "2020",
      credentialId: "TD-SPEC-2020-008",
      description: "Certification demonstrating fundamental Tableau skills for data visualization and analysis.",
      skills: ["Data Visualization", "Dashboard Design", "Tableau", "Business Intelligence"],
      level: "Specialist",
      color: "bg-teal-500"
    }
  ];

  const upcomingCerts = [
    "Kubernetes Certified Application Developer",
    "Apache Spark Certified Developer",
    "Snowflake SnowPro Core Certification"
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-red-100 text-red-800";
      case "Professional": return "bg-blue-100 text-blue-800";
      case "Associate": return "bg-green-100 text-green-800";
      case "Specialist": return "bg-purple-100 text-purple-800";
      case "Specialization": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen p-6 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">
            My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Certifications</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements in data science and cloud technologies
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 group">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center shadow-sm`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 text-lg leading-tight mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-blue-600 font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className={getLevelColor(cert.level)}>
                    {cert.level}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">{cert.description}</p>

                {/* Skills */}
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs border-slate-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span>Issued {cert.date}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Verify
                  </Button>
                </div>

                {/* Credential ID */}
                <div className="text-xs text-slate-400 font-mono">
                  ID: {cert.credentialId}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upcoming Certifications */}
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-teal-50 border-slate-200">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">Upcoming Certifications</h2>
              <p className="text-slate-600">Planned certifications for continuous professional development</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingCerts.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Certification Statistics */}
        <Card className="p-8 bg-white/80 backdrop-blur-sm border-slate-200">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800">Certification Overview</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                <div className="text-sm text-slate-600">Total Certifications</div>
              </div>
              
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-teal-600 mb-2">3</div>
                <div className="text-sm text-slate-600">Cloud Platforms</div>
              </div>
              
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                <div className="text-sm text-slate-600">Professional Level</div>
              </div>
              
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-green-600 mb-2">2023</div>
                <div className="text-sm text-slate-600">Latest Achievement</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Certifications;
