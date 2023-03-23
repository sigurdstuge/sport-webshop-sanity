export default {
	title: 'Brand',
	name: 'brand',
	type: 'document',
	fields: [
		{
		title: 'Name',
		name: 'name',
		type: 'string'
	},
	{
		title: 'Logo',
		name: 'logo',
		type: 'image'
	},
	{
		// reference
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
	}	
	]
}