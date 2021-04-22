import { Application, Request, response, Response } from 'express';
import path from 'path';
import csvToJson from 'csvtojson';

const dataFile: string = path.resolve(__dirname, 'data/shipment-data.csv');

export default function shipmentList(req: Request, res: Response): void {
  csvToJson().fromFile(dataFile).then((jsonObj)=>{
    console.log(jsonObj);
    res.send(jsonObj);
  })
}
