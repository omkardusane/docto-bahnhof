package auth

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
)

type LoginRequest struct {
	Username  string `json:"username"`
	Password  string `json:"password"`
	Signature string `json:"signature"` // base64-encoded
}

// HandleLogin handles login requests from the admin client.
// It expects a POST request with a JSON body containing
// a username, password, and signature (base64-encoded).
// It will return a JSON response with a token if the credentials
// are valid and the signature is correct.
// Otherwise, it will return a 401 Unauthorized response.
func HandleLogin(w http.ResponseWriter, r *http.Request) {
	var req LoginRequest
	body, _ := ioutil.ReadAll(r.Body)
	json.Unmarshal(body, &req)

	rawMessage := req.Username + ":" + req.Password
	if !VerifySignature([]byte(rawMessage), req.Signature) {
		http.Error(w, "Invalid signature", http.StatusUnauthorized)
		return
	}

	// Mock admin password check
	if req.Username != "admin" || req.Password != "secret" {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	token := GenerateToken(req.Username)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"token": token,
	})
}
