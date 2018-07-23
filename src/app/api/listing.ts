
export interface Listing {
    _id: number;
    name: string;
    rent: number;
    address: string;
    amenities: string[];
    contactInfo: {
        name: string;
        phone: string;
    };
    applicationUrl: string;
    pictures: string[];
}
