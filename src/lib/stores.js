import { writable } from 'svelte/store';

export const title = writable('COLOR');
export const titleDisplay = writable(true);
export const currentSection = writable({ heading: "COLOR" });
