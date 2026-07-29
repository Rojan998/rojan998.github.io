import type { EducationEntry } from "./types";

/**
 * Update `institution` with the real university name — left as a clearly
 * marked placeholder because it was not provided as source content.
 * `coursework` is a plain array and safe to edit freely.
 */
export const education: EducationEntry = {
  degree: "Master of Science in Computational Science – Computer Science",
  institution: "[UNIVERSITY NAME]",
  graduation: "May 2025",
  description:
    "Graduate study focused on computer science, computational methods, software development, data processing, and applied technical problem-solving.",
  coursework: [
    "Distributed Systems",
    "Cloud Computing",
    "Database Systems",
    "Data Structures and Algorithms",
    "Software Engineering",
    "Machine Learning",
    "High-Performance Computing",
  ],
};
