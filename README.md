# 🚀 Tech Stack Explorer - CI/CD Pipeline Demo

> **A Node.js application demonstrating enterprise-grade CI/CD implementation with Jenkins, Docker, Kubernetes & DevSecOps**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]() [![Docker](https://img.shields.io/badge/Docker-Enabled-blue)]() [![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-326CE5)]() [![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939)]()

**Purpose**: This project exists to demonstrate a complete DevOps CI/CD pipeline from code commit to production deployment. Focus is on the **pipeline architecture**, not the application itself.

---

## 🎯 Project Overview

This repository showcases a **production-ready Jenkins CI/CD pipeline** that includes:

✅ Automated testing & code coverage  
✅ Multi-layered security scanning (SAST, DAST, container scanning)  
✅ Docker containerization with Trivy vulnerability scanning  
✅ Multiple deployment strategies (EC2, Kubernetes GitOps, Lambda)  
✅ Infrastructure as Code (Kubernetes manifests)  
✅ GitOps workflow with ArgoCD  
✅ Automated artifact management (S3)  
✅ Slack notifications & reporting  

---

## 📊 CI/CD Pipeline Architecture

```
┌──────────────┐
│  Git Push    │
│   GitHub     │
└──────┬───────┘
       │
       ▼
┌─────────────────────────────────────────────────────────┐
│               JENKINS CI/CD PIPELINE                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────────────────────────────────┐         │
│  │ 1. Environment Setup                      │         │
│  │    • Node.js v22.6.0                     │         │
│  │    • npm install dependencies            │         │
│  └──────────────────────────────────────────┘         │
│                       │                                 │
│                       ▼                                 │
│  ┌──────────────────────────────────────────┐         │
│  │ 2. Security Scanning (Optional)          │         │
│  │    • NPM Audit                           │         │
│  │    • OWASP Dependency Check              │         │
│  └──────────────────────────────────────────┘         │
│                       │                                 │
│                       ▼                                 │
│  ┌──────────────────────────────────────────┐         │
│  │ 3. Testing                               │         │
│  │    • 13 Unit Tests (Mocha/Chai)         │         │
│  │    • 88.88% Code Coverage (NYC)         │         │
│  │    • JUnit XML Reports                  │         │
│  └──────────────────────────────────────────┘         │
│                       │                                 │
│                       ▼                                 │
│  ┌──────────────────────────────────────────┐         │
│  │ 4. Code Quality (Optional)               │         │
│  │    • SonarQube Analysis                  │         │
│  │    • Quality Gate Check                  │         │
│  └──────────────────────────────────────────┘         │
│                       │                                 │
│                       ▼                                 │
│  ┌──────────────────────────────────────────┐         │
│  │ 5. Docker Build                          │         │
│  │    • Build Image                         │         │
│  │    • Tag: user/app:$GIT_COMMIT          │         │
│  └──────────────────────────────────────────┘         │
│                       │                                 │
│                       ▼                                 │
│  ┌──────────────────────────────────────────┐         │
│  │ 6. Trivy Security Scan ⚠️                │         │
│  │    • LOW, MEDIUM, HIGH, CRITICAL         │         │
│  │    • Fail on CRITICAL vulnerabilities   │         │
│  │    • HTML + XML Reports                  │         │
│  └──────────────────────────────────────────┘         │
│                       │                                 │
│                       ▼                                 │
│  ┌──────────────────────────────────────────┐         │
│  │ 7. Push to Registry (Optional)           │         │
│  │    • Docker Hub                          │         │
│  └──────────────────────────────────────────┘         │
│                       │                                 │
│                       ▼                                 │
│  ┌──────────────────────────────────────────┐         │
│  │ 8. Deploy (Optional - Choose One)        │         │
│  │                                           │         │
│  │  A) AWS EC2                              │         │
│  │     • SSH Deploy                         │         │
│  │     • Docker container                   │         │
│  │                                           │         │
│  │  B) Kubernetes (GitOps)                  │         │
│  │     • Update manifest                    │         │
│  │     • Create PR                          │         │
│  │     • ArgoCD auto-sync                   │         │
│  │                                           │         │
│  │  C) AWS Lambda                           │         │
│  │     • ZIP package                        │         │
│  │     • S3 upload                          │         │
│  │     • Lambda update                      │         │
│  └──────────────────────────────────────────┘         │
│                       │                                 │
│                       ▼                                 │
│  ┌──────────────────────────────────────────┐         │
│  │ 9. DAST Testing (Optional)               │         │
│  │    • OWASP ZAP Scan                      │         │
│  └──────────────────────────────────────────┘         │
│                       │                                 │
│                       ▼                                 │
│  ┌──────────────────────────────────────────┐         │
│  │ 10. Artifact Storage (Optional)          │         │
│  │     • Upload to S3                       │         │
│  │     • Archive reports                    │         │
│  └──────────────────────────────────────────┘         │
│                       │                                 │
│                       ▼                                 │
│  ┌──────────────────────────────────────────┐         │
│  │ Post-Build                               │         │
│  │    • Slack Notifications                 │         │
│  │    • Publish HTML Reports                │         │
│  │    • Archive Artifacts                   │         │
│  └──────────────────────────────────────────┘         │
│                                                         │
└─────────────────────────────────────────────────────────┘
                       │
                       ▼
            ┌──────────────────────┐
            │  Production Deploy   │
            │  EC2 / K8s / Lambda  │
            └──────────────────────┘
```

---

## 🔄 Pipeline Stages Explained

### **Active Stages** (Currently Running)

| Stage | Tools | Purpose | Exit on Fail |
|-------|-------|---------|--------------|
| **Node/NPM Version** | Node.js, npm | Environment validation | No |
| **Install Dependencies** | npm | Install packages | Yes |
| **Unit Tests** | Mocha, Chai | Run 13 test cases | Yes |
| **Docker Build** | Docker | Create container image | Yes |
| **Trivy Scan** | Aqua Trivy | Security vulnerability scan | Yes (CRITICAL) |
| **Slack Notify** | Shared Library | Build status notifications | No |

### **Optional Stages** (Commented - Can Enable)

| Stage | Tools | Purpose | Configuration Required |
|-------|-------|---------|------------------------|
| **NPM Audit** | npm | Check for vulnerable dependencies | None |
| **OWASP Dependency Check** | OWASP CLI | CVE vulnerability database scan | OWASP tool in Jenkins |
| **Code Coverage** | NYC | Generate coverage reports | None |
| **SonarQube** | SonarQube Scanner | Code quality & security analysis | SonarQube server |
| **Docker Push** | Docker | Push image to registry | Docker Hub credentials |
| **EC2 Deploy** | SSH | Deploy container to EC2 | EC2 SSH credentials |
| **K8s GitOps** | Git, ArgoCD | Update K8s manifests via PR | GitHub token, GitOps repo |
| **Lambda Deploy** | AWS CLI, S3 | Serverless deployment | AWS credentials |
| **ZAP DAST** | OWASP ZAP | Dynamic security testing | Running application URL |
| **S3 Upload** | AWS S3 | Archive artifacts | AWS S3 credentials |

---

## 🛠️ Technologies & Tools

### **Application Stack**
- **Runtime**: Node.js 22.6.0
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Testing**: Mocha + Chai + NYC
- **Frontend**: HTML5, CSS3, Vanilla JavaScript

### **CI/CD Tools**
| Category | Tool | Usage |
|----------|------|-------|
| **CI/CD Orchestration** | Jenkins | Pipeline automation |
| **Version Control** | GitHub | Source code management |
| **Containerization** | Docker | Application packaging |
| **Container Orchestration** | Kubernetes | Production deployment |
| **Security Scanning** | Trivy | Container vulnerability scanning |
| **Code Quality** | SonarQube | Static code analysis |
| **SAST** | OWASP Dependency Check | Dependency CVE scanning |
| **DAST** | OWASP ZAP | Runtime security testing |
| **GitOps** | ArgoCD | Kubernetes deployment automation |
| **Artifact Storage** | AWS S3 | Report & package archiving |
| **Notifications** | Slack | Build alerts |

### **Cloud & Infrastructure**
- **AWS EC2**: VM-based deployment
- **AWS Lambda**: Serverless deployment
- **AWS S3**: Artifact storage
- **Docker Hub**: Container registry
- **Kubernetes**: Self-managed or EKS

---

## ⚙️ Jenkins Configuration

### **Required Plugins**
```
- Pipeline
- NodeJS Plugin
- Docker Pipeline
- Kubernetes CLI
- SSH Agent
- AWS Steps
- HTML Publisher
- Slack Notification
- Credentials Binding
```

### **Required Credentials**

| ID | Type | Usage |
|----|------|-------|
| `Mongo-DB-Username-password` | Username/Password | MongoDB connection |
| `User_ID` | Secret Text | MongoDB user |
| `Mongo_Password` | Secret Text | MongoDB password |
| `github-token` | Secret Text | GitHub API access |
| `docker-hub-creds` | Username/Password | Docker Hub push |
| `ssh-ec2-instance-creds` | SSH Username with Key | EC2 deployment |
| `aws-ec2-s3-lambda-creds` | AWS Credentials | AWS services |

### **Required Tools** (Manage Jenkins → Tools)

| Name | Type | Version |
|------|------|---------|
| `nodejs-22-6-0` | NodeJS | 22.6.0 |
| `sonar-qube-scanner-7.2.0` | SonarQube Scanner | 7.2.0 |
| `OWASP-Dep-Check-10` | Dependency-Check | 10.x |

### **Shared Library**
```groovy
@Library('IkramUlHaq-lib@trivyScan') _
```
Repository: Custom Jenkins shared library with Trivy scanning functions

---

## 🚀 Quick Start

### **1. Local Development**

```bash
# Clone repository
git clone https://github.com/ikramulhaq63/solar-system.git
cd solar-system

# Install dependencies
npm install

# Create environment file
cat > .env << EOF
MONGO_URI=mongodb://localhost:27017/techstack
MONGO_USERNAME=admin
MONGO_PASSWORD=password
NODE_ENV=development
PORT=3000
EOF

# Seed database
node seed.js

# Run tests
npm test
npm run coverage

# Start application
npm start
```

**Application**: http://localhost:3000  
**API**: POST http://localhost:3000/techstack  
**Health**: http://localhost:3000/live

### **2. Docker Deployment**

```bash
# Build image
docker build -t tech-stack-explorer:latest .

# Run container
docker run -d -p 3000:3000 \
  -e MONGO_URI=mongodb://host.docker.internal:27017/techstack \
  -e MONGO_USERNAME=admin \
  -e MONGO_PASSWORD=password \
  --name tech-stack-app \
  tech-stack-explorer:latest
```

### **3. Kubernetes Deployment**

```bash
# Development environment
kubectl apply -f kubernetes/development/

# Production environment
kubectl apply -f kubernetes/production/
```

---

## 📋 Pipeline Setup Instructions

### **Step 1: Fork & Clone**
```bash
git clone https://github.com/ikramulhaq63/solar-system.git
```

### **Step 2: Configure Jenkins**

1. **Install required plugins** (see list above)
2. **Add credentials** (MongoDB, GitHub, Docker Hub, AWS, SSH)
3. **Configure tools** (NodeJS, SonarQube Scanner, OWASP)
4. **Import shared library** (`IkramUlHaq-lib@trivyScan`)

### **Step 3: Create Pipeline Job**

1. New Item → Pipeline
2. Pipeline → Pipeline script from SCM
3. SCM → Git
4. Repository URL: `https://github.com/ikramulhaq63/solar-system.git`
5. Script Path: `Jenkinsfile`
6. Save

### **Step 4: Customize Jenkinsfile**

**Enable optional stages** by uncommenting:
```groovy
// stage('Dependencies Scanning') {  // ← Remove //
//     parallel {                     // ← Remove //
//         stage('NPM dependencies audit') {
```

**Update deployment targets**:
- EC2 IP address: Line 154
- GitOps repository: Line 181
- S3 bucket name: Line 256
- Lambda function name: Line 268

### **Step 5: Run Pipeline**

1. Click "Build Now"
2. Monitor console output
3. Check reports in Build → HTML Reports
4. View notifications in Slack

---

## 📊 Test Results

### **Coverage Report**
```
File      | % Stmts | % Branch | % Funcs | % Lines |
----------|---------|----------|---------|---------|
app.js    |   88.88 |      100 |   71.42 |   88.88 |
```

### **Test Cases** (13 passing)
- ✅ 10 Tech Stack API tests (Python, JavaScript, Java, Go, Rust, TypeScript, C++, Ruby, PHP, Invalid ID)
- ✅ 3 Health endpoint tests (OS info, Liveness, Readiness)

---

## 🔐 Security Features

### **Multi-Layer Security Scanning**

| Layer | Scanner | Severity Levels | Action |
|-------|---------|-----------------|--------|
| **Dependencies** | NPM Audit | Critical, High, Medium, Low | Alert |
| **Dependencies** | OWASP Dependency Check | CVE database | Report |
| **Code** | SonarQube | Bugs, Vulnerabilities, Code Smells | Quality Gate |
| **Container** | Trivy | CRITICAL, HIGH, MEDIUM, LOW | **Fail on CRITICAL** |
| **Runtime** | OWASP ZAP | OWASP Top 10 | Report |

### **Trivy Scanning Configuration**
```groovy
trivyScanScript.vulnerability(
    imageName: "ikramulhaq6363/solar-system:$GIT_COMMIT",
    severity: "CRITICAL",
    exitCode: 1  // Fail pipeline on CRITICAL vulnerabilities
)
```

---

## 🚢 Deployment Strategies

### **Option 1: AWS EC2** (Traditional VM)
```groovy
stage("Deploy on AWS EC2") {
    steps {
        sshagent(['ssh-ec2-instance-creds']) {
            sh '''
                ssh ubuntu@<EC2-IP> "
                    docker stop solar-system && docker rm solar-system
                    docker run -d -p 3000:3000 \
                        -e MONGO_URI=$MONGO_URI \
                        ikramulhaq6363/solar-system:$GIT_COMMIT
                "
            '''
        }
    }
}
```

### **Option 2: Kubernetes with GitOps** (ArgoCD)
```groovy
stage("k8s Update Image Tag") {
    steps {
        script {
            sh 'git clone https://github.com/ikramulhaq63/solar-system-gitops-argocd-gitea.git'
            sh 'sed -i "s#ikramulhaq6363.*#ikramulhaq6363/solar-system:$GIT_COMMIT#g" deployment.yml'
            sh 'git add . && git commit -m "Update to $GIT_COMMIT"'
            sh 'git push origin feature-$BUILD_ID'
        }
    }
}

stage("Create Pull Request") {
    steps {
        sh '''
            curl -X POST \
                -H "Authorization: token $GIT_HUB_TOKEN" \
                https://api.github.com/repos/.../pulls \
                -d '{"title":"Update to ${GIT_COMMIT}","head":"feature-${BUILD_ID}","base":"main"}'
        '''
    }
}
```

### **Option 3: AWS Lambda** (Serverless)
```groovy
stage('lambda - S3 Upload and deploy') {
    steps {
        withAWS(credentials: 'aws-ec2-s3-lambda-creds', region: 'us-east-2') {
            sh '''
                zip -qr solar-system-lambda-$BUILD_ID.zip app.js package.json node_modules
                aws s3 cp solar-system-lambda-$BUILD_ID.zip s3://mysolarsystemzip/
                aws lambda update-function-code \
                    --function-name mysolarsystemapp \
                    --s3-bucket mysolarsystemzip \
                    --s3-key solar-system-lambda-$BUILD_ID.zip
            '''
        }
    }
}
```

---

## 📁 Project Structure

```
solar-system/
├── app.js                  # Express application
├── app-controller.js       # Frontend logic
├── app-test.js            # Mocha/Chai tests
├── seed.js                # Database seeding
├── index.html             # Frontend UI
├── package.json           # Dependencies
├── Dockerfile             # Container build
├── Jenkinsfile            # ⭐ CI/CD Pipeline
├── .env.example           # Environment template
├── kubernetes/            # K8s manifests
│   ├── development/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   └── ingress.yaml
│   └── production/
│       ├── deployment.yaml
│       ├── service.yaml
│       └── ingress.yaml
├── coverage/              # Test reports
└── images/                # Static assets
```

---

## 🎓 Learning Outcomes

This project demonstrates mastery of:

✅ **Jenkins Pipeline Development** - Declarative syntax, shared libraries  
✅ **Docker & Containerization** - Multi-stage builds, optimization  
✅ **Kubernetes Deployment** - Manifests, multi-environment setup  
✅ **DevSecOps Practices** - SAST, DAST, container scanning  
✅ **GitOps Workflow** - Infrastructure as Code, ArgoCD automation  
✅ **AWS Services** - EC2, Lambda, S3 integration  
✅ **Automated Testing** - Unit tests, coverage, quality gates  
✅ **CI/CD Best Practices** - Fail-fast, notifications, artifact management  
✅ **Security Scanning** - Vulnerability detection & remediation  
✅ **Multi-Cloud Deployment** - Flexible deployment strategies  

---

## 🔧 Enabling Optional Stages

To activate commented stages in `Jenkinsfile`:

### **1. Enable Code Coverage**
```groovy
stage('Code Coverage') {  // Remove comment markers
    steps {
        sh 'npm run coverage'
    }
    post {
        always {
            publishHTML (target: [
                reportDir: 'coverage',
                reportFiles: 'index.html',
                reportName: "Code Coverage Report"
            ])
        }
    }
}
```

### **2. Enable Docker Push**
```groovy
stage("push to docker hub") {
    steps {
        withDockerRegistry(credentialsId: 'docker-hub-creds') {
            sh 'docker push ikramulhaq6363/solar-system:$GIT_COMMIT'
        }
    }
}
```

### **3. Enable EC2 Deployment**
- Update EC2 IP on line 154
- Ensure SSH credentials configured
- Uncomment the entire stage block

### **4. Enable GitOps Deployment**
- Create GitOps repository
- Add GitHub token credential
- Update repository URL on line 181
- Uncomment both stages (Update Image Tag + Create PR)

---

## 📚 API Documentation

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/techstack` | Get tech by ID | `{"id": 1}` |
| GET | `/` | Homepage | - |
| GET | `/os` | Pod/OS info | - |
| GET | `/live` | Liveness probe | - |
| GET | `/ready` | Readiness probe | - |

### **Sample API Call**
```bash
curl -X POST http://localhost:3000/techstack \
  -H "Content-Type: application/json" \
  -d '{"id": 1}'
```

### **Response**
```json
{
  "id": 1,
  "name": "Python",
  "description": "High-level interpreted programming language",
  "category": "Programming Language",
  "yearCreated": "1991",
  "popularity": "⭐⭐⭐⭐⭐ (Top 1)",
  "useCase": "AI/ML, Data Science, Web, Automation"
}
```

---

## 🐛 Troubleshooting

### **Tests Failing**
```bash
# Check MongoDB connection
mongosh --eval "db.version()"

# Verify environment variables
cat .env

# Run tests with verbose output
npm test -- --reporter spec
```

### **Docker Build Issues**
```bash
# Clear Docker cache
docker system prune -a

# Build with no cache
docker build --no-cache -t tech-stack-explorer .
```

### **Jenkins Pipeline Errors**

| Error | Solution |
|-------|----------|
| "node command not found" | Configure NodeJS tool in Jenkins |
| "Credential not found" | Add credential with exact ID |
| "Trivy scan failed" | Install Trivy on Jenkins server |
| "SonarQube quality gate failed" | Check SonarQube server connection |

---

## 🤝 Contributing

This is a learning/demonstration project. Contributions welcome:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-pipeline`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push branch (`git push origin feature/amazing-pipeline`)
5. Open Pull Request

---

## 📄 License

MIT License - Free to use for learning and demonstration.

---

## 👨‍💻 Author

**Ikram Ul Haq**
- GitHub: [@ikramulhaq63](https://github.com/ikramulhaq63)
- DockerHub: [ikramulhaq6363](https://hub.docker.com/u/ikramulhaq6363)
- GitOps Repo: [solar-system-gitops-argocd-gitea](https://github.com/ikramulhaq63/solar-system-gitops-argocd-gitea)

---

## 🙏 Acknowledgments

- **Jenkins Community** - CI/CD orchestration
- **Aqua Security** - Trivy vulnerability scanner
- **OWASP Foundation** - Security testing tools
- **ArgoCD Project** - GitOps automation

---

## 🎯 Next Steps

1. ✅ **Clone** the repository
2. ✅ **Run** application locally
3. ✅ **Execute** tests and view coverage
4. ✅ **Configure** Jenkins with credentials
5. ✅ **Run** the CI/CD pipeline
6. ✅ **Enable** optional stages as needed
7. ✅ **Deploy** to your chosen environment
8. ✅ **Monitor** with ArgoCD (if using GitOps)

---

**Built with ❤️ to demonstrate DevOps best practices**

**Ready to build your own CI/CD pipeline? Let's go! 🚀**

