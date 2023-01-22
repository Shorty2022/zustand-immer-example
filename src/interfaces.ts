export interface IEmployee {
    PNr: number;
    FirstName: string;
    LastName: string;
    equipmentIds: Array<number>;
  }
  
  export interface IStore {
    employees: IEmployee[];
    updateEmployee: Function;
  }
  