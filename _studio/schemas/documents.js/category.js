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
			title: 'Image',
			name: 'image',
			type: 'image',
		},
		{
			title: 'Descreption',
			name: 'descreption',
			type: 'text'
		},
		{
			title: 'Brand',
			name: 'brand',
			type: 'reference',
			to: {type: 'brand'},
		},
	]
}