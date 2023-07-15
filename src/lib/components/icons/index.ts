import type { Icon as LucideIcon } from 'lucide-svelte';
import Google from './Google.svelte';
import Github from './Github.svelte';

export type Icon = LucideIcon;

export const Icons = {
	gitHub: Github,
	google: Google
};
