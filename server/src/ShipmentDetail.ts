import { Application, Request, response, Response } from 'express';
import path from 'path';
import csvToJson from 'csvtojson';

const dataFile: string = path.resolve(__dirname, 'data/shipment-data.csv');

export default function shipmentDetail(req: Request, res: Response): void {
  const id = req.params.id;
  if (id === '' || id === null) {
    res.status(400).send({
      message: 'Not a valid id'
    }); 
  }
  csvToJson().fromFile(dataFile).then((jsonObj)=>{
    const element = jsonObj.filter((elem) => elem['Shipment ID'] === id);
    if(element.length <= 0){
      res.send(404)
    };  
    res.send(element);
  });
};
