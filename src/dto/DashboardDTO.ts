export interface CreateDashboardDTO {
  overview: string;
  statistics: string;
  permissions: string;
  reporting: string;
}

export interface UpdateDashboardDTO {
  overview?: string;
  statistics?: string;
  permissions?: string;
  reporting?: string;
}
