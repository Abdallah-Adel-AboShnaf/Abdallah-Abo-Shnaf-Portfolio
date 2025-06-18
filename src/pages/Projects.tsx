
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Sales Forecasting and Optimization",
      category: "Data Science",
      description: "The \"'Sales Forecasting and Optimization\"' project aims to predict future sales using historical data, in order to improve inventory and marketing decisions. Predictive models were developed using data analysis and machine learning techniques, and deployed through an interactive application to help companies make data-driven decisions.",
      image: "https://images.unsplash.com/vector-1738926529294-16956cea63a7?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Python", "Data Analysis", "Data Visualization", "Machine Learning", "Streamlit", "MLflow"],
      links: {
        github: "https://github.com/DataScTeam/DataScienceFinalproject",
        demo: "https://final-project-depi-data-science.streamlit.app/"
      }
    },
    {
      title: "Tic-Tac-Toe AI",
      category: "AI",
      description: "A Python-based Tic-Tac-Toe game featuring an AI opponent with multiple algorithms and heuristics.",
      image: "https://i.pinimg.com/736x/ea/96/13/ea961398964cff599864d5a97738999d.jpg",
      technologies: ["Python", "Algorithm Heuristic", "Alpha-Beta Pruning"],
      links: {
        github: "https://github.com/Abdallah-Adel-AboShnaf/Project-Tic-Tac-Toe",
        demo: "https://github.com/Abdallah-Adel-AboShnaf/Project-Tic-Tac-Toe"
      }
    }
  ];

  const categories = ["All", "Machine Learning", "Data Science", "AI", "Java"];

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

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  {/* GitHub Link */}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-slate-300 rounded-md shadow-sm text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  )}

                  {/* Demo Link */}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  )}
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
