export interface HomelabCheck {
  state: 'up' | 'down' | 'unknown';
  detail: string;
  latencyMs: number | null;
}

export interface HomelabContainer {
  id: string;
  name: string;
  image: string;
  imageId: string | null;
  project: string | null;
  service: string | null;
  state: string;
  health: string | null;
  startedAt: string | null;
  finishedAt: string | null;
  exitCode: number;
  restartCount: number;
  cpuPercent: number | null;
  memoryUsedBytes: number | null;
  memoryLimitBytes: number | null;
  networkReceivedBytes: number | null;
  networkSentBytes: number | null;
  ports: { containerPort: number; protocol: string; hostIp: string | null; hostPort: number | null }[];
}

export interface HomelabHost {
  hostname: string;
  operatingSystem: string;
  kernel: string;
  uptimeSeconds: number;
  cpuCores: number;
  cpuPercent: number | null;
  loadAverage: number[];
  memoryTotalBytes: number;
  memoryAvailableBytes: number;
  swapTotalBytes: number;
  swapFreeBytes: number;
  diskTotalBytes: number;
  diskUsedBytes: number;
  diskFreeBytes: number;
}

export interface HomelabStatus {
  checkedAt: string;
  api: { state: 'up'; uptimeSeconds: number };
  database: HomelabCheck;
  collector: { state: 'fresh' | 'stale' | 'unavailable'; collectedAt: string | null;
    ageSeconds: number | null; detail: string };
  snapshot: {
    schemaVersion: number;
    collectedAt: string;
    host: HomelabHost;
    docker: { available: boolean; statsAvailable: boolean; version: string | null; containers: HomelabContainer[] };
    services: { name: string; label: string; state: string }[];
    warnings: string[];
  } | null;
}

export interface HomelabSample {
  at: string;
  cpu: number | null;
  memory: number | null;
}
