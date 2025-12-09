# Rusdi's Personal Portfolio Website

A modern, responsive personal portfolio website built with Node.js, Express, and a premium "Glassmorphism" UI design.

## Features
- **Modern UI**: Glassmorphism design system with smooth animations.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Backend**: Lightweight Node.js & Express server.
- **Automated Deployment**: CI/CD pipeline using GitHub Actions (SSH & Releases).

## Project Structure
```
├── src/
│   ├── app.js          # Express server entry point
│   ├── public/         # Frontend assets (HTML, CSS, JS)
│   └── .github/        # GitHub Actions workflows
├── SERVER_SETUP.md     # Instructions for VPS provisioning
├── Dockerfile          # Docker configuration
└── package.json        # Dependencies & scripts
```

## Local Development

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start the Server:**
    ```bash
    npm start
    ```
    Access the site at [http://localhost:3000](http://localhost:3000).

## Deployment

### Automated Deployment (GitHub Actions)
This repository is configured to automatically deploy to a VPS.

1.  **Setup Server**: Follow the instructions in [SERVER_SETUP.md](./SERVER_SETUP.md) to prepare your VPS.
2.  **Configure Secrets**: Add `SSH_HOST`, `SSH_USER`, and `SSH_KEY` to your GitHub Repository Secrets.
3.  **Deploy**:
    - **Push a Tag**: Create a new release by pushing a tag (e.g., `v1.0.0`).
    ```bash
    git tag v1.0.0
    git push origin v1.0.0
    ```
    - This triggers the `release.yml` workflow to build the artifact.
    - Then `deploy.yml` automatically deploys it to your server at `/srv/rusdi`.

### Docker
1.  **Build**: `docker build -t rusdi-website .`
2.  **Run**: `docker run -p 3000:3000 -d rusdi-website`
