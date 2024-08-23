import { Service } from "../type/Service";

export const fetchCSV = async () => {
    const response = await fetch('/servicios_y_subservicios.csv');
    const text = await response.text();
    return processCSV(text);
};

const processCSV = (str: string) => {
    const rows = str.split('\n');

    const data:Service[] = [];

    rows.slice(1).forEach((row: string, i) => {
      const values = row.split(',');
      if(!(values[0].includes('-')) && i + 1 < rows.length - 1){

        let service:Service = {
            id: parseInt(values[0]),
            name: values[1],
            description: values[2]
        }
        data.push(service);
      }
      
    })

    return data;
}