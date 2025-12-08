# Personal Portfolio Website

This is a personal portfolio website built with Node.js and Express. It features a modern, responsive design and is ready for deployment.

## Project Structure

- `app.js`: The Express.js backend server entry point.
- `public/`: Contains static frontend assets (HTML, CSS, JS).
- `Dockerfile`: Configuration for Docker deployment.
- `package.json`: Project metadata and dependencies.

## Local Development

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Server:**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Docker

1.  **Build the Image:**
    ```bash
    docker build -t personal-website .
    ```

2.  **Run the Container:**
    ```bash
    docker run -p 3000:3000 -d personal-website
    ```

### VPS / Cloud

You can deploy this to any provider that supports Node.js (Heroku, Railway, Render, DigitalOcean, etc.).
Ensure you run `npm install` and your start command is `node app.js`.
