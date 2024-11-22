export interface License {
  id: string;
  assetId: string;
  licenseType: 'standard' | 'custom';
  expirationDate: Date;
  platformRestrictions: string[];
  usagePermissions: string[];
}

export interface LicenseAssignment {
  assetId: string;
  licenses: License[];
}

export interface LicenseValidationResult {
  valid: boolean;
  message: string;
}
