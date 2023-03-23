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
			title: 'Products',
			name: 'products',
			type: 'reference',
			to: {type: 'products'},
		},
	]
}