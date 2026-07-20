'use client';

import { headerTiles, workTimelineData, skills, values } from "@/data/data";
import { ITimelineItem } from "@/types";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-600">Me</span>
          </h1>
          <p className="text-gray-300 text-lg leading-8 max-w-3xl mx-auto">
            I am an independent full-stack developer focused on production-ready web applications, SaaS dashboards, and business automation. I work across the full delivery cycle: interface development, server logic, databases, testing, deployment, and operational maintenance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="/cv/en/Michael_EN.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-rose-600 rounded-xl font-mono text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            >
              <Download className="w-5 h-5" />
              Download CV (EN)
            </a>
            <a
              href="/cv/ru/Michael_RU.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-mono text-white hover:border-purple-500/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            >
              <Download className="w-5 h-5" />
              Скачать CV (RU)
            </a>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariant}
        >
          <motion.h2 variants={itemVariant} className="text-3xl font-mono mb-8 text-center">
            <span className="text-purple-500">#</span> Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((group) => (
              <motion.div key={group.category} variants={itemVariant} className="glass-panel border rounded-xl p-6">
                <h3 className="font-mono text-lg text-purple-400">{group.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.category} technologies`}>
                  {group.technologies.map((technology) => (
                    <li key={technology} className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-sm text-gray-300">
                      {technology}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariant}
        >
          <motion.h2 variants={itemVariant} className="text-3xl font-mono mb-8 text-center">
            <span className="text-purple-500">#</span> Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariant}
                className="glass-panel border rounded-xl p-6 hover:border-purple-500/40 transition-colors"
              >
                <div className="text-purple-400 mb-3">{value.icon}</div>
                <h3 className="font-mono text-lg mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariant}
        >
          <motion.h2 variants={itemVariant} className="text-3xl font-mono mb-8 text-center">
            <span className="text-purple-500">#</span> Work Experience
          </motion.h2>
          <div className="space-y-6">
            {workTimelineData.map((item: ITimelineItem) => (
              <motion.div
                key={item.id}
                variants={itemVariant}
                className="glass-panel border rounded-xl p-6 hover:border-purple-500/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="font-mono text-lg text-white">{item.title}</h3>
                    <p className="text-purple-400 text-sm">{item.subtitle}</p>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">{item.date}</span>
                </div>
                <p className="text-gray-300 text-sm mt-3">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
