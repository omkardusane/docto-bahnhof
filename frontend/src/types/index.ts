export interface Doctor {
  id: string;
  name: string;
  specialties: string[];
  clinics: string[];
}

export interface Clinic {
  id: string;
  name: string;
  doctors: string[];
}