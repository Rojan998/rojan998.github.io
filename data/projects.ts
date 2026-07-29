import type { Project } from "./types";

/**
 * Featured projects. GitHub/demo links are omitted (not rendered) until
 * real, working URLs are added here — see ProjectCard for the
 * hide-rather-than-break behavior. Case studies are personal/demo builds
 * used to illustrate architecture and approach, not confidential employer
 * systems. Any numeric "results" must be real, verified measurements; until
 * then the results arrays stay empty and the case-study page shows a
 * placeholder note instead of inventing numbers.
 */
export const projects: Project[] = [
  {
    slug: "streaming-data-platform",
    name: "Real-Time Streaming Data Platform",
    description:
      "A cloud-native streaming pipeline that ingests events from Kafka, processes them with Apache Flink, and writes curated data to a cloud data lake.",
    challenge:
      "Streaming architectures need to stay correct and recoverable under failure — late events, restarts, and schema drift can silently corrupt downstream data if the pipeline isn't designed for it from the start.",
    solution:
      "A Flink-based streaming service consumes Kafka topics, applies stateful transformations with checkpointing for exactly-once recovery, validates incoming schemas, and lands curated, query-ready tables in a data lake using Apache Hudi.",
    keyFeatures: [
      "Kafka event ingestion",
      "Flink stream transformations",
      "Stateful processing",
      "Checkpointing and recovery",
      "Schema validation",
      "Data-lake storage",
      "Hudi or Iceberg table management",
      "Prometheus metrics",
      "Grafana dashboards",
      "Terraform infrastructure",
      "Dockerized local development",
    ],
    technologies: [
      "Apache Kafka",
      "Apache Flink",
      "Python",
      "AWS S3",
      "Apache Hudi",
      "Terraform",
      "Grafana",
      "Docker",
    ],
    links: {
      caseStudy: "/projects/streaming-data-platform",
    },
    featured: true,
    caseStudy: {
      overview:
        "A personal reference implementation of a streaming data platform: Kafka for ingestion, Apache Flink for stateful stream processing, and a Hudi-managed data lake for curated, queryable output.",
      problem:
        "Batch-only pipelines introduce latency that isn't acceptable for use cases like operational dashboards or near-real-time analytics. At the same time, naive streaming implementations often skip the details that make streaming trustworthy: exactly-once semantics, schema enforcement, and recovery from failure. The goal was to build a streaming pipeline that treats correctness and recoverability as first-class requirements, not afterthoughts.",
      constraints: [
        "Must recover cleanly from task-manager restarts without duplicating or losing events.",
        "Must validate event schemas at ingestion time rather than failing silently downstream.",
        "Infrastructure must be fully reproducible from Terraform, with no manually configured resources.",
        "Local development must be possible without a live cloud environment, using Docker Compose.",
      ],
      responsibilities: [
        "Designed the end-to-end data flow from Kafka topic to curated lake table.",
        "Implemented Flink jobs, including keyed state and checkpointing configuration.",
        "Defined the Terraform modules provisioning the supporting AWS infrastructure.",
        "Built the Prometheus/Grafana monitoring layer for job and pipeline health.",
      ],
      architecture:
        "Producers publish events to Kafka. A Flink job consumes each topic, applies schema validation and stateful transformations (windowing, deduplication, enrichment), and checkpoints state to durable storage on a fixed interval. Validated, transformed records are written to a Hudi table on S3, partitioned for efficient querying. Job and pipeline metrics are scraped by Prometheus and visualized in Grafana.",
      technicalApproach: [
        "Used Flink's keyed state and RocksDB state backend to support stateful, exactly-once processing at scale.",
        "Enabled checkpointing with a durable, externalized checkpoint store so jobs can recover after a restart without reprocessing from the beginning of a topic.",
        "Applied schema validation at the ingestion boundary so malformed events are routed to a dead-letter path instead of breaking the job.",
        "Chose Apache Hudi for the lake layer to get upsert support and incremental querying rather than append-only Parquet files.",
      ],
      keyDecisions: [
        {
          decision: "Use Flink instead of a simpler consumer-based service.",
          rationale:
            "Flink's native support for event-time processing, windowing, and checkpointed state made it a better fit than hand-rolled consumer logic once the pipeline needed exactly-once guarantees.",
        },
        {
          decision: "Use Hudi rather than plain Parquet for the lake tables.",
          rationale:
            "Streaming data frequently needs upserts and late-arriving corrections. Hudi's table format supports that without rewriting entire partitions.",
        },
      ],
      challenges: [
        {
          challenge: "Checkpoint failures under state backend pressure.",
          response:
            "Tuned checkpoint interval and state backend configuration, and added checkpoint-duration and failure-count metrics to Grafana so regressions are visible before they cause job restarts.",
        },
        {
          challenge: "Duplicate records after task-manager restarts.",
          response:
            "Verified end-to-end exactly-once configuration (Kafka transactional producer settings plus Flink checkpointing) and added a deduplication step keyed on event identifiers as a defense-in-depth measure.",
        },
      ],
      solution:
        "The resulting pipeline processes Kafka events through Flink with checkpointed, stateful transformations and lands validated, deduplicated records in a Hudi-managed lake table — recoverable from failure and observable end-to-end.",
      testing: [
        "Unit tests for transformation and schema-validation logic.",
        "Local integration tests using Docker Compose to run Kafka, Flink, and a MinIO-backed S3 substitute.",
        "Manual failure-injection testing (killing task managers mid-run) to verify checkpoint recovery behavior.",
      ],
      observability: [
        "Flink job metrics (checkpoint duration, backpressure, records processed) exported to Prometheus.",
        "Grafana dashboards for pipeline throughput, consumer lag, and checkpoint health.",
        "Structured logging for schema-validation failures routed to a dead-letter topic.",
      ],
      security: [
        "Least-privilege IAM roles scoped to the specific S3 prefixes the job reads from and writes to.",
        "Encryption at rest for lake storage and in transit for Kafka connections.",
        "Secrets (broker credentials, storage keys) sourced from a secrets manager rather than environment files.",
      ],
      results: [],
      lessonsLearned: [
        "Exactly-once semantics require care at every hop (producer, processor, and sink), not just at the stream-processing layer.",
        "Investing in dead-letter handling early made schema drift a non-event instead of a pipeline outage.",
      ],
      futureImprovements: [
        "Add automated schema-evolution testing against a schema registry.",
        "Evaluate Apache Iceberg as an alternative table format for broader query-engine compatibility.",
      ],
    },
  },
  {
    slug: "aws-infrastructure-automation",
    name: "AWS Data Infrastructure Automation",
    description:
      "A reusable Terraform project that provisions secure infrastructure for a cloud-based data pipeline.",
    challenge:
      "Manually provisioned cloud resources drift from their intended configuration over time and make least-privilege access difficult to enforce consistently across environments.",
    solution:
      "A modular, environment-aware Terraform project that provisions storage, IAM roles, event automation, and secrets management with consistent, least-privilege defaults, validated automatically in CI before every apply.",
    keyFeatures: [
      "Environment-aware Terraform configuration",
      "S3 storage",
      "IAM roles and least-privilege policies",
      "KMS encryption",
      "Lambda processing",
      "EventBridge automation",
      "SNS notifications",
      "Secrets Manager integration",
      "CloudWatch logging",
      "GitHub Actions validation",
    ],
    technologies: ["AWS", "Terraform", "IAM", "Lambda", "EventBridge", "KMS", "GitHub Actions"],
    links: {
      caseStudy: "/projects/aws-infrastructure-automation",
    },
    featured: true,
    caseStudy: {
      overview:
        "A reusable Terraform module set for provisioning the AWS infrastructure behind a data pipeline — storage, compute, IAM, and notifications — with environment-aware configuration and CI validation.",
      problem:
        "Hand-provisioned cloud resources are hard to reproduce, easy to over-permission, and difficult to audit. The goal was infrastructure that is fully defined as code, safe to apply repeatedly, and structured so that least-privilege access is the default rather than an afterthought.",
      constraints: [
        "Must support multiple environments (e.g., dev/staging/prod) from the same module set without duplicating configuration.",
        "IAM policies must be scoped to specific resources rather than using wildcard permissions.",
        "All changes must pass automated validation before being applied.",
      ],
      responsibilities: [
        "Authored the Terraform module structure and environment variable strategy.",
        "Wrote least-privilege IAM policies for each Lambda function and service role.",
        "Set up GitHub Actions workflows for `terraform fmt`, `validate`, and `plan` on every pull request.",
      ],
      architecture:
        "Terraform modules provision an encrypted S3 bucket for pipeline data, Lambda functions for lightweight processing, EventBridge rules to trigger them, SNS topics for operational notifications, and Secrets Manager entries for credentials. KMS keys encrypt data at rest, and CloudWatch captures logs and metrics for every component. Environment-specific values (naming, sizing, alerting endpoints) are isolated in per-environment `.tfvars` files.",
      technicalApproach: [
        "Structured the project as composable Terraform modules (storage, compute, notifications, IAM) rather than one large configuration.",
        "Used per-environment variable files so the same module code deploys consistently across environments.",
        "Wrote IAM policies scoped to specific resource ARNs and actions instead of broad managed policies.",
      ],
      keyDecisions: [
        {
          decision: "Split infrastructure into small, composable modules.",
          rationale:
            "Smaller modules are easier to review, test in isolation, and reuse across other pipelines without copy-pasting configuration.",
        },
        {
          decision: "Validate every change in CI before allowing an apply.",
          rationale:
            "Running `terraform fmt`, `validate`, and `plan` in GitHub Actions catches configuration errors and unintended resource changes before they reach an environment.",
        },
      ],
      challenges: [
        {
          challenge: "Balancing least-privilege IAM with practical maintainability.",
          response:
            "Built resource-scoped policy templates per module so tightening permissions didn't require hand-writing a new policy for every Lambda function.",
        },
      ],
      solution:
        "A modular Terraform project that any environment can deploy consistently, with least-privilege IAM by default and automated validation gating every change before it reaches an environment.",
      testing: [
        "`terraform validate` and `terraform fmt -check` run automatically in GitHub Actions.",
        "`terraform plan` reviewed on every pull request before merge.",
        "Manual verification of IAM policies against the principle of least privilege.",
      ],
      observability: [
        "CloudWatch log groups for every Lambda function.",
        "SNS notifications for pipeline and deployment events.",
      ],
      security: [
        "KMS encryption for data at rest across all provisioned storage.",
        "IAM policies scoped to specific resource ARNs rather than wildcard permissions.",
        "Credentials stored in Secrets Manager, never in Terraform variables or state files in plaintext.",
      ],
      results: [],
      lessonsLearned: [
        "Small, composable modules pay off quickly once the same infrastructure needs to be reused in a second environment.",
        "CI-gated `terraform plan` review catches unintended resource replacements before they become incidents.",
      ],
      futureImprovements: [
        "Add automated policy linting (e.g., checking for wildcard IAM actions) as a CI step.",
        "Add drift detection to periodically compare deployed state against configuration.",
      ],
    },
  },
  {
    slug: "data-platform-observability",
    name: "Data Platform Observability",
    description:
      "A monitoring and alerting solution for distributed data-processing workloads using Prometheus-compatible metrics and Grafana.",
    challenge:
      "Distributed streaming workloads fail in ways that are easy to miss until data is already stale — consumer lag, checkpoint failures, and resource exhaustion all need to be visible before they become incidents.",
    solution:
      "A monitoring stack that scrapes Flink, Kafka, and Kubernetes metrics into a Prometheus-compatible backend, surfaces them through purpose-built Grafana dashboards, and routes threshold-based alerts to the right channel.",
    keyFeatures: [
      "Flink job-health metrics",
      "Kubernetes resource monitoring",
      "CPU and memory alerts",
      "Pipeline throughput",
      "Kafka consumer lag",
      "Checkpoint-health monitoring",
      "Error-rate monitoring",
      "Alert routing",
      "Operational dashboards",
    ],
    technologies: [
      "Grafana",
      "Prometheus",
      "Grafana Alloy",
      "Mimir",
      "Kubernetes",
      "Apache Flink",
      "Apache Kafka",
    ],
    links: {
      caseStudy: "/projects/data-platform-observability",
    },
    featured: true,
    caseStudy: {
      overview:
        "An observability layer purpose-built for streaming data workloads — collecting Flink, Kafka, and Kubernetes metrics and turning them into dashboards and alerts that surface problems before data goes stale.",
      problem:
        "Generic infrastructure monitoring doesn't answer the questions that matter for a streaming pipeline: is consumer lag growing, are checkpoints succeeding, is a job silently failing to make progress. The goal was a monitoring setup tailored to those pipeline-specific failure modes.",
      constraints: [
        "Must monitor both application-level metrics (job health, consumer lag) and infrastructure-level metrics (CPU, memory, pod restarts).",
        "Alerting must be routed by severity so non-critical warnings don't page anyone at 3 a.m.",
        "Metrics collection must scale with the number of jobs without manual dashboard duplication.",
      ],
      responsibilities: [
        "Defined the metrics-collection pipeline using Grafana Alloy and Prometheus-compatible remote write into Mimir.",
        "Built Grafana dashboards for job health, resource usage, and pipeline throughput.",
        "Configured alert rules and routing for checkpoint failures, consumer lag, and resource exhaustion.",
      ],
      architecture:
        "Grafana Alloy agents scrape metrics from Flink job managers, Kafka exporters, and Kubernetes nodes/pods, then remote-write them into Mimir for long-term, horizontally scalable storage. Grafana queries Mimir to render dashboards, and alert rules evaluate against the same metric streams to trigger notifications when thresholds are crossed.",
      technicalApproach: [
        "Standardized on Prometheus-compatible metric formats so the same dashboards work across Flink, Kafka exporter, and Kubernetes metrics.",
        "Used Grafana Alloy as the collection agent to centralize scrape configuration instead of managing per-service Prometheus instances.",
        "Wrote alert rules directly against key pipeline signals: consumer lag growth rate, checkpoint failure count, and job restart frequency.",
      ],
      keyDecisions: [
        {
          decision: "Use Mimir for long-term metrics storage instead of standalone Prometheus.",
          rationale:
            "Mimir's horizontally scalable, long-term storage avoids the retention and scaling limits of a single Prometheus instance as the number of monitored jobs grows.",
        },
        {
          decision: "Route alerts by severity rather than sending everything to one channel.",
          rationale:
            "Separating paging-worthy alerts (checkpoint failures, job crash loops) from informational warnings keeps on-call response focused on what actually needs immediate attention.",
        },
      ],
      challenges: [
        {
          challenge: "Distinguishing real consumer-lag problems from expected, temporary spikes.",
          response:
            "Alerted on sustained lag growth over a rolling window rather than an instantaneous threshold, reducing noisy alerts during normal traffic bursts.",
        },
      ],
      solution:
        "A dashboard and alerting layer that gives on-call engineers a single place to see job health, resource pressure, and pipeline throughput, with alert routing tuned to reduce noise.",
      testing: [
        "Verified alert rules against synthetic failure scenarios (manually failing a checkpoint, throttling a consumer).",
        "Reviewed dashboards with the team supporting the pipelines to confirm the surfaced metrics matched real triage needs.",
      ],
      observability: [
        "This project is the observability layer itself — dashboards for job health, resource usage, throughput, and consumer lag.",
        "Alert routing configured by severity to the appropriate notification channel.",
      ],
      security: [
        "Read-only, scoped credentials for metrics scraping targets.",
        "Dashboard access restricted to the engineering team operating the pipelines.",
      ],
      results: [],
      lessonsLearned: [
        "Alerting on trends (rate of change) rather than static thresholds significantly reduced false-positive pages.",
        "Dashboards designed with the on-call engineer's triage flow in mind get used far more than generic metric dumps.",
      ],
      futureImprovements: [
        "Add automated anomaly detection for metrics that don't have an obvious static threshold.",
        "Expand dashboards to cover data-quality signals alongside infrastructure health.",
      ],
    },
  },
  {
    slug: "data-engineering-toolkit",
    name: "Data Engineering Operations Toolkit",
    description:
      "A Python command-line toolkit for validating cloud resources, checking deployment configuration, and simplifying common data-platform operational tasks.",
    challenge:
      "Routine operational checks — verifying a resource exists, validating a config file, confirming a deployment is healthy — are easy to skip under time pressure unless they're fast and consistent to run.",
    solution:
      "A Python CLI that wraps common AWS resource checks, configuration validation, and deployment health checks into a small set of consistent, testable commands with structured logging.",
    keyFeatures: [
      "AWS resource validation",
      "Configuration-file validation",
      "Deployment health checks",
      "Structured logging",
      "CLI commands",
      "Unit tests",
      "Docker support",
      "GitHub Actions integration",
    ],
    technologies: ["Python", "AWS SDK for Python", "Pytest", "Docker", "GitHub Actions"],
    links: {
      caseStudy: "/projects/data-engineering-toolkit",
    },
    featured: true,
    caseStudy: {
      overview:
        "A Python CLI toolkit that consolidates the small, repetitive operational checks a data platform team runs regularly — resource validation, config checks, deployment health — into one consistent tool.",
      problem:
        "Operational checks that live as one-off scripts scattered across a team tend to drift, break silently, or simply not get run under time pressure. The goal was a single, tested CLI that made the right check the easy check.",
      constraints: [
        "Commands must be safe to run against production without making unintended changes (read-only by default).",
        "Must be runnable both locally and inside CI without additional setup beyond credentials.",
        "Output must be structured enough to parse in automation, not just human-readable text.",
      ],
      responsibilities: [
        "Designed the CLI command structure and argument interface.",
        "Implemented AWS resource-validation and configuration-validation checks using the AWS SDK for Python.",
        "Wrote the unit-test suite and the GitHub Actions workflow that runs it on every change.",
      ],
      architecture:
        "A single Python package exposes a CLI entry point with subcommands for resource validation, configuration validation, and deployment health checks. Each check is implemented as an independent, testable function that returns a structured result, which the CLI layer formats as human-readable output or structured JSON depending on the invocation flags.",
      technicalApproach: [
        "Used the AWS SDK for Python (boto3) for read-only resource checks, wrapped with clear, actionable error messages.",
        "Built configuration validation around explicit schema checks rather than ad hoc parsing.",
        "Added structured logging so CLI output can be consumed by both humans and automation.",
      ],
      keyDecisions: [
        {
          decision: "Make every command read-only by default.",
          rationale:
            "A toolkit meant to be run frequently and without ceremony needs to be safe to run against production without a second thought.",
        },
        {
          decision: "Support structured JSON output alongside human-readable output.",
          rationale:
            "The same checks needed to run both interactively and as a step inside CI, so the output had to be machine-parseable without a separate code path.",
        },
      ],
      challenges: [
        {
          challenge: "Keeping checks generic enough to be reusable across pipelines.",
          response:
            "Parameterized each check (resource identifiers, expected configuration values) instead of hard-coding assumptions about a specific pipeline.",
        },
      ],
      solution:
        "A tested, documented CLI that turns ad hoc operational scripts into a consistent set of commands that are safe to run locally, in CI, or during an incident.",
      testing: [
        "Unit tests covering each check's logic with Pytest.",
        "GitHub Actions workflow running the test suite on every pull request.",
        "Manual verification of CLI output formatting in both human-readable and JSON modes.",
      ],
      observability: [
        "Structured logging for every command invocation, including inputs and results.",
      ],
      security: [
        "Read-only AWS permissions required for all validation commands.",
        "No credentials or secrets are logged or persisted by the toolkit.",
      ],
      results: [],
      lessonsLearned: [
        "A CLI that's genuinely fast to run gets adopted; anything that adds friction gets skipped, no matter how useful it is.",
        "Structured output from day one made it trivial to later wire the same checks into CI without rewriting them.",
      ],
      futureImprovements: [
        "Add a `--fix` mode for checks that have an obvious, safe remediation.",
        "Expand configuration validation to cover additional pipeline config formats.",
      ],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
