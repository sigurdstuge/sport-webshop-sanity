import {sanity} from '../sanity.js'

export default async function products() {
	const query = `*[_type == 'product'] {
		name,	
		price,
		'imageUrl': image.asset->.url,
		'brandName': brand->.name,
	}`;

	const products = await sanity.fetch(query);

	console.log(products);
}