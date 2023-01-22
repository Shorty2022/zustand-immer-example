import React from 'react';
import { IEmployee } from './interfaces';
import useReactStorageNew from './useMyStorage';

export default function FunctionalComponent() {
    const emp = useReactStorageNew((state) => state.employees);

    return (
      <>
            <div>
            {emp.map((employee: IEmployee) => (
                <ul key={employee.PNr}>
                  <li>{employee.PNr}</li>
                  <li>{employee.FirstName}</li>
                  <li>{employee.LastName}</li>
                  <ul>
                    {employee.equipmentIds.map((equipmentId) => (
                      <li>{equipmentId}</li>
                    ))}
                  </ul>
                </ul>
              ))}

            </div>
            </>
          );
}
