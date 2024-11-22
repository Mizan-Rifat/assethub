interface Asset {
  id: string;
  name: string;
  type: 'audio' | 'video' | 'image' | 'interactive';
  metadata: Metadata;
  versionHistory: AssetVersion[];
  dependencies: string[]; // IDs of dependent assets
  createdAt: Date;
  updatedAt: Date;
}

interface Metadata {
  title: string;
  owner: string;
  dateCreated: Date;
  description: string;
  properties: AudioMetadata | VideoMetadata | ImageMetadata | InteractiveMetadata;
}

interface AudioMetadata {
  bitrate: number;
  duration: number; // in seconds
}

interface VideoMetadata {
  resolution: string; // e.g., "1920x1080"
  duration: number; // in seconds
}

interface ImageMetadata {
  dpi: number;
  dimensions: string; // e.g., "1024x768"
}

interface InteractiveMetadata {
  technology: string; // e.g., HTML5, Unity
}

interface AssetVersion {
  versionNumber: number;
  changes: string;
  dependencies: string[];
  createdAt: Date;
}
