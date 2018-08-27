// specify ListBox configuration
export var ConfListBox = {
	fields: [
		{key: 1, name: 'Id'}, 
		{key: 2, name: 'Name'}, 
		{key: 3, name: 'Price'}, 
		{key: 4, name: 'Description'}, 
		{key: 5, name: 'Created Date'},
		{key: 6, name: 'Actions'}
	],
	type: 'bordered'
};

// specify RawProducts for loading application at first time
export var RawProducts = [
	{id: 1, price: 2, name: 'Apples', description: 'Fruit', date: '2016-05-24'},
	{id: 2, price: 3, name: 'Tomatoes', description: 'Vegetable', date: '2016-05-23'},
	{id: 3, price: 4, name: 'Blackberries', description: 'Fruit', date: '2016-05-23'},
	{id: 4, price: 7, name: 'Watermelons', description: 'Fruit', date: '2016-05-22'},
	{id: 5, price: 9, name: 'Patatoes', description: 'Vegetable', date: '2016-05-22'}
];

export function LoadSessionStorage(RawProducts) {
	// ensure that session storage doesn't have previous data
	window.sessionStorage.clear();
	// update session storage
	RawProducts.forEach(function(product) {
		window.sessionStorage.setItem(product.id, JSON.stringify(product));
	});
}

// get stored value in session storage
export function LoadRawSessionStorage(flag) {
	var dataArray = [];
	
	for(var item in window.sessionStorage) {
		if(window.sessionStorage.hasOwnProperty(item)) dataArray.push(JSON.parse(window.sessionStorage[item]));
	}
	
	return typeof flag != "undefined" ? _.sortBy(dataArray, 'id').reverse() : _.sortBy(dataArray, 'id');
}