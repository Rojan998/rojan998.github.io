import type { ExperienceEntry } from "./types";

/**
 * Work experience, most recent first. Kept intentionally free of
 * confidential employer details, internal system names, account
 * identifiers, or proprietary architecture information.
 */
export const experience: ExperienceEntry[] = [
  {
    id: "senior-data-engineer",
    title: "Senior Data Engineer",
    organization: "Enterprise Energy and Utilities Client · Contract",
    dateRange: "November 2025 – Present",
    summary:
      "Contribute to the development and operation of enterprise cloud data platforms supporting batch and real-time data-processing workloads.",
    achievements: [
      "Build and maintain cloud data infrastructure using AWS, Terraform, Kubernetes, Helm, and GitHub Actions.",
      "Support streaming-data workloads using Apache Flink, Apache Kafka, Debezium, and Apache Hudi.",
      "Develop and improve CI/CD workflows for building, publishing, and deploying containerized applications.",
      "Implement monitoring and alerting using Prometheus, Grafana, Grafana Alloy, and Mimir.",
      "Investigate incidents involving container deployments, image availability, checkpoint failures, data duplication, permissions, and pipeline performance.",
      "Configure AWS services including IAM, Lake Formation, Glue, S3, KMS, SNS, Lambda, EventBridge, Athena, EKS, and Secrets Manager.",
      "Automate infrastructure provisioning and environment configuration through Terraform and deployment workflows.",
      "Collaborate with application teams, infrastructure engineers, and product teams to troubleshoot platform issues.",
      "Participate in production deployments, on-call rotations, root-cause investigations, and platform support.",
      "Create documentation and operational runbooks that help teams safely manage cloud resources and data-platform operations.",
    ],
    technologies: [
      "AWS",
      "Python",
      "Terraform",
      "Apache Flink",
      "Apache Kafka",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "Grafana",
      "Prometheus",
      "Apache Hudi",
    ],
  },
];
