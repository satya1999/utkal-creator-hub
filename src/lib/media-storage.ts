export interface MediaItem {
  id: number;
  name: string;
  url: string;
  type: string;
  size: number;
  createdAt: string;
}

const STORAGE_KEY = "adminMedia";

export function getAllMedia(): MediaItem[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveMedia(items: MediaItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function addMedia(item: MediaItem) {
  const items = getAllMedia();
  saveMedia([item, ...items]);
}

export function deleteMedia(id: number) {
  saveMedia(getAllMedia().filter((m) => m.id !== id));
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}
