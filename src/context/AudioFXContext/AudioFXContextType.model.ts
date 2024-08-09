export type AudioFXContextType = {
    audioBackgroundRef: React.RefObject<HTMLAudioElement | null>
    saveStatus: () => void
}