import { Service } from "../type/Service";

export const fetchCSV = async () => {
    const response = await fetch('/servicios_y_subservicios.csv');
    const text = await response.text();
    return (processCSV(text));
};

const processCSV = (str: string) => {
    const rows = str.split('\n');

    const data:Service[] = [];
    let lastPost = -1;
    rows.slice(1).forEach((row: string, i) => {
      const values = row.split(',');
      // if(i + 1 < rows.length - 1) return;

      let service:Service = {
        id: parseInt(values[0]),
        name: values[1],
        description: values[2]
      }

      if(!(values[0].includes('-'))){
        lastPost++;
        data.push(service);
      }
      else{
        const x = values[0].split('-');
        const nId = x[1]
        service.id = parseInt(nId);
        if(!data[lastPost].subServices) data[lastPost].subServices = [];
        data[lastPost].subServices?.push(service);
      }
      
      
    });

    return data;
}