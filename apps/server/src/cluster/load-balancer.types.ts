export interface LoadBalancerState {
  strategy: 'round-robin' | 'least-connections' | 'latency-based'
  healthyNodesOnly: boolean
  automaticFailover: boolean
}

export const DEFAULT_LOAD_BALANCER: LoadBalancerState = {
  strategy: 'latency-based',
  healthyNodesOnly: true,
  automaticFailover: true,
}
