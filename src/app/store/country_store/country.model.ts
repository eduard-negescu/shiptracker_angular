export interface Country {
    id: number,
    name: string
}

export interface CountryPortsData {
    countryId: number;
    countryName: string;
    numberOfPorts: number;
}


export interface CountryState {
    countries: Country[];
    loading: boolean;
    error: string | null;
}  