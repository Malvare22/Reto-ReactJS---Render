import { Service } from "../type/Service";

export function getNextId(services: Service[]){
    let aux = -1;
    services.forEach(s => {
        aux = Math.max(aux, s.id);
    });

    return aux + 1;
}