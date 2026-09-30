export const products = [
    {
        id: 'audio-wireless-headphones',
        name: 'Wireless Headphones',
        category: 'Electronics',
        price: 89.99,
        rating: 4.6,
    },
    {
        id: 'electronics-portable-speaker',
        name: 'Portable Bluetooth Speaker',
        category: 'Electronics',
        price: 49.99,
        rating: 4.3,
    },
    {
        id: 'electronics-usb-c-hub',
        name: 'USB-C Hub',
        category: 'Electronics',
        price: 34.5,
    },
    {
        id: 'home-led-desk-lamp',
        name: 'LED Desk Lamp',
        category: 'Home',
        price: 27.99,
        rating: 4.4,
    },
    {
        id: 'home-ceramic-mug-set',
        name: 'Ceramic Mug Set',
        category: 'Home',
        price: 22.0,
        rating: 4.7,
    },
    {
        id: 'home-cotton-throw',
        name: 'Cotton Throw Blanket',
        category: 'Home',
        price: 39.95,
    },
    {
        id: 'books-garden-guide',
        name: 'The Small Garden Guide',
        category: 'Books',
        price: 16.99,
        rating: 4.8,
    },
    {
        id: 'books-mystery-novel',
        name: 'The Last Lighthouse',
        category: 'Books',
        price: 12.5,
        rating: 4.2,
    },
    {
        id: 'apparel-canvas-tote',
        name: 'Everyday Canvas Tote',
        category: 'Apparel',
        price: 18.0,
        rating: 4.1,
    },
    {
        id: 'apparel-wool-beanie',
        name: 'Ribbed Wool Beanie',
        category: 'Apparel',
        price: 24.99,
    },
    {
        id: 'sports-water-bottle',
        name: 'Insulated Water Bottle',
        category: 'Sports',
        price: 25.0,
        rating: 4.5,
    },
    {
        id: 'sports-yoga-mat',
        name: 'All-Purpose Yoga Mat',
        category: 'Sports',
        price: 32.99,
        rating: 4.4,
    },
    {
        id: 'electronics-wireless-mouse',
        name: 'Wireless Mouse',
        category: 'Electronics',
        price: 21.99,
        rating: 4.0,
    },
    {
        id: 'home-reusable-food-wraps',
        name: 'Reusable Food Wraps',
        category: 'Home',
        price: 14.95,
    },
];

for (const product of products) {
    Object.freeze(product);
}


