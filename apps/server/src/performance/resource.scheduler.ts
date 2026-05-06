export interface ResourceAllocation {
  cpuPriority: number
  gpuPriority: number
  memoryLimitMb: number
}

export class ResourceScheduler {
  allocate(type: string): ResourceAllocation {
    switch (type) {
      case 'voice':
        return {
          cpuPriority: 8,
          gpuPriority: 2,
          memoryLimitMb: 256,
        }

      case 'screenshare':
        return {
          cpuPriority: 7,
          gpuPriority: 10,
          memoryLimitMb: 1024,
        }

      default:
        return {
          cpuPriority: 5,
          gpuPriority: 5,
          memoryLimitMb: 512,
        }
    }
  }
}
