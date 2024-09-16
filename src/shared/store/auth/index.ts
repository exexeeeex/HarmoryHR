import { create } from 'zustand';

interface AuthState {
    name: string | null;
    avatar: string | null;
    setName: (newName: string) => void;
    setAvatar: (newAvatar: string) => void;
    logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
    name: null,
    avatar: null,
    setName: (newName: string) => set({ name: newName }),
    setAvatar: (newAvatar: string) => set({ avatar: newAvatar }),
    logout: () => set({ name: null, avatar: null }),
}));

export default useAuthStore;
