// Band photos for the slider on the About page.
// Drop extra .jpg files in src/lib/assets/bandpic/ and they're picked up automatically (sorted by filename).
const modules = import.meta.glob<string>('./assets/bandpic/*.jpg', {
	eager: true,
	import: 'default'
});

export const bandPhotos: string[] = Object.keys(modules)
	.sort()
	.map((key) => modules[key]);
