import { type ClinicSummary } from './clinics';

export type DoctorStatus = 'approved' | 'unapproved';

export interface DoctorSummary {
  id: string;
  name: string;
}
export interface Doctor {
  id: string;
  name: string;
  email: string;
  status: DoctorStatus;
  specialities: string[];
  education: string;
  clinics: ClinicSummary[];
}