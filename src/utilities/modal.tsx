import { Dispatch, SetStateAction, useContext } from "react";
import { IndexForService } from "../type/IndexForService";
import { ServicesModalContext } from "../context/ServicesModalContext";
import { Service } from "../type/Service";
import { getNextId } from "./getNextId";

/**
 * Modal type [0, 1] = crear. [2, 3] = editar
 */
export const initModal = (setIndexForService: Dispatch<SetStateAction<IndexForService>>,  setModalType:Dispatch<SetStateAction<number>>, setViewModal: Dispatch<SetStateAction<boolean>>, type: number, i=-1, j=-1) => {
    
    setModalType(type);

    setIndexForService({['i']: i, ['j']: j});

    setViewModal(true);

    return;

}

const serviceTemplate = {
    id: -1,
    description: '',
    name: ''
};

export const getService = (type: number, i?: number, j?: number, services: Service[]): Service | null => {
   

    console.log(type)
    if(type == 0 || type == 1){
        let aux = serviceTemplate;
        aux.id = type == 0 ? getNextId(services) : getNextId(services[i].subServices);
        return aux;
    }

    if(type == 2){
        return services[i];
    }
    
    if (type == 3) return services[i].subServices[j];

    return null;

}

export const createService = (services: Service[], nService: Service) => {
    
    const tmp = [... services];
    nService.subServices = [];
    tmp.push(nService);
    
    return tmp;

}

export const createSubservice = (services: Service[], nSubservice: Service, i: number) => {
    
    const tmp: Service[] = [... services];
    (tmp[i]).subServices?.push(nSubservice);
    return tmp;

}

export const editService = (services: Service[], nService: Service, i: number) => {
    
    const tmp = [... services];
    tmp[i] = (nService);
    
    return tmp;

}

export const editSubservice = (services: Service[], nSubservice: Service, i: number, j: number) => {
    
    const tmp: Service[] = [... services];
    tmp[i].subServices[j] = nSubservice;

    return tmp;

}


