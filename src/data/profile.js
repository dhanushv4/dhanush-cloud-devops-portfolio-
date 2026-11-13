
const profile = {
  name: "Dhanush V",
  role: "MCA Graduate",
  email: "vdhanushyam@gmail.com",
  phone: "6380921601",
  location: "Bengaluru, India",
  headline: "CLOUD & DEVOPS",

  image: "/image/cloud.png",

  about: `
MCA graduate with hands-on project experience in AWS, Linux, Docker,
Kubernetes, Git, Jenkins, Argo CD, Terraform, Ansible, NGINX and Bash.

Experienced in containerized application deployment, Infrastructure
as Code, CI/CD workflows, cloud infrastructure, automation,
monitoring and troubleshooting through practical projects.

Seeking an entry-level Cloud Engineer, DevOps Engineer,
AWS Engineer, Cloud Infrastructure Engineer or Junior SRE role.
`,

  experience: [
    {
      title: "Cloud Computing & DevOps Intern",
      company: "QUBINEX",
      location: "Chennai, Tamil Nadu",
      period: "2026",      trainer: "Prabhu S",
      trainerRole: "Technical Lead",
      status: "Internship Completed",

      description:[
  "Successfully completed an internship in Cloud Computing with exposure to cloud technologies and DevOps practices.",
  "Developed foundational knowledge of cloud computing concepts, services, and real-world applications.",
  "Gained practical exposure to DevOps workflows, infrastructure technologies, and deployment processes.",
  "Completed assigned internship tasks with consistency, dedication, and attention to detail.",
  "Demonstrated problem-solving abilities, discipline, and a proactive approach to learning.",
  "Strengthened technical skills through practical exercises and project-based learning activities."
],
     
    },

  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "Saveetha University",
      location: "Chennai",
      period: "2024–2026",
      cgpa: "7.65"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "VIT University",
      location: "Vellore",
      period: "2021–2024",
      cgpa: "6.94"
    }
  ],


certifications: [
  {
    title: "Cloud Computing",
    issuer: "ACTE, Bengaluru",
    year: "2026",
    file: "/certificates/Dhanush-V-ACTE-Certificate.pdf",
    image: "/certificates/acte-preview.jpg"
  },
  {
    title: "Cloud Computing Internship",
    issuer: "QUBINEX",
    year: "2026",
    file: "/certificates/DHANUSH-V-INTERNSHIP-CERTIFICATE.pdf",
    image: "/certificates/qubinex-preview.jpg"
  }
],

  expertise: [
    "AWS EC2",
    "AWS S3",
    "AWS IAM",
    "AWS VPC",
    "AWS Lambda",
    "AWS SQS",
    "AWS API Gateway",
    "AWS DynamoDB",
    "AWS CloudWatch",
    "AWS Security Groups",
    "GCP Fundamentals",
    "Linux",
    "Ubuntu",
    "Bash",
    "Git",
    "GitHub",
    "GitHub Actions",
    "Jenkins",
    "CI/CD",
    "Argo CD",
    "GitOps Fundamentals",
    "Docker",
    "Docker Compose",
    "Kubernetes",
    "Minikube",
    "Terraform",
    "Ansible",
    "NGINX",
    "HTTP/HTTPS",
    "Port Mapping",
    "Prometheus",
    "Grafana",
    "Node Exporter",
    "cAdvisor",
    "MySQL",
    "SQL Fundamentals",
    "JSON",
    "YAML",
    "Cloud Cost Estimation"
  ],

  languages: [
    "Tamil",
    "English"
  ],

  github: "https://github.com/dhanushv4",

  linkedin: "https://www.linkedin.com/in/dhanush05v/",

  resume: "/Dhanush.pdf",

  projects: [
    {
      title: "Cloud-Based Chaos Engineering & Infrastructure Monitoring",

      description: `
DevOps project focused on simulating infrastructure failures and
monitoring system behavior under different load conditions.

Built AWS infrastructure using Terraform and EC2 and containerized
workloads using Docker and Docker Compose.

Simulated CPU, memory, disk and inode failures and used AWS Lambda
and SQS for load and burst testing.

Monitored infrastructure and containers using CloudWatch.

Automated Docker builds and deployments using GitHub Actions and
used Docker Hub for image versioning and rollback.

Developed supporting services using Flask, NGINX, Linux and Bash.
`,

      technologies: [
        "AWS EC2", "Terraform", "Docker", "Docker Compose",
        "AWS Lambda", "Amazon SQS", "CloudWatch", "Flask",
        "NGINX", "GitHub Actions", "Docker Hub", "Linux", "Bash"
      ],

      github: "https://github.com/dhanushv4/chaos-lab.git",
      youtube: "https://youtu.be/NeNoNlKaAUI?si=U2pmD-xFapj6lZZP",
      documents: "public/docements/Choas Engineer-Cloud Based.pdf"
    },

    {
      title: "Cloud-Agnostic Terraform & Ansible Automation Platform",

      description: `
Automated multi-cloud infrastructure deployment using Terraform
and Ansible, supporting AWS and GCP.

Created reusable infrastructure configurations and automated
cloud resource provisioning.

Used Ansible for server configuration and inventory management.

Automated Docker and NGINX installation and deployment.

Created shell scripts for automated deployment, verification
and infrastructure cleanup.
`,

      technologies: [
        "AWS", "GCP", "Terraform", "Ansible", "Docker",
        "NGINX", "Bash", "Linux", "Shell Scripting"
      ],

      github: "https://github.com/dhanushv4/cloud-agnostics",
      youtube: "https://youtu.be/3M60xOIgRKA?si=AgP_-w5n3IHEXnRE",
      document: "public/docements/Cloud-Agnostics docement.pdf"
    },

    {
      title: "AWS Cloud Cost Estimation & Analysis",

      description: `
Developed a desktop application to estimate AWS infrastructure
costs based on configurable cloud resources.

Designed a graphical user interface for resource selection
and cost estimation.

Used structured JSON pricing data for resource-based
cost calculations and cloud cost analysis.
`,

      technologies: [
        "Python", "Tkinter", "JSON", "AWS Pricing",
        "Cloud Cost Estimation", "Git", "GitHub"
      ],

      github: "https://github.com/dhanushv4/aws-cost-estimation.git"
    },

    {
      title: "AWS Serverless Web Analytics & Feedback Platform",

      description: `
Developed a serverless web analytics and visitor feedback platform
using AWS services.

Hosted the frontend using Amazon S3 and integrated API Gateway
with AWS Lambda for backend processing.

Used DynamoDB to store page-view analytics and visitor feedback.

Configured EventBridge for scheduled processing and CloudWatch
for application logging and monitoring.
`,

      technologies: [
        "AWS Lambda", "Amazon API Gateway", "Amazon DynamoDB",
        "Amazon S3", "Amazon EventBridge", "Amazon CloudWatch",
        "HTML", "CSS", "JavaScript", "REST API",
        "Serverless Architecture", "Git", "GitHub"
      ],

      github: "https://github.com/dhanushv4/aws-serverless-web-analytics"
    }
  ]
};

export default profile;
