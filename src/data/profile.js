const profile = {
  name: "Dhanush V",

  role: "MCA Graduate",

  email: "vdhanushyam@gmail.com",

  phone: "6380921601",

  location: "Bengaluru, India",

  headline: "CLOUD & DEVOPS",

  // Hero / portfolio image
  image: "/image/cloud.png",

  about: `
MCA graduate with hands-on experience in AWS, Linux, Docker, Kubernetes,
Git, Jenkins, Argo CD, Terraform, Ansible, NGINX and Bash.

Experienced in containerized application deployment, Kubernetes administration,
GitOps workflows, Infrastructure as Code, cloud infrastructure, automation,
monitoring and troubleshooting.

Familiar with Terraform-based infrastructure provisioning and
Ansible-based server configuration and deployment.

Seeking an entry-level Cloud/DevOps Engineer, AWS Engineer,
Cloud Infrastructure Engineer or SRE role.
`,

  experience: [
    "Cloud & DevOps Training — ACTE, Bengaluru | 2026",
    "Practiced AWS services including EC2, S3, IAM and VPC through hands-on cloud infrastructure exercises",
    "Worked with Linux, Bash, Docker and Kubernetes for system administration and application deployment",
    "Used Git, GitHub, Jenkins, Argo CD, NGINX and Terraform for version control, CI/CD, GitOps and Infrastructure as Code"
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "Saveetha University",
      location: "Chennai",
      period: "2024–2026",
      cgpa: "7.59"
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
    "Cloud Computing — ACTE, Bengaluru"
  ],

  expertise: [
    "AWS EC2",
    "AWS S3",
    "AWS IAM",
    "AWS VPC",
    "AWS CloudWatch",
    "AWS Security Groups",
    "AWS CLI",
    "Linux",
    "Ubuntu",
    "Bash",
    "Git",
    "GitHub",
    "Jenkins",
    "CI/CD",
    "Argo CD",
    "GitOps",
    "Docker",
    "Docker Compose",
    "Kubernetes",
    "Minikube",
    "Terraform",
    "Ansible",
    "NGINX",
    "Ingress",
    "HTTP/HTTPS",
    "Python",
    "Flask",
    "MySQL",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Shell Scripting"
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
        "AWS EC2",
        "Terraform",
        "Docker",
        "Docker Compose",
        "AWS Lambda",
        "Amazon SQS",
        "CloudWatch",
        "Flask",
        "NGINX",
        "GitHub Actions",
        "Docker Hub",
        "Linux",
        "Bash"
      ],

      github: "https://github.com/dhanushv4/chaos-lab.git",

      youtube: "https://youtu.be/NeNoNlKaAUI?si=U2pmD-xFapj6lZZP",

      documents: "public/docements/Choas Engineer-Cloud Based.pdf"
    },

    {
      title: "Cloud-Agnostic Terraform & Ansible Automation Platform",

      description: `
Automated multi-cloud infrastructure deployment using Terraform
and Ansible, supporting AWS and GCP through a single infra.conf
configuration file.

Automated AWS and GCP infrastructure provisioning using Terraform.

Used Ansible for server configuration and dynamic inventory.

Automated Docker and NGINX installation and deployment.

Implemented infrastructure validation and lifecycle management.

Created shell scripts for automated deployment, verification and cleanup.

Designed a reusable cloud-agnostic configuration workflow.
`,

      technologies: [
        "AWS",
        "GCP",
        "Terraform",
        "Ansible",
        "Docker",
        "NGINX",
        "Bash",
        "Linux",
        "Shell Scripting"
      ],

      github: "https://github.com/dhanushv4/cloud-agnostics",

      youtube: "https://youtu.be/3M60xOIgRKA?si=AgP_-w5n3IHEXnRE",

      document: "public/docements/Cloud-Agnostics docement.pdf"
    },

    {
      title: "AWS Cloud Cost Estimation & Analysis",

      description: `
Python-based AWS cloud cost estimation application designed to
estimate infrastructure costs before deployment.

Developed a GUI-based cost estimation tool that allows users to
select AWS resources and calculate estimated monthly and yearly costs.

Implemented cost calculation logic for AWS infrastructure resources
and provided visual cost analysis through charts and reports.

Built the application using Python and Tkinter with a simple
user-friendly interface for cloud cost planning.

The project helps users understand estimated AWS infrastructure
expenses and compare resource costs before deployment.
`,

      technologies: [
        "AWS",
        "Python",
        "Tkinter",
        "AWS EC2",
        "Cloud Cost Estimation",
        "Cost Analysis",
        "GUI",
        "Data Visualization",
        "Linux",
        "Git",
        "GitHub"
      ],

      github: "https://github.com/dhanushv4/aws-cost-estimation.git"
    }
  ]
};

export default profile;