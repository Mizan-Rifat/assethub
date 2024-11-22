enum MediaType {
  AUDIO = 'audio',
  VIDEO = 'video',
  IMAGE = 'image',
  INTERACTIVE = 'interactive'
}

interface Metadata {
  title: string;
  description: string;
  owner: string;
  createdDate: Date;
  updatedDate: Date;
}

interface AudioMetadata extends Metadata {
  bitrate: number;
  duration: number;
}

interface VideoMetadata extends Metadata {
  resolution: string;
  duration: number;
  frameRate: number;
}

interface ImageMetadata extends Metadata {
  dpi: number;
  dimensions: string;
}

interface InteractiveMetadata extends Metadata {
  technology: string;
}

interface Dependency {
  assetId: string;
  dependencyType: string;
  createdDate: Date;
}

interface Asset {
  id: string;
  type: MediaType;
  metadata: Metadata;
  dependencies: string[];
}

abstract class BaseAsset implements Asset {
  id: string;
  type: MediaType;
  metadata: Metadata;
  dependencies: Dependency[];

  constructor(id: string, type: MediaType, metadata: Metadata, dependencies: string[]) {}

  abstract validateMetadata(): boolean;
  abstract process(): Promise<void>;
  abstract archive(): void;
}
