export default {
	title: 'Category',
	name: 'category',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Brand',
			name: 'brand',
			type: 'reference',
			to: {type: 'product'},
		},
	]
}