enum LicenseType {
  COPYRIGHT = 'copyright',
  CREATIVE_COMMONS = 'creative_commons',
  CUSTOM = 'custom'
}

interface License {
  id: string;
  type: LicenseType;
  expirationDate: Date;
  usageRights: string[];
  platformRestrictions: string[];
}

abstract class LicenseManager {
  abstract assignLicense(assetId: string, license: License): void;
  abstract validateLicense(assetId: string): boolean;
  abstract renewLicense(licenseId: string, newExpirationDate: Date): void;
}
