// Band members shown on the About page, in this order.
// Photos live in src/lib/assets/members/.
import type { Lang } from '#lib/i18n.ts';
import daniel from '#lib/assets/members/daniel.jpg';
import rob from '#lib/assets/members/rob.jpg';
import ronald from '#lib/assets/members/ronald.jpg';
import pieter from '#lib/assets/members/pieter.jpg';
import patrick from '#lib/assets/members/patrick.jpg';

export const members: { name: string; role: Record<Lang, string>; photo: string }[] = [
	{ name: 'Ronald Ottenhof', role: { nl: 'Gitaar', en: 'Guitar' }, photo: ronald },
	{ name: 'Rob Janssen', role: { nl: 'Gitaar', en: 'Guitar' }, photo: rob },
	{ name: 'Pieter de Swart', role: { nl: 'Bas', en: 'Bass' }, photo: pieter },
	{ name: 'Patrick Ripzaad', role: { nl: 'Drums', en: 'Drums' }, photo: patrick },
	{ name: 'Daniel van Mil', role: { nl: 'Zang', en: 'Vocals' }, photo: daniel }
];
