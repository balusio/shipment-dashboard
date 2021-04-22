import express from 'express';
import csvToJson from 'csvtojson';
import path from 'path';
import cors from 'cors';
import ShipmentList from './ShipmentList';
import ShipmentDetail from './ShipmentDetail';
const app = express();
app.use(cors())
const PORT = process.env.PORT || 8080;
const dataFile: string = path.resolve(__dirname, 'data/shipment-data.csv');

app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.get('/data', (req,res) => {
  csvToJson({
    ignoreColumns:/(Origin|Estimated Departure|Estimated Arrival)/ 
  }).fromFile(dataFile).then((jsonObj)=>{
    console.log(jsonObj);
    res.send(jsonObj);
  })
});
app.get('/alldata', ShipmentList);
app.get('/shipment/:id/', ShipmentDetail);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
