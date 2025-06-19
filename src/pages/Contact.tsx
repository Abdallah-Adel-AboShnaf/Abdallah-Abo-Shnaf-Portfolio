
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdallah.adel@gmail.com",
      link: "mailto:abdallah.adel.abdallah10@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 1154239632",
      link: "tel:+201154239632"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Giza, Egypt",
      link: "https://maps.app.goo.gl/9KkaCRU9FbuQCbMU9"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "http://www.linkedin.com/in/abdallah-adel-aboshnaf",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Abdallah-Adel-AboShnaf",
      color: "text-slate-700 hover:text-slate-900"
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/abdallah_adel_aboshnaf?igsh=ZDl1ODZ2bWx6bjBp",
      color: "text-sky-500 hover:text-sky-600"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:abdallah.adel.abdallah10@gmail.com",
      color: "text-red-500 hover:text-red-600"
    }
  ];

  return (
    <div className="min-h-screen p-6 lg:p-12">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">
            Get In <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Let's discuss how we can work together on your next data science project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Details */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{info.label}</p>
                        <p className="text-slate-600 group-hover:text-blue-600 transition-colors">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">Connect With Me</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group"
                    >
                      <Icon className={`w-6 h-6 mb-2 ${social.color} transition-colors`} />
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-slate-200">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">Send Me a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="border-slate-300 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-slate-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="border-slate-300 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project or how I can help..."
                    rows={6}
                    required
                    className="border-slate-300 focus:border-blue-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Response Time */}
            <Card className="mt-6 p-6 bg-slate-50 border-slate-200">
              <div className="text-center">
                <h3 className="font-semibold text-slate-800 mb-2">Quick Response Promise</h3>
                <p className="text-slate-600 text-sm">
                  I typically respond to all inquiries within 24 hours during business days.
                  For urgent matters, please feel free to call or connect via LinkedIn.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
