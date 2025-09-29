"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Lock,
  Server,
  ChevronRight,
  Check,
} from "lucide-react";

export default function CyberPolygonLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description:
        "Comprehensive protection against sophisticated cyber threats using cutting-edge technologies",
    },
    {
      icon: Server,
      title: "OT Integration",
      description:
        "Native compatibility with operational systems and energy-sector-specific technologies",
    },
    {
      icon: Users,
      title: "Interactive Training",
      description:
        "Realistic training scenarios that prepare teams for real-world threats in energy environments",
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description:
        "Modular architecture that grows with your organization&apos;s needs",
    },
  ];

  const stats = [
    { number: "99.9%", label: "Guaranteed Uptime" },
    { number: "50+", label: "Attack Scenarios" },
    { number: "24/7", label: "Monitoring" },
    { number: "100%", label: "Compliance" },
  ];

  const benefits = [
    "Reduce incident response time by up to 70%",
    "Proactively identify vulnerabilities before exploitation",
    "Automatic compliance with international security standards",
    "Detailed reporting and real-time metrics for management",
    "Isolated environment to safely test changes without operational impact",
    "Simulations of APT attacks specific to the energy sector",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                Cyber Polygon
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("scope")}
                className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              >
                Scope
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("objectives")}
                className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
              >
                Objectives
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-700 transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <button
                onClick={() => scrollToSection("scope")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
              >
                Scopul
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("objectives")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
              >
                Obiective
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient
                  id="grid-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1" />
                </linearGradient>
                <pattern
                  id="grid"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="none"
                    stroke="url(#grid-gradient)"
                    strokeWidth="1"
                  />
                  <circle cx="0" cy="0" r="2" fill="#60a5fa" opacity="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-20">
          <div className="inline-block mb-6 px-6 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full border border-blue-400/50">
            <span className="text-blue-100 font-medium">
              🛡️ Cyber Range Platform{" "}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Cyber Polygon
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-6 max-w-4xl mx-auto font-light">
            A Cyber Range Platform Specialized on Energy Sector with Automatic
            Generation of Virtual Scenarios
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>Contact us</span>
              <ChevronRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
            <button
              onClick={() => scrollToSection("objectives")}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300"
            >
              Objectives
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Project Scope Section */}
      <section
        id="scope"
        className="py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
              Scope of the project
            </div>
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              A Cyber Range Platform for Strengthening Energy Sector
              Cybersecurity
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed text-justify">
                A federated cyber range tailored to the energy sector is
                essential to fortify cybersecurity defenses and safeguard
                critical energy infrastructure against escalating cyber and
                hybrid threats.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                The project Cyber Polygon: A Cyber Range Platform Specialized on
                Energy Sector with Automatic Generation of Virtual Scenarios
                focuses on developing a state-of-the-art cyber range platform
                designed for seamless integration with organizations&apos;
                operational technology (OT) environments. By providing a
                simulated environment, it enables realistic training, rigorous
                technology testing, and process evaluation under high-pressure
                scenarios. Integrating OT systems into the cyber range enhances
                organizations&apos; preparedness and response capabilities, fostering
                robust cybersecurity measures.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 p-6 rounded-xl border-l-4 border-blue-600">
                <p className="text-gray-700 italic">
                  &quot;By simulating realistic OT environments, Cyber Polygon
                  empowers organizations to test, train, and respond effectively
                  to evolving cyber threats.&quot;
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-12 shadow-2xl">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Hub */}
                  <circle
                    cx="200"
                    cy="200"
                    r="40"
                    fill="#ffffff"
                    opacity="0.9"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="35"
                    fill="#1d4ed8"
                    opacity="0.8"
                  />

                  {/* Infrastructure Nodes */}
                  <g>
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                      const rad = (angle * Math.PI) / 180;
                      const x = 200 + 120 * Math.cos(rad);
                      const y = 200 + 120 * Math.sin(rad);
                      return (
                        <g key={i}>
                          <line
                            x1="200"
                            y1="200"
                            x2={x}
                            y2={y}
                            stroke="#ffffff"
                            strokeWidth="2"
                            opacity="0.3"
                          />
                          <circle
                            cx={x}
                            cy={y}
                            r="25"
                            fill="#ffffff"
                            opacity="0.9"
                          />
                          <circle
                            cx={x}
                            cy={y}
                            r="20"
                            fill="#3b82f6"
                            opacity="0.8"
                          />
                        </g>
                      );
                    })}
                  </g>

                  {/* Shield Overlay */}
                  <path
                    d="M200,170 L175,190 L175,230 Q175,255 200,270 Q225,255 225,230 L225,190 Z"
                    fill="#ffffff"
                    opacity="0.9"
                  />
                  <text
                    x="200"
                    y="225"
                    textAnchor="middle"
                    fill="#1d4ed8"
                    fontSize="24"
                    fontWeight="bold"
                  >
                    ✓
                  </text>

                  {/* Orbiting Elements */}
                  <circle cx="280" cy="150" r="8" fill="#fbbf24" opacity="0.8">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 200 200"
                      to="360 200 200"
                      dur="10s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="120" cy="250" r="8" fill="#10b981" opacity="0.8">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 200 200"
                      to="360 200 200"
                      dur="15s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-blue-100">
                <div className="text-3xl font-bold text-blue-600">360°</div>
                <div className="text-sm text-gray-600">Protect</div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-blue-100">
                <div className="text-3xl font-bold text-blue-600">AI</div>
                <div className="text-sm text-gray-600">Powered</div>
              </div>
            </div>
          </div>

          {/* Context Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Why a Cyber Range is Essential for the Energy Sector?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                  <Lock className="mr-2" size={24} />
                  Current Challenges
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Increasingly sophisticated cyberattacks targeting critical
                      infrastructure
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>IT-OT convergence creating new attack surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Shortage of skilled OT security personnel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Inability to safely test in production environments
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                  <Zap className="mr-2" size={24} />
                  The Cyber Polygon Solution
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Isolated environment for testing and training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Realistic, energy-sector-specific scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Continuous training for security teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Proactive validation of security measures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
              Features
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Cyber Polygon platform integrates state-of-the-art
              technologies to deliver a comprehensive cybersecurity training and
              testing experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <feature.icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-100 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-16 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
                Beneficii Măsurabile
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Check className="text-white" size={20} />
                    </div>
                    <p className="text-blue-50 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section
        id="objectives"
        className="py-24 lg:py-32 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="dots"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="15" cy="15" r="2" fill="#3b82f6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
              Strategic Objectives
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Roadmap to Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each objective is designed to contribute to building a robust and
              adaptive cybersecurity ecosystem for the energy sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Automated Vulnerability Framework",
                description:
                  "Develop an automated framework for vulnerability mitigation",
                details:
                  "Implementarea unui sistem inteligent care identifică, prioritizează și remediază automat vulnerabilitățile, reducând timpul de expunere la amenințări.",
              },
              {
                title: "Dynamic Security Enhancement",
                description:
                  "Enhance security through dynamic system modifications",
                details:
                  "Sistem adaptiv care modifică configurațiile de securitate în timp real, bazat pe analiza continuă a amenințărilor și a comportamentului rețelei.",
              },
              {
                title: "Specialized Cyber Polygon Platform",
                description: "Build a specialized cyber polygon platform",
                details:
                  "Dezvoltarea unei infrastructuri dedicate care simulează exact mediile OT din sectorul energetic, cu toate specificațiile tehnice și protocoalele specifice.",
              },
              {
                title: "Proactive Security Measures",
                description:
                  "Promote proactive cybersecurity measures in energy infrastructure",
                details:
                  "Schimbarea paradigmei de la răspuns reactiv la prevenție proactivă prin identificarea și neutralizarea amenințărilor înainte de materializare.",
              },
              {
                title: "Training &amp; Skill Development",
                description:
                  "Support training and skill development for energy-sector stakeholders",
                details:
                  "Programe comprehensive de formare continuă pentru operatori, ingineri și personal de securitate, cu certificări recunoscute internațional.",
              },
              {
                title: "Scalable & Modular Solution",
                description:
                  "Create a scalable and modular cybersecurity solution",
                details:
                  "Arhitectură flexibilă care permite extinderea facilă, integrarea de noi module și adaptarea la cerințele specifice ale fiecărei organizații.",
              },
              {
                title: "Expert Collaboration",
                description:
                  "Foster collaboration between technology and security experts",
                details:
                  "Crearea unui ecosistem colaborativ unde experți din diverse domenii pot partaja cunoștințe, best practices și soluții inovatoare.",
              },
            ].map((objective, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {objective.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {objective.description}
                    </p>
                  </div>
                </div>
                {/* <p className="text-gray-600 leading-relaxed ml-16">
                  {objective.details}
                </p> */}
              </div>
            ))}
          </div>

          {/* Timeline Visual */}
          {/* <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              Implementare în Faze
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { phase: 'Faza I', title: 'Foundation', duration: '0-6 luni', items: ['Analiza cerințelor', 'Design arhitectură', 'Dezvoltare core platform'] },
                { phase: 'Faza II', title: 'Development', duration: '6-12 luni', items: ['Integrare OT', 'Scenarii de training', 'Testing & QA'] },
                { phase: 'Faza III', title: 'Deployment', duration: '12-18 luni', items: ['Pilot deployment', 'Training utilizatori', 'Optimizare continuă'] }
              ].map((phase, index) => (
                <div key={index} className="relative">
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-300"></div>
                  )}
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-200">
                    <div className="text-sm font-semibold text-blue-600 mb-1">{phase.phase}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h4>
                    <div className="text-sm text-gray-500 mb-4">{phase.duration}</div>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/*    Consortium*/}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
              Consortium
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Project Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cyber Polygon is developed through a strategic collaboration
              between prestigious institutions from Romania and Azerbaijan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* ICI Bucharest */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-32 h-32 mb-6 flex items-center justify-center bg-white rounded-xl shadow-sm">
                  <img
                    src="/img/2.png"
                    alt="ICI Bucharest Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
                  NATO Country Project Director (NPD)
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  National Institute for Research and Development in Informatics
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">
                  ICI Bucharest
                </p>
                <p className="text-gray-600 mb-6 flex-grow">
                  National Institute for Research & Development in Informatics,
                  Bucharest A leader in research and development of advanced IT
                  solutions for cybersecurity.
                </p>
                <a
                  href="https://ici.ro/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Visit the Website
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Azerbaijan State Service */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all">
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-32 h-32 mb-6 flex items-center justify-center bg-white rounded-xl shadow-sm">
                  <img
                    src="/img/1.png"
                    alt="Azerbaijan State Service Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="inline-block px-3 py-1 bg-green-600 text-white rounded-full text-sm font-semibold mb-4">
                  Partner Country Project Director (PPD)
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  State Service of the Republic of Azerbaijan
                </h3>
                <p className="text-lg text-green-600 font-semibold mb-4">
                  SCIS Azerbaijan
                </p>
                <p className="text-gray-600 mb-6 flex-grow">
                  State Service of the Republic of Azerbaijan for Information
                  Security and Communications Responsible for protecting the
                  nation’s critical cyber infrastructure.
                </p>
                <a
                  href="https://scis.gov.az/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Visit the Website
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
      id="contact"
      className="py-24 lg:py-32 bg-gradient-to-b from-blue-50/30 to-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-4">
            Contact
          </div>
          {/* <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contactează-ne
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pentru întrebări despre proiect sau colaborări
          </p> */}
        </div>

        {/* Varianta 1: 2 căsuțe alăturate */}
        {/* <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"> */}
          {/* Email General */}
          {/* <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact General</h3>
            <p className="text-gray-600 mb-4">Pentru informații despre proiect</p>
            <a 
              href="mailto:contact@cyberpolygon.ro" 
              className="inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              contact@cyberpolygon.ro
            </a>
          </div> */}

          {/* Email Tehnic */}
          {/* <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Suport Tehnic</h3>
            <p className="text-gray-600 mb-4">Pentru probleme tehnice și colaborări</p>
            <a 
              href="mailto:support@cyberpolygon.ro" 
              className="inline-block text-green-600 hover:text-green-800 font-semibold transition-colors"
            >
              support@cyberpolygon.ro
            </a>
          </div> */}
        {/* </div> */}

        {/* Varianta 2: O singură căsuță mai mare (comentată) */}
     
        <div className="max-w-2xl mx-auto">
  <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all">
    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact the Team</h3>
    <p className="text-gray-600 mb-6 text-lg">For any questions regarding the Cyber Polygon project.</p>

    {/* Email 1 */}
    <a 
      href="mailto:carmen.cirnu@ici.ro" 
      className="flex flex-col items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg mb-5"
    >
      <span className="flex items-center">
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        carmen.cirnu@ici.ro
      </span>
      <span className="text-sm mt-1">NPD: Dr. Carmen Elena CIRNU</span>
    </a>

    {/* Email 2 */}
    <a 
      href="mailto:mt@gov.az" 
      className="flex flex-col items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
    >
      <span className="flex items-center">
        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        mt@gov.az
      </span>
      <span className="text-sm mt-1">PPD: Tural MAMMADOV</span>
    </a>
  </div>
</div>

     
      </div>
    </section>

      {/* CTA Section */}
 <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="cta-pattern"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          NORTH ATLANTIC TREATY ORGANIZATION
        </h2> 
        {/* <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
          Alătură-te organizațiilor care au ales excelența în securitatea
          cibernetică. Începe transformarea digitală în siguranță cu Cyber
          Polygon.
        </p>
         */}
        {/* Imagine */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img 
              src="/img/3.png" 
              alt="Cyber Security Infrastructure" 
              className="rounded-2xl shadow-2xl max-w-2xl w-full h-auto border border-blue-800/30"
            />
            {/* Overlay pentru efect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
  <footer className="bg-gray-900 text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-4 gap-12 mb-12">
      <div className="md:col-span-2">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <Shield className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold">Cyber Polygon</span>
        </div>
        <p className="text-gray-400 mb-6 max-w-md">
          State-of-the-art Cyber Range platform for the energy sector. We protect critical infrastructure through advanced technology and specialized training.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-4">Quick Navigation</h4>
        <ul className="space-y-3">
          <li>
            <button
              onClick={() => scrollToSection("scope")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Project Scope
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Features
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("objectives")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Objectives
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-4">Resources</h4>
        <ul className="space-y-3">
          {/* <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Documentation
            </a>
          </li> */}
          <li>
            <a
              href="http://www.nato.int/science"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
            NATO
            </a>
          </li> 
          {/* <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Case Studies
            </a>
          </li> */}
          {/* <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Support
            </a>
          </li> */}
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-400 text-sm">
          © {currentYear} Cyber Polygon. All rights reserved.
        </p>
        {/* <div className="flex space-x-6 text-sm">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Cookies
          </a>
        </div> */}
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}
