
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "E-commerce Recommendation System",
      category: "Machine Learning",
      description: "Built a comprehensive recommendation engine using collaborative filtering and deep learning techniques. Implemented both content-based and collaborative filtering approaches to provide personalized product recommendations.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "Apache Spark", "Redis", "PostgreSQL", "Docker"],
      features: [
        "Real-time recommendations",
        "A/B testing framework",
        "40% increase in user engagement",
        "Scalable architecture handling 1M+ users"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "Production"
    },
    {
      title: "Financial Fraud Detection",
      category: "Deep Learning",
      description: "Developed an advanced fraud detection system using ensemble methods and neural networks. The system processes millions of transactions daily and identifies fraudulent activities with high precision.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      technologies: ["Python", "PyTorch", "XGBoost", "Apache Kafka", "MongoDB", "AWS"],
      features: [
        "99.2% accuracy rate",
        "Real-time transaction scoring",
        "Reduced false positives by 60%",
        "Saved $2M annually"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "Production"
    },
    {
      title: "Medical Image Analysis",
      category: "Computer Vision",
      description: "Created a deep learning model for automated medical image analysis, specifically for detecting abnormalities in chest X-rays. The model assists radiologists in making faster and more accurate diagnoses.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "PostgreSQL", "Docker"],
      features: [
        "95% diagnostic accuracy",
        "DICOM format support",
        "Integration with hospital systems",
        "FDA compliance considerations"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "Research"
    },
    {
      title: "Natural Language Processing Chatbot",
      category: "NLP",
      description: "Built an intelligent customer service chatbot using transformer models and natural language understanding. The bot handles complex queries and provides contextual responses in multiple languages.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      technologies: ["Python", "Transformers", "BERT", "FastAPI", "React", "MongoDB"],
      features: [
        "Multi-language support",
        "Context-aware responses",
        "85% query resolution rate",
        "Integration with CRM systems"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "Production"
    },
    {
      title: "Supply Chain Optimization",
      category: "Operations Research",
      description: "Developed an optimization system for supply chain management using linear programming and machine learning. The system optimizes inventory levels, reduces costs, and improves delivery times.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      technologies: ["Python", "OR-Tools", "Pandas", "Plotly", "PostgreSQL", "Streamlit"],
      features: [
        "30% cost reduction",
        "Improved delivery times",
        "Real-time optimization",
        "Interactive dashboards"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "Production"
    },
    {
      title: "Predictive Maintenance System",
      category: "IoT & Analytics",
      description: "Created a predictive maintenance solution for industrial equipment using sensor data and machine learning. The system predicts equipment failures before they occur, reducing downtime significantly.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["Python", "Scikit-learn", "InfluxDB", "Grafana", "Apache Kafka", "Docker"],
      features: [
        "70% reduction in downtime",
        "IoT sensor integration",
        "Real-time monitoring",
        "Predictive alerts system"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      status: "Production"
    }
  ];

  const categories = ["All", "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Operations Research", "IoT & Analytics"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen p-6 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">
            My <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A collection of data science and machine learning projects that solve real-world problems
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              className={`px-4 py-2 cursor-pointer transition-colors ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white" 
                  : "hover:bg-blue-100 hover:text-blue-800"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-xl transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={project.status === "Production" ? "default" : "secondary"}
                    className={project.status === "Production" ? "bg-green-600" : "bg-orange-500"}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Key Features</h4>
                  <ul className="grid grid-cols-1 gap-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Show message if no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
