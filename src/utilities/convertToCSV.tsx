import { Service } from "../type/Service";

export function convertToCSV(services: Service[]) {
    let result = 'ID,Nombre,Descripción\n';
    services.forEach(
        s => {
            result = result + `${s.id},` + `${s.name},` + `${s.description}` + '\n'
            s.subServices?.forEach(
                (subS) => {
                    result = result + `${s.id}-${subS.id},` + `${subS.name},` + `${subS.description}` + '\n'
                }
            )
        }
    );

    return result;
  }