export interface Ship {
    id: number;
    name: string;
    maximumSpeed: number;
  }
  
  export interface ShipState {
    ships: Ship[];
    loading: boolean;
    error: string | null;
  }