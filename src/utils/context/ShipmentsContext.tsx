import React, {
  createContext, ReactNode, useReducer, useContext,
} from 'react';
import { FullShipmentObject, ShipmentObject } from 'utils/types';

/**
 * context basic functionality that provides the data for the app
 * and update it based on specific needs
 * this pattern is based on @see https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */
export type ActionOptions = 'SET_DATA' | 'ADD_SHIPMENT' | 'REMOVE_SHIPMENT' | 'EDIT_SHIPMENT' | 'SET_FULLSHIPMENTS';
export type Action = {
  type: ActionOptions,
  data: ShipmentObject[] | FullShipmentObject[] | FullShipmentObject
};
export type Dispatch = (action: Action) => void;
export type ShipmentsContextProps = { children: ReactNode };
export type State = {
  shipmentsFullList: FullShipmentObject[];
  shipmentsDelivered: number;
  shipmentsCancelled: number;
  shipmentsInTransit: number;
};

const ShipmentContext = createContext<{ state: State, dispatch: Dispatch } | undefined>(undefined);

// count shipments status
const shipmentCounts = (data: ShipmentObject[] | FullShipmentObject[]) => {
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
      } = shipmentCounts(data as FullShipmentObject[]);

      return {
        ...state,
        shipmentsFullList: data as FullShipmentObject[],
        shipmentsDelivered,
        shipmentsCancelled,
        shipmentsInTransit,
      };
    }
    case 'SET_FULLSHIPMENTS': {
      return {
        ...state,
        shipmentsFullList: data as FullShipmentObject[],
      };
    }
    case 'ADD_SHIPMENT': {
      const { shipmentsFullList } = state;
      const newData = [...shipmentsFullList, data];
      const {
        shipmentsDelivered, shipmentsCancelled, shipmentsInTransit,
      } = shipmentCounts(newData as FullShipmentObject[]);

      localStorage.setItem('homeData', JSON.stringify(newData));

      return {
        ...state,
        shipmentsFullList: newData as FullShipmentObject[],
        shipmentsDelivered,
        shipmentsCancelled,
        shipmentsInTransit,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const ShipmentProvider = ({ children }: ShipmentsContextProps) => {
  // TODO start the App with a query data that can provide the shipments in all the app
  const [state, dispatch] = useReducer(ShipmentReducer, {
    shipmentsFullList: [],
    shipmentsDelivered: 0,
    shipmentsCancelled: 0,
    shipmentsInTransit: 0,
  });
  const value = { state, dispatch };

  return <ShipmentContext.Provider value={value}>{children}</ShipmentContext.Provider>;
};

const useShipmentContext = () => {
  const context = useContext(ShipmentContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a ShipmentProvider');
  }
  return context;
};
export { ShipmentProvider, useShipmentContext };
