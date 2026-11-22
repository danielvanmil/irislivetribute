// Band members shown on the About page, in this order.
// Photos live in src/lib/assets/members/.
import daniel from '#lib/assets/members/daniel.jpg';
import rob from '#lib/assets/members/rob.jpg';
import ronald from '#lib/assets/members/ronald.jpg';
import pieter from '#lib/assets/members/pieter.jpg';
import patrick from '#lib/assets/members/patrick.jpg';

export const members: { name: string; role: string; photo: string }[] = [
	{ name: 'Ronald Ottenhof', role: 'Guitar', photo: ronald },
	{ name: 'Rob Janssen', role: 'Guitar', photo: rob },
	{ name: 'Pieter de Swart', role: 'Bass', photo: pieter },
	{ name: 'Patrick Ripzaad', role: 'Drums', photo: patrick },
	{ name: 'Daniel van Mil', role: 'Vocals', photo: daniel }
];
