"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js, React.js & Next.js</li>
        <li>Express</li>
        <li>PostgreSQL, MongoDB, PostGIS, Timescale DB and Astra DB</li>
        <li>Python, GO, Rust</li>
        <li>JavaScript</li>
        <li>Java SpringBoot, Hibernate</li>
        <li>R</li>
        <li>Azure DevOps, Docker, Kubernetes</li>
        <li>Git, Github & Github Actions</li>
        <li>Ms Azure, AWS & Google Cloud Platform</li>
        <li>Linux</li>
        <li>Leaflet, Leafmap and OpenLayers.js</li>
        <li>Geoserver, Geonode, Geodjango</li>
        <li>ArcGIS Online (AGOL)</li>
      </ul>
    ),
  },
  {
    title: "Tools & Technologies",
    id: "technologies",
    content: (
      <ul className="list-disc pl-2">
        <li>Azure DevOps, Docker, Kubernetes</li>
        <li>Git, Github & Github Actions</li>
        <li>Ms Azure & Google Cloud Platform</li>
        <li>Linux</li>
        <li>Leaflet, Leafmap and OpenLayers.js</li>
        <li>Geoserver, Geonode, Geodjango</li>
        <li>ArcGIS Online (AGOL)</li>
      </ul>
    ),
  },
  {
    title: "Education & Experience",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Attaché at Directorate of Resource Surveys and Remote Sensing (May 2024 - August 2024)</li>
        <li>Attaché at Thinture Limited, Nairobi Kenya (March 2022 - May 2022)</li>
        <li>Technical University of Kenya (June 2019 - November 2024), B.A.Sc Hons. in Geoinformatics (Geo-ICT)</li>
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certified by Kenya Red Cross as a Volunteer Mapper from 2022 to present.</li>
        <li>2023 Certified Oracle Data Science Professional</li>
        <li>Kaggle: Certified Geospatial Analyst</li>
        <li>ESRI MOOC Certification in Spatial Data Science: The New Frontier in Analytics</li>
        <li>ESRI MOOC Certification in Building Modern GeoApps</li>
        <li>Udemy Spatial Analysis and Geospatial Data Science with Python certificate</li>
        <li>NVIDIA DLI Certification; Building Transformer based Natural Language Processing Applications</li>
        <li>NVIDIA DLI Certification; Building Retrieval Augmented Generation (RAG) Agents with Large Language Models (LLMs).</li>
        <li>NVIDIA DLI Certification; Disaster Risk Monitoring Using Satellite Imagery.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt='about-image'/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a GIS developer with a passion for creating
            interactive and responsive gis applications. I have experience
            working with JavaScript, React, Node.js, Express, PostgreSQL,
            GeoDjango and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education & Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("technologies")}
              active={tab === "technologies"}
            >
              {" "}
              Technologies{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
