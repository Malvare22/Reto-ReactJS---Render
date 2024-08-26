import { Dispatch, SetStateAction, useContext } from "react";
import { IndexForService } from "../type/IndexForService";
import { ServicesModalContext } from "../context/ServicesModalContext";
import { Service } from "../type/Service";

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
    id: 23,
    description: '',
    name: ''
  };

export const getService = (type: number, i?: number, j?: number, services: Service[]) => {
   
    if(type == 0 || type == 1) return serviceTemplate;

    if(type == 2 && i){
        return services[i];
    }
    
    return services[i].subServices[j];

}

export const createService = (services: Service[], nService: Service) => {
    
    const tmp = [... services];
    tmp.push(nService);
    
    return tmp;

}

export const createSubservice = (services: Service[], nSubservice: Service, i: number) => {
    
    const tmp: Service[] = [... services];
    (tmp[i]).subServices?.push(nSubservice);
    return tmp;

}

// export const a = (services: Service[], nSubservice: Service, i: number, j?: number) => {
    
//     const tmp: Service[] = [... services];
//     (tmp[i]).subServices?.push(nSubservice);
//     return tmp;

// }

