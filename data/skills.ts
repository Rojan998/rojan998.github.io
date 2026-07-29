import type { SkillCategory } from "./types";

/**
 * Skills grouped by category. Intentionally no proficiency percentages or
 * progress bars — just an honest, scannable inventory of tools and
 * practices.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "data-engineering",
    title: "Data Engineering",
    skills: [
      "Apache Flink",
      "Apache Kafka",
      "Apache Hudi",
      "Apache Iceberg",
      "Debezium",
      "ETL and ELT",
      "Batch Processing",
      "Stream Processing",
      "Change Data Capture",
      "Data Lakes",
    ],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud and Infrastructure",
    skills: [
      "AWS",
      "Terraform",
      "Kubernetes",
      "Helm",
      "Docker",
      "GitHub Actions",
      "Infrastructure as Code",
      "CI/CD",
    ],
  },
  {
    id: "aws-services",
    title: "AWS Services",
    skills: [
      "S3",
      "Glue",
      "Lake Formation",
      "Athena",
      "Lambda",
      "SNS",
      "EventBridge",
      "IAM",
      "KMS",
      "Secrets Manager",
      "EMR",
      "EKS",
    ],
  },
  {
    id: "observability",
    title: "Observability",
    skills: ["Grafana", "Prometheus", "Grafana Alloy", "Mimir", "CloudWatch", "Alerting", "Operational Dashboards"],
  },
  {
    id: "programming",
    title: "Programming",
    skills: ["Python", "SQL", "Bash", "Java", "YAML", "Markdown"],
  },
  {
    id: "engineering-practices",
    title: "Engineering Practices",
    skills: [
      "Distributed Systems Troubleshooting",
      "Root-Cause Analysis",
      "Production Support",
      "Technical Documentation",
      "Security and Access Control",
      "Agile Collaboration",
    ],
  },
];
