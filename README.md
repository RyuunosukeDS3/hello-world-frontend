<p align="center">
  <img src="https://angular.dev/assets/images/logos/angular/angular.svg" width="120" alt="Angular Logo" />
</p>

<h1 align="center">Hello World Frontend – DevSecOps Edition</h1>

<p align="center">
  <a href="https://github.com/your-org/hello-world-frontend/actions/workflows/main.yml">
    <img src="https://github.com/your-org/hello-world-frontend/actions/workflows/main.yml/badge.svg" alt="CI Status" />
  </a>
  <a href="https://sonarcloud.io/summary/new_code?id=hello-world-frontend">
    <img src="https://sonarcloud.io/api/project_badges/measure?project=hello-world-frontend&metric=alert_status" alt="SonarCloud Status" />
  </a>
  <a href="https://hub.docker.com/r/your-org/hello-world-frontend">
    <img src="https://img.shields.io/docker/pulls/your-org/hello-world-frontend" alt="Docker Pulls" />
  </a>
</p>

---

## 🛡️ Overview

This project is a secure and automated frontend for the HelloWorld DevSecOps stack, built with Angular and integrated with a modern CI/CD pipeline. Key DevSecOps features include:

* **Static Code Analysis**: Integrated with SonarCloud for quality and security insights
* **Dependency and Image Scanning**: Powered by Trivy to detect known vulnerabilities
* **Automated Testing**: Includes unit test coverage and optional e2e test integration
* **Dockerized Delivery**: Build, scan, and deploy via containerization
* **GitHub Actions CI/CD**: Efficient and secure build pipelines with caching and artifact sharing

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) v22+
* [Yarn](https://yarnpkg.com/)
* [Docker](https://www.docker.com/)

### Installation

```bash
yarn install
```

---

## 🧪 Running the Application

### Development

```bash
ng serve
```

Visit [http://localhost:4200](http://localhost:4200)

### Production

```bash
ng build
```

The build output is stored in `dist/`.

---

## ✅ Testing

### Unit Tests

```bash
ng test
```

### Linting

```bash
ng lint
```

### Test Coverage

Use the Karma test runner to generate a coverage report:

```bash
ng test --code-coverage
```

---

## 🐳 Docker

### Build Docker Image

```bash
docker build -t hello-world-frontend:latest .
```

### Run Docker Container

```bash
docker run -p 4200:80 hello-world-frontend:latest
```

---

## 🔐 Security Scanning

### Filesystem Scan

```bash
trivy fs .
```

### Docker Image Scan

```bash
trivy image hello-world-frontend:latest
```

Both scans are integrated into CI to detect vulnerabilities early.

---

## 📈 Continuous Integration and Deployment

The GitHub Actions pipeline includes the following stages:

* **Lint**: Validate formatting and code style
* **Build**: Compile the Angular application
* **Test**: Run unit tests and generate coverage
* **Docker**: Build and tag the frontend container
* **Trivy FS**: Scan the source filesystem
* **Trivy Image**: Scan the built Docker image
* **SonarCloud**: Perform static code analysis and upload test coverage

Build artifacts and coverage reports are shared across jobs using GitHub Actions' artifact system.

---

## 📊 SonarCloud Integration

SonarCloud performs static analysis and tracks code quality metrics including vulnerabilities, code smells, and test coverage. Configuration is defined in the `sonar-project.properties` file and CI pipeline.

---

## 🧰 Tools and Technologies

* [Angular](https://angular.dev/)
* [SonarCloud](https://sonarcloud.io/)
* [Trivy](https://aquasecurity.github.io/trivy/)
* [GitHub Actions](https://github.com/features/actions)
* [Docker](https://www.docker.com/)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

