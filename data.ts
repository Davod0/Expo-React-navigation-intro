interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Apple iPhone 14 Pro",
        price: 9999.99,
        description: "Det senaste flaggskeppstelefonen från Apple med avancerad kamerateknologi och snabb processor."
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        price: 10999.00,
        description: "En kraftfull Android-smartphone med stor skärm och lång batteritid."
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        price: 4499.95,
        description: "Avancerade trådlösa hörlurar med brusreducering och lång batteritid."
    },
    {
        id: 4,
        name: "Dell XPS 13",
        price: 13999.00,
        description: "En lätt och kraftfull bärbar dator med stor skärm och lång batteritid."
    },
    {
        id: 5,
        name: "Nintendo Switch OLED",
        price: 3999.00,
        description: "En hybridkonsol som kan användas både hemma och på språng med en vacker OLED-skärm."
    }
];
