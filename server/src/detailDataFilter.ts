import { Application, Request, response, Response } from 'express';
import path from 'path';
import csvToJson from 'csvtojson';

const dataFile: string = path.resolve(__dirname, 'data/shipment-data.csv');

export default function dataGetter(req: Request, res: Response): void {
  const id = req.body.id;
  csvToJson().fromFile(dataFile).then((jsonObj)=>{
    console.log(jsonObj);
    res.send(jsonObj.filter(elem => elem['Shipment ID'] === id));
  })
}
