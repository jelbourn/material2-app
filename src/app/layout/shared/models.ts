export class IdentityCard {
    address: string;
    code: number;
}

export class RootObject {
    code: number;
    fullName: string;
    geographical: string;
    identityCards: IdentityCard[];
    name: string;
    plates: Plate[];
}

export class Plate {
    alphabet: string;
    address: string;
}

export class Lottery {
    id: string;
    name: string;
    retrieve: string;
    qty: number;
    price: number;
    type: string;
}
