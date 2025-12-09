const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route for SPA (optional, or just for root)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// gunakan variabel port yang sudah dideklarasi
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// tangani error global agar tercatat di journal/systemd
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err && err.stack ? err.stack : err);
    // beri waktu agar log flush, lalu exit (systemd bisa restart)
    setTimeout(() => process.exit(1), 100);
});

process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
    setTimeout(() => process.exit(1), 100);
});