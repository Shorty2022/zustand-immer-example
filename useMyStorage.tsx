import {create} from "zustand";
import { IEmployee, IStore } from "./interfaces";
import { produce } from "immer";

const useReactStorageNew = create<IStore>()((set) => ({
  employees: [
    {
      PNr: 1,
      FirstName: "Max",
      LastName: "Mustermann",
      equipmentIds: [10, 20, 25]
    },
    {
      PNr: 2,
      FirstName: "Thomas",
      LastName: "Muster",
      equipmentIds: [5, 7, 13]
    },
    {
      PNr: 3,
      FirstName: "Willhelm",
      LastName: "Müller",
      equipmentIds: [1, 40, 55]
    }
  ],

  // nummer muss bei einem Employee raus!
  // numer muss beim Employee rein!
  updateEmployee(
    changeNumber: number,
    sourcePNr: number,
    destinationPNr: number
  ) {
    set(
      produce((state) => {
        const sourceEmployee = state.employees.find(
          (employee: IEmployee) => employee.PNr === sourcePNr
        );
        const destinationEmployee = state.employees.find(
          (employee: IEmployee) => employee.PNr === destinationPNr
        );

        // Remove the changeNumber from the sourceEmployee's equipmentIds array
        sourceEmployee.equipmentIds = sourceEmployee.equipmentIds.filter(
          (id: number) => id !== changeNumber
        );
        // Add the changeNumber to the destinationEmployee's equipmentIds array
        destinationEmployee.equipmentIds.push(changeNumber);
      })
    );
  }
}));

export default useReactStorageNew;