import {sanity} from '../sanity.js'

export default async function products() {
	const query = `*[_type == 'product']`;

	const products = await sanity.fetch(query);

	console.log(products);
}