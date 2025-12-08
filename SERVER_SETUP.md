# Server Setup Instructions (Rusdi App)

Run these commands on your VPS (`cyber@202.10.38.230`) to prepare it for deployment.

## 1. Prepare Directories & Tools
Install `rsync` (required for deployment) and create directories.
```bash
sudo apt-get update
sudo apt-get install -y rsync git
sudo mkdir -p /srv/rusdi/current /var/log/rusdi
sudo chown -R cyber:cyber /srv/rusdi /var/log/rusdi
```

## 2. Configure Sudo for Restart (Important)
Allow the `cyber` user to restart the service without a password.
```bash
sudo visudo
```
Add this line at the very bottom:
```plaintext
cyber ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart rusdi
```
Save and exit (`Ctrl+X`, `Y`, `Enter`).

## 3. Create Systemd Service
Create the service file.
```bash
sudo nano /etc/systemd/system/rusdi.service
```
Paste this configuration:
```ini
[Unit]
Description=Rusdi Node App
After=network.target

[Service]
User=cyber
WorkingDirectory=/srv/rusdi/current
Environment=NODE_ENV=production
# Update this path if `node` is installed elsewhere (check with `which node`)
ExecStart=/usr/bin/node src/app.js
Restart=always
RestartSec=3
StandardOutput=append:/var/log/rusdi/rusdi.out.log
StandardError=append:/var/log/rusdi/rusdi.err.log

[Install]
WantedBy=multi-user.target
```
Save and exit (`Ctrl+X`, `Y`, `Enter`).

## 4. Enable Service
```bash
sudo systemctl daemon-reload
sudo systemctl enable rusdi
# Start it manually once (might fail if app code isn't there yet, which is fine)
sudo systemctl start rusdi
```

## 5. GitHub Secrets
On your GitHub repo, go to **Settings > Secrets and variables > Actions** and add:
- `SSH_HOST`: `202.10.38.230`
- `SSH_USERNAME`: `cyber` (Note: Ensure this matches the secret name used in `deploy.yml`, which is now `SSH_USER`)
- `SSH_KEY`: (Your private SSH key content)
