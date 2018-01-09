export class User {
    id: string;
    isActive: boolean;
    picture: string;
    age: number;
    name: {first: any, last: any};
    email: string;
    latitude: number;
    longitude: number;
  }