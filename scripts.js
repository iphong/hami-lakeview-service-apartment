document.getElementById('wifiButton').addEventListener('click', function() {
    // WiFi details: SSID "TANG N", password "123cthuykhueN", WPA encryption
    const wifiString = 'WIFI:S:TANG N;T:WPA;P:123cthuykhueN;;';

    // Check if modal already exists
    let modal = document.getElementById('wifiModal');
    if (!modal) {
        // Create modal
        modal = document.createElement('div');
        modal.id = 'wifiModal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';

        const content = document.createElement('div');
        content.style.backgroundColor = 'white';
        content.style.padding = '20px';
        content.style.borderRadius = '10px';
        content.style.textAlign = 'center';
        content.innerHTML = '<h3>Scan QR Code to Connect to WiFi</h3><div id="qrcode"></div><br><button id="closeModal">Close</button>';

        modal.appendChild(content);
        document.body.appendChild(modal);

        // Close modal event
        document.getElementById('closeModal').addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Show modal
    modal.style.display = 'flex';

    // Clear previous QR code
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = '';

    // Generate QR code
    QRCode.toCanvas(qrContainer, wifiString, { width: 256, height: 256 }, function (error) {
        if (error) {
            console.error('Error generating QR code:', error);
            qrContainer.innerHTML = '<p>Error generating QR code. WiFi SSID: TANG N, Password: 123cthuykhueN</p>';
        }
    });
});
