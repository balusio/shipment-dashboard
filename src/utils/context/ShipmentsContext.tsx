import React, {
  createContext, ReactNode, useReducer, useContext,
} from 'react';
import { ShipmentObject } from 'utils/types';
/**
 * context basic functionality that provides the data for the app
 * and update it based on specific needs
 * @see https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */

export type ActionOptions = 'SET_DATA' | 'ADD_SHIPMENT' | 'REMOVE_SHIPMENT' | 'EDIT_SHIPMENT';
export type Action = { type: ActionOptions, data: ShipmentObject[] };
export type Dispatch = (action: Action) => void;
export type ShipmentsContextProps = { children: ReactNode };
export type State = {
  shipmentsList: ShipmentObject[];
  shipmentsDelivered: number;
  shipmentsCancelled: number;
  shipmentsInTransit: number;
};

const ShipmentContext = createContext<{ state: State, dispatch: Dispatch } | undefined>(undefined);

const shipmentCounts = (data: ShipmentObject[]) => {
  let shipmentsDelivered: number = 0;
  let shipmentsCancelled: number = 0;
  let shipmentsInTransit: number = 0;

  data.forEach(({ Status }: ShipmentObject) => {
    switch (Status) {
      case 'In Transit':
        shipmentsInTransit += 1;
        break;
      case 'Arrived':
        shipmentsDelivered += 1;
        break;
      case 'Cancelled':
        shipmentsCancelled += 1;
        break;
      default: null;
    }
  });

  return {
    shipmentsDelivered,
    shipmentsCancelled,
    shipmentsInTransit,
  };
};

const ShipmentReducer = (state: State, action: Action): State => {
  const { type, data } = action;
  switch (type) {
    case 'SET_DATA': {
      const {
        shipmentsDelivered, shipmentsCancelled, shipmentsInTransit,
      } = shipmentCounts(data);

      return {
        shipmentsList: data,
        shipmentsDelivered,
        shipmentsCancelled,
        shipmentsInTransit,
      };
    }
    // case 'ADD_SHIPMENT': {
    //   return {count: state.count - 1}
    // }
    // case 'REMOVE_SHIPMENT': {
    //   return {count: state.count - 1}
    // }
    // case 'EDIT_SHIPMENT': {
    //   return {count: state.count - 1}
    // }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const ShipmentProvider = ({ children }: ShipmentsContextProps) => {
  const [state, dispatch] = useReducer(ShipmentReducer, {
    shipmentsList: [],
    shipmentsDelivered: 0,
    shipmentsCancelled: 0,
    shipmentsInTransit: 0,
  });
  const value = { state, dispatch };

  return <ShipmentContext.Provider value={value}>{children}</ShipmentContext.Provider>;
}

const useShipmentContext = () => {
  const context = useContext(ShipmentContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a ShipmentProvider');
  }
  return context;
};
export { ShipmentProvider, useShipmentContext };
