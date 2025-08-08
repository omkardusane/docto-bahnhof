
import type { DoctorStatus, Doctor } from "../../types/doctors";

export interface DoctorFilters {
  status?: DoctorStatus;
  name?: string;
  email?: string;
  speciality?: string;
}
