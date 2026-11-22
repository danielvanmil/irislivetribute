// All Īris shows. Add new ones here; the Shows page puts them under "Upcoming" or "Past"
// automatically based on the date. Date format: 'YYYY-MM-DD'.
// `url` (venue/festival website) and `tickets` (ticket shop) are optional.
export type Show = { date: string; venue: string; city: string; url?: string; tickets?: string };

export const shows: Show[] = [
	{ date: '2026-08-14', venue: 'Sound Dog', city: 'Breda', url: 'https://sounddogbreda.nl/' },
	{ date: '2026-08-22', venue: 'Dijkrock', city: 'Druten', url: 'https://dijkrockdruten.nl/' }
];
