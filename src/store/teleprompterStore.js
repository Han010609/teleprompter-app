import { create } from 'zustand'

export const useTeleprompterStore = create((set) => ({
  text: '',
  isPlaying: false,
  speed: 1.0,
  setText: (text) => set({ text }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setSpeed: (speed) => set({ speed: Math.max(0.5, Math.min(3.0, speed)) }),
  reset: () => set({ isPlaying: false, speed: 1.0 }),
}))

