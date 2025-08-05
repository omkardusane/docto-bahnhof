🔐 Authentication Flow
Client → Server

Sends username, password + signed payload using RSA-4096 private key.

Server

Verifies the signature with the client’s public key.

Checks username/password (we’ll mock this for now).

Issues an auth token (e.g., JWT or HMAC-based token).

Client → Server (subsequent requests)

Sends the auth token.

Optionally signs request again.

--
Token format: Custom token (can switch to JWT later)

RSA: Go's crypto/rsa and crypto/x509 packages

Server: net/http

--

admin-auth-server/
├── main.go
├── auth/
│   ├── handlers.go
│   ├── token.go
│   └── rsa.go
└── keys/
    ├── client_public.pem
    └── server_private.pem

---
# Generate client's keypair
openssl genpkey -algorithm RSA -out client_private.pem -pkeyopt rsa_keygen_bits:4096
openssl rsa -pubout -in client_private.pem -out client_public.pem