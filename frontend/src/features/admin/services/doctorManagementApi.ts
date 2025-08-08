import type { DoctorStatus, Doctor } from "../../../types/doctors";
import type { DoctorFilters } from "../types";

// Mock data for demonstration
const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Alice',
    email: 'alice@example.com',
    status: 'approved',
    specialities: ['Cardiology'],
    education: 'MD',
    clinics: [{ id: 'c1', name: 'Central Clinic' }]
  },
  {
    id: '2',
    name: 'Dr. Bob',
    email: 'bob@example.com',
    status: 'unapproved',
    specialities: ['Dermatology'],
    education: 'MBBS',
    clinics: [{ id: 'c2', name: 'Westside Clinic' }]
  }
];

// 1. Get all doctors with filters
export function getAllDoctors(filters: DoctorFilters = {}): Doctor[] {
  return doctors.filter(doc => {
    if (filters.status && doc.status !== filters.status) return false;
    if (filters.name && !doc.name.toLowerCase().includes(filters.name.toLowerCase())) return false;
    if (filters.email && !doc.email.toLowerCase().includes(filters.email.toLowerCase())) return false;
    if (filters.speciality && !doc.specialities.includes(filters.speciality)) return false;
    return true;
  });
}

// 2. Get one doctor profile (detailed)
export function getDoctorProfile(id: string): Doctor | undefined {
  return doctors.find(doc => doc.id === id);
}

// 3. Add a new doctor
export function addDoctor(name: string, email: string): Doctor {
  const newDoctor: Doctor = {
    id: (doctors.length + 1).toString(),
    name,
    email,
    status: 'unapproved',
    specialities: [],
    education: '',
    clinics: []
  };
  doctors.push(newDoctor);
  return newDoctor;
}

// 4. Change status of a doctor
export function changeDoctorStatus(id: string, status: DoctorStatus): boolean {
  const doctor = doctors.find(doc => doc.id === id);
  if (doctor) {
    doctor.status = status;
    return true;
  }
  return false;
}

// 4.2 Generate password for doctor
export function generateDoctorPassword(id: string): string | undefined {
  const doctor = doctors.find(doc => doc.id === id);
  if (doctor) {
    // Simple password generation for demo
    const password = Math.random().toString(36).slice(-8);
    // In real app, you would save this securely and/or send to doctor
    return password;
  }
  return undefined;
}