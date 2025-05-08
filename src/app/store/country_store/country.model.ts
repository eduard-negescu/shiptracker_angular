export interface Country {
    id: number,
    name: string
}

export interface CountryPortsData {
    countryId: number;
    countryName: string;
    numberOfPorts: number;
}