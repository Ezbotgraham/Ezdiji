export interface ThemeState {
  accentColor: string
  glassmorphism: boolean
  reducedAnimations: boolean
  oledMode: boolean
  compactMode: boolean
}

export const DEFAULT_THEME_STATE: ThemeState = {
  accentColor: '#7c3aed',
  glassmorphism: true,
  reducedAnimations: false,
  oledMode: true,
  compactMode: false,
}
