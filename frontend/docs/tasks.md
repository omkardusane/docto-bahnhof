

planned tasks next:

1. Make the layouts for all apps, doctors, admin, users and public+auth
2. Make Api client for admin app
3. Make APIs for auth and admin app, doctor creation with ts

todo: 
- Token management
- build time env management
- run time env management
- build process setup
- tests setup
- features:
    - doctor registration
    - admin login
    - admin approve dr
    - doctor self profile mgmt
    - user registration
    - user find doctors



# Admin managing doctors
we need 4 functions,  
1. get all doctors with filters as params, status=approved/unapproved, and respond with basic logic 
2. get one doctor profile ( detailed doctor object with name email specialities array, education, clinics array with name and id of clinic not else, )
3. add a new doctor: params(name, email, )
4. change status of a doctor, 4.2 generate password for doctor
