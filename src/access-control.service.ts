export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

type Role = 'Manager' | 'Freelancer' | 'Admin';

export interface RolePermissions {
  role: Role;
  allowedActions: string[]; // e.g., ["upload_asset", "delete_asset"]
}

export interface AccessRequest {
  userId: string;
  assetId: string;
  requestedAction: string; // e.g., "view", "edit"
}

export interface AccessResponse {
  granted: boolean;
  reason?: string;
}
