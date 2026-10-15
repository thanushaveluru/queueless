export type TokenStatus = 'waiting' | 'arrived' | 'serving' | 'completed' | 'cancelled';

export interface QueueToken {
  id: string;
  tokenNumber: string;
  customerName: string;
  customerPhone?: string;
  serviceCenter: string;
  department: string;
  counterId?: string;
  bookingTime: string;
  status: TokenStatus;
  qrPayload: string;
  arrivedAt?: string;
  servingAt?: string;
  completedAt?: string;
  notes?: string;
}

export interface DepartmentInfo {
  id: string;
  name: string;
  codePrefix: string;
  description: string;
  avgWaitMins: number;
  activeCounters: string[];
}

export interface ServiceCenterInfo {
  id: string;
  name: string;
  address: string;
  workingHours: string;
}

export type ActiveTab = 'booking' | 'scanner' | 'staff_dashboard' | 'public_board';
