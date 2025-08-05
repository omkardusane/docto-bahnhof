package auth

import (
	"crypto"
	"crypto/rsa"
	"crypto/sha256"
	"crypto/x509"
	"encoding/base64"
	"encoding/pem"
	"io/ioutil"
	"log"
)

var clientPublicKey *rsa.PublicKey

func init() {
	pubKeyData, err := ioutil.ReadFile("keys/client_public.pem")
	if err != nil {
		log.Fatalf("Error reading public key: %v", err)
	}

	block, _ := pem.Decode(pubKeyData)
	pub, err := x509.ParsePKIXPublicKey(block.Bytes)
	if err != nil {
		log.Fatalf("Error parsing public key: %v", err)
	}

	clientPublicKey = pub.(*rsa.PublicKey)
}

func VerifySignature(message []byte, base64Sig string) bool {
	sig, err := base64.StdEncoding.DecodeString(base64Sig)
	if err != nil {
		return false
	}

	hashed := sha256.Sum256(message)

	err = rsa.VerifyPKCS1v15(clientPublicKey, crypto.SHA256, hashed[:], sig)
	return err == nil
}
