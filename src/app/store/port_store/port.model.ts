// store/port_store/port.model.ts
export interface Port {
    id: number;
    name: string;
    countryId: number;
    country?: {
        id: number;
        name: string;
    };
}

export interface PortState {
    ports: Port[];
    loading: boolean;
    error: string | null;
}