interface User {
    name: string;
    age: number;
    email: string;
    address?: Address;
}


interface Address {
    city: string;
    country: string;
}