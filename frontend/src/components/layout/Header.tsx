import { Link } from 'react-router'
import './header.css'
export default function Header() {
  const navItems = [
    {
      label: "Home",
      href: "/",
      subMenu: [],
    },
    {
      label: "Login",
      href: "/auth",
      subMenu: [
        { label: "Register", href: "/auth/register" },
      ],
    },
    {
      label: "User App",
      href: "/app",
      subMenu: [
        { label: "Find Doctor", href: "/app/find-doctor" },
        { label: "Manage Appointments", href: "/app/manage-appointments" },
      ],
    },
    {
      label: "Doctor App",
      href: "/doctor",
      subMenu: [
        { label: "Manage Clinics", href: "/doctor/manage-clinics" },
        { label: "Manage Appointments", href: "/doctor/manage-appointments" },
      ],
    },
    {
      label: "Admin App",
      href: "/admin",
      subMenu: [
        { label: "Manage Users", href: "/admin/manage-users" },
        { label: "Manage Doctors", href: "/admin/manage-doctors" },
        { label: "Manage Clinics", href: "/admin/manage-clinics" },
      ],
    },
  ];

  return (
    <header className="navbar">
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
              {item.subMenu.length > 0 && (
                <ul className="sub-menu">
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.label} className="sub-menu-item">
                      <a href={subItem.href}>{subItem.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
