// store/voyage_store/voyage.model.ts
import { Port } from '../port_store/port.model';
import { Ship } from '../ship_store/ship.model';

export interface Voyage {
    id: number;
    name: string;
    voyageDate: string;
    voyageStart: string;
    voyageEnd: string;
    departurePortId: number;
    departurePort?: Port;
    arrivalPortId: number;
    arrivalPort?: Port;
    shipId: number;
    ship?: Ship;
}

export interface VoyageState {
    voyages: Voyage[];
    loading: boolean;
    error: string | null;
}