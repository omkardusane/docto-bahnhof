const fs = require('fs');
const fetch = require('node-fetch');
const forge = require('node-forge');

const SERVER_URL = 'http://localhost:8080';

const username = 'admin';
const password = 'secret';

async function loadPrivateKey() {
    const pem = fs.readFileSync('client_private.pem', 'utf8');
    return forge.pki.privateKeyFromPem(pem);
}

function signMessage(privateKey, message) {
    const md = forge.md.sha256.create();
    md.update(message, 'utf8');
    const signature = privateKey.sign(md);
    return Buffer.from(signature).toString('base64');
}

async function login() {
    const privateKey = await loadPrivateKey();
    const message = `${username}:${password}`;
    const signature = signMessage(privateKey, message);

    const response = await fetch(`${SERVER_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, signature })
    });

    if (!response.ok) {
        console.error('Login failed:', await response.text());
        return;
    }

    const data = await response.json();
    console.log('Received token:', data.token);
    return data.token;
}

async function verifyToken(token) {
    const response = await fetch(`${SERVER_URL}/auth/verify`, {
        headers: { 'Authorization': token }
    });

    const text = await response.text();
    console.log('Verify response:', response.status, text);
}

(async () => {
    const token = await login();
    if (token) {
        await verifyToken(token);
    }
})();
