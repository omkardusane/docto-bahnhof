codebase structure:

write authslice, mainlayout, main.ts,  /src/store/index.ts ,


```
/src
├── /assets                    # Images, icons, etc.
├── /components               # Shared, reusable components (UI only)
│   └── /common               # Buttons, inputs, modals, etc.
├── /features                 # Feature-based modular folders
│   ├── /auth                 # Login, registration, roles
│   ├── /search               # Doctor discovery
│   ├── /appointments         # Appointment booking, status tracking
│   ├── /profile              # Doctor/patient profile management
│   ├── /publish              # Doctor self-publishing (add/edit clinics)
│   ├── /admin                # Admin dashboard, doctor approval
│   └── /dashboard            # Doctor or patient dashboard
├── /hooks                    # Custom hooks (useAuth, useRole, etc.)
├── /lib                      # API clients, validators, utility functions
├── /routes                   # App routes, route guards
├── /store                    # Global store (Redux/RTK or Zustand)
├── /types                    # Global TypeScript types/interfaces
├── /services                 # Centralized API access layer (if shared)
├── /layouts                  # Role-based layouts
├── /styles                   # Tailwind or CSS modules
├── App.tsx
├── main.tsx
└── index.html
```



/                           # Public landing page
/about                      # About page
/contact                    # Contact page

# Auth Routes
/auth/login                 # General login (redirects based on role)
/auth/register              # Register general user (patient)
/auth/register/doctor       # Doctor registration form
/auth/forgot-password       # Password reset

# Admin Routes (Protected)
/admin                      # Admin login page
/admin/dashboard            # Admin dashboard
/admin/doctors              # Manage all doctors, add approve, remove & clinics
/admin/settings             # Admin settings

# Doctor Routes (Protected)
/doctor                     # Doctor dashboard
/doctor/profile             # Doctor profile management
/doctor/clinics             # View assigned clinics
-- do clinic mgmt, appointments mgmt, schedule mgmt