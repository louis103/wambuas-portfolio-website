"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "2015 Crime Incidents Web Map",
    description: "A simple webmapping application showing distribution of criminal cases in Kenya in the year 2015.",
    image: "/images/projects/crimewebmapimg.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/louis103/crime-mapping-in-Kenya-2015.git",
    previewUrl: "https://crime-mapping-in-kenya-2015.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "This is my portfolio website built using Next.js and deployed using Firebase hosting!",
    image: "/images/projects/portfolio_img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/louis103/wambuas-portfolio-website.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Internship Locator Web Map",
    description: "A simple webmapping application built using Openlayers.js showing distribution of internship opportunities in Kenya from a custom dataset.",
    image: "/images/projects/internship_img.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://internship-locator.web.app/",
  },
  {
    id: 4,
    title: "Plate Tectonics and Earthquakes visualization Web Map",
    description: "A simple webmapping application built using ArcGIS instant apps to visualize plate tectonics and earthquakes.",
    image: "/images/projects/Plate_Tectonics_Earthquakes.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "", //https://arcg.is/1PS9eL2
  },
  {
    id: 5,
    title: "Rails and Recreation Locator Web Map",
    description: "A proximity based web application built using ArcGIS Instant Apps template to locate rails and recreation facilities close to a Canadian railway line.",
    image: "/images/projects/Rails_and_Recreation_Locator.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "", //https://arcg.is/18eC1r0
  },
  {
    id: 6,
    title: "Proximity Search Web App",
    description: "An interactive proximity based web application built using React.js and Node.js backend to allow users to search for places within a specified radius, filter data based on attributes, upload own data for visualization and querying on the fly. It uses a PostgreSQL database with PostGIS extension enabled to allow for distance queries.",
    image: "/images/projects/Proximity_App.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://proximity-search-app.vercel.app/",
  },
  {
    id: 7,
    title: "How to publish a raster file into a PostGIS database deployed on Ubuntu 22.04 server and visualize it using QGIS software.",
    description: "How to publish a raster file into a PostGIS database deployed on Ubuntu 22.04 server and visualize it using QGIS software.",
    image: "/images/blogs/blog1.png",
    tag: ["All", "Blogs"],
    gitUrl: "",
    previewUrl: "https://wambualouis.medium.com/how-to-publish-a-raster-file-into-a-postgis-database-deployed-on-ubuntu-22-04-90ca4ddb3264",
  },
  {
    id: 8,
    title: "How to set up GeoServer, PostgreSQL, PostGIS, and PgAdmin4-browser on Ubuntu 22.04 virtual machine in Digital Ocean Cloud (step-by-step)",
    description: "How to set up GeoServer, PostgreSQL, PostGIS, and PgAdmin4-browser on Ubuntu 22.04 virtual machine in Digital Ocean Cloud (step-by-step)",
    image: "/images/blogs/blog2.png",
    tag: ["All", "Blogs"],
    gitUrl: "",
    previewUrl: "https://wambualouis.medium.com/how-to-set-up-geoserver-postgresql-postgis-and-pgadmin4-browser-on-ubuntu-22-04-2c6e58536741",
  },
  {
    id: 9,
    title: "Geospatial Machine Learning 101: Exploring k-means clustering with geospatial data",
    description: "Geospatial Machine Learning 101: Exploring k-means clustering with geospatial data",
    image: "/images/blogs/blog3.png",
    tag: ["All", "Blogs"],
    gitUrl: "",
    previewUrl: "https://wambualouis.medium.com/geospatial-machine-learning-101-exploring-k-means-clustering-with-geospatial-data-a69c6e475838",
  },
  {
    id: 10,
    title: "Geospatial Deep Learning: A Step-by-Step Guide to Land Use Land Cover Classification using EuroSAT imagery. Part 1 — setting up cloud infrastructure",
    description: "A step by step tutorial on how to set up GPU based cloud infrastructure for land use land cover classification using EuroSAT imagery.",
    image: "/images/blogs/GeospatialDeepLearning.png",
    tag: ["All", "Blogs"],
    gitUrl: "",
    previewUrl: "https://wambualouis.medium.com/geospatial-deep-learning-a-step-by-step-guide-to-land-use-land-cover-classification-using-eurosat-01426f80c5de",
  },
  // Mobile Project
  {
    id: 11,
    title: "Powerlines Monitoring Mobile App",
    description: "A simple system encompassing a mobile app to record details of faulty overhead powerline structures and a dashboard to visualize the data.",
    image: "/images/projects/OverheadCorrected.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/louis103/PowerlineMobileApplication.git",
    previewUrl: "https://powerline-monitoring-dashboard-ba1f4f6d707e.herokuapp.com/powerline/",
  },
  {
    id: 12,
    title: "Movies Database",
    description: "A simple web application built using Next.js and AppWrite Managed backend to allow users to search for movies, view movie details, and also see top five trending movies.",
    image: "/images/projects/movie-website-logo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/louis103/wambuas-portfolio-website.git",
    previewUrl: "https://wambuas-movie-app.web.app/",
  },
  {
    id: 13,
    title: "Cancer Visualisation Web Map",
    description: "A simple geospatial web mapping application used to visualize cancer cases in three counties in Kenya (Embu, Kericho and Mombasa).",
    image: "/images/projects/nrf-cancer-webmap.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://nrf-cancer-distribution-web-map.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Web");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-1 py-4">
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Blogs"
          isSelected={tag === "Blogs"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Blogs"
          isSelected={tag === "Blogs"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
