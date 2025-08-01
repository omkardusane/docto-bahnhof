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