export interface VersionControl {
  assetId: string;
  versions: AssetVersion[];
}

export interface VersionUpdate {
  assetId: string;
  versionNumber: number;
  changes: string;
  dependencies: string[];
}
