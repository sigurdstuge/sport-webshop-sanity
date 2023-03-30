import {sanity} from '../sanity.js'

export default async function products() {
	const query = `*[_type == 'product'] {
		name,	
		price,
		'imageUrl': image.asset->.url,
		'brandName': brand->.name,
	}`;

	const products = await sanity.fetch(query);

	const productsContainer = document.querySelector('.products')
	function renderHTML() {
		productsContainer.innerHTML = ''

 		for (let index = 0; index < products.length; index += 1 ) {
			const product =  products[index];

			// create element
			const card = document.createElement('a');
			const imageContainer = document.createElement('div');
			const image = document.createElement('img')
			const name = document.createElement('p');
			const brand = document.createElement('p')
			const price = document.createElement('p')

			// innertext
			name.innerText = product.name;
			brand.innerText = product.brand;
			price.innerText = product.price;
			
			// src
 		   image.src = product.imageUrl;

			// classes
			card.className = 'products__card';
			image.className = 'products__image';
			name.className = 'products__name';
			brand.className = 'products__brand';
			price.className = 'products__price';

			// append
			imageContainer.append(image);

			card.append(imageContainer);
			card.append(name);
			card.append(brand);
			card.append(price);

			productsContainer.append(card);
		}
	} 
	renderHTML();
}