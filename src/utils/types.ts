/**
 * the Shipment object intend to be used on the HomeContainer to have a resume list
 * of the latest transports
 */
export type ShipmentObject = {
  'Client Name': string;
  'Destination': string;
  'Mode': string;
  'Shipment ID': string;
  'Status': string;
};
// FullShipmentObject intentd to be the whole element that represents a shipment
export type FullShipmentObject = ShipmentObject & {
  'Estimated Arrival': string;
  'Estimated Departure': string;
  'Origin': string;
};
