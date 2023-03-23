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
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { 
						type: 'product' 
					}
				}
			]
		}, 
	]
}