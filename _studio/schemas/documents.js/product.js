import brand from "./brand";

export default {
	title: 'Product',
	name: 'product',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text'
		},
		{
			title: 'Brand',
			name: 'brand',
			type: 'reference',
			to: {type: 'brand' }
		},
		{
			title: 'Size',
			name: 'size',
			type: 'string',
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number',
		},
		{
			title: 'IsExlusive',
			name: 'isExlusive',
			type: 'boolean'
		}
	]
}