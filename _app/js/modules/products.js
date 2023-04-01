import {sanity} from '../sanity.js'

export default async function products() {
	const params = {
		brandName: '',
		categoryName: '',
	}

	let query = returnUpdateQuery();

	let products = await sanity.fetch(query, params);

	const dropdownCategory = document.querySelector('.header__category');
	const dropdownBrand = document.querySelector('.header__brand');
	const productsContainer = document.querySelector('.products');
	
	dropdownCategory.addEventListener('input', handleCategoryDropdownInput);
	dropdownBrand.addEventListener('input', handleDropdownBrandInput);

	async function handleCategoryDropdownInput() {
		const input = dropdownCategory.value;
		params.categoryName = input;
		query = returnUpdateQuery();
		products = await sanity.fetch(query, params);
		renderHTML();
	}

	async function handleDropdownBrandInput() {
		const input = dropdownBrand.value;
		params.brandName = input;
		query = returnUpdateQuery();
		products = await sanity.fetch(query, params);
		renderHTML();
	}

	function returnUpdateQuery() {
		const brandQuery = `${params.brandName !== '' ? '&& brand->.name == $brandName': ''}`
		const categoryQuery = `${params.categoryName !== '' ? '&& Category->.name == $categoryName': ''}`

		const query = `*[_type == 'product' ${brandQuery} ${categoryQuery}] {
			name,	
			price,
			'imageUrl': image.asset->.url,
			'brandName': brand->.name,
		}`
		
		return query;
	}

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
			const dropdown = document.createElement('select')

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
			dropdown.className = 'header__dropdown'

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