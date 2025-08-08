import type { DoctorSummary } from "./doctors";

export interface ClinicSummary {
  id: string;
  name: string;
}

export interface ClinicProfile {
  id: string;
  name: string;
  doctors: DoctorSummary[];
}