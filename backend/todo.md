1. Auth for admins, clinics, patients 
2. Doctors Discovery feature with filters and locations
3. Doctor and clinic profiles, with doctor specialities and covrage 
4. Clinic's availabilities in general
5. Patient's basic communication to request if an appointment can be made in certain range


1.1 Admin auth

- Server accepts a signed request (with rsa4096 private key) a username and pwd from client
- Server responds with an auth token
- Client always sends the request with auth token and maybe signs it again
