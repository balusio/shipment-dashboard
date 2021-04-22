export type ShipmentObject = {
  'Client Name': string;
  'Destination': string;
  'Mode': string;
  'Shipment ID': string;
  'Status': string;
};

export type FullShipmentObject = ShipmentObject & {
  'Estimated Arrival': string;
  'Estimated Departure': string;
  'Origin': string;
};
