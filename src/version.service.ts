interface AssetVersion {
  versionNumber: number;
  createdDate: Date;
  changes: string;
  dependencies: string[];
}

abstract class VersionControl {
  abstract createNewVersion(assetId: string, changes: string): AssetVersion;
  abstract getVersionHistory(assetId: string): AssetVersion[];
  abstract rollbackVersion(assetId: string, versionNumber: number): void;
}
