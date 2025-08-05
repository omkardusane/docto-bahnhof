package auth

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"net/http"
	"time"
)

var secretKey = []byte("supersecretkey")

func GenerateToken(username string) string {
	timestamp := time.Now().Unix()
	data := fmt.Sprintf("%s:%d", username, timestamp)

	mac := hmac.New(sha256.New, secretKey)
	mac.Write([]byte(data))
	signature := mac.Sum(nil)

	return fmt.Sprintf("%s:%d:%s", username, timestamp, hex.EncodeToString(signature))
}

func VerifyToken(w http.ResponseWriter, r *http.Request) {
	token := r.Header.Get("Authorization")
	var username string
	var timestamp int64
	var sigHex string

	_, err := fmt.Sscanf(token, "%s:%d:%s", &username, &timestamp, &sigHex)
	if err != nil {
		http.Error(w, "Invalid token format", http.StatusBadRequest)
		return
	}

	expected := fmt.Sprintf("%s:%d", username, timestamp)
	mac := hmac.New(sha256.New, secretKey)
	mac.Write([]byte(expected))
	expectedSig := hex.EncodeToString(mac.Sum(nil))

	if sigHex != expectedSig {
		http.Error(w, "Invalid token", http.StatusUnauthorized)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Token is valid"))
}
