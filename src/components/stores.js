import { writable } from 'svelte/store';

export const searchItem = writable('');
export const results = writable([]);
export const currentRecipe = writable(0);
export const currentRecipeStatus = writable('hidden')
export const home = writable(true)
export const waitTime = writable(false)
