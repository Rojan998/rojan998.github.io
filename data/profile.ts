import type { SiteProfile } from "./types";

/**
 * Core identity content shown in the sidebar, hero, about, and contact
 * sections. Update this file to change personal details site-wide.
 */
export const profile: SiteProfile = {
  name: "Rojan Adhikari",
  firstName: "Rojan",
  title: "Data Engineer",
  specialization: "Cloud Data Platforms · Streaming Systems · Infrastructure Automation",
  location: "Dallas, Texas",
  headline:
    "I build reliable, scalable data platforms using AWS, Apache Flink, Kafka, Terraform, and Kubernetes.",
  supportingLine:
    "I work at the intersection of data engineering, cloud infrastructure, and platform reliability.",
  aboutParagraphs: [
    "I'm a data engineer specializing in cloud data platforms, infrastructure automation, and real-time data processing. My work involves designing and supporting systems built with AWS, Apache Flink, Kafka, Kubernetes, Terraform, and Python.",
    "I currently contribute to enterprise data platforms where I help build deployment automation, streaming pipelines, infrastructure-as-code, monitoring, access controls, and operational tooling. I also troubleshoot distributed-system issues involving container deployments, IAM permissions, stream processing, data consistency, and pipeline reliability.",
    "I enjoy working on problems where data engineering, cloud infrastructure, and platform reliability come together. My goal is to create systems that are scalable, observable, secure, and easier for engineering teams to operate.",
  ],
  email: "rojan.adhikari23@gmail.com",
  github: "https://github.com/Rojan998",
  linkedin: "https://www.linkedin.com/in/rojan998/",
  // Update to the domain this site is actually deployed to.
  siteUrl: "https://www.rojanadhikari.dev",
  resumePath: "/Rojan_Adhikari_Resume-updated.pdf",
  // Update whenever a new resume file is uploaded to /public.
  resumeLastUpdated: "July 2026",
  availability: {
    isAvailable: true,
    label: "Open to new opportunities",
  },
  currently: {
    location: "Based in Dallas, Texas",
    focus: "Working on cloud data-platform engineering",
    interests: [
      "Data Engineering",
      "Cloud Data Engineering",
      "Data Platform Engineering",
      "Infrastructure Engineering",
    ],
  },
};
