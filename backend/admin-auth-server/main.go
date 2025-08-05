package main

import (
	"admin-auth-server/auth"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/auth/login", auth.HandleLogin)
	http.HandleFunc("/auth/verify", auth.VerifyToken)

	log.Println("Starting server on :8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
