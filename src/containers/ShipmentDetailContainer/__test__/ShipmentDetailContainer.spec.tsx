import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import axios from 'axios';
import { ShipmentProvider } from '../../../utils/context/ShipmentsContext';
import ShipmentDetailContainer from '../ShipmentDetailContainer';

configure({ adapter: new Adapter() });
jest.mock('axios', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const daysLeft = (EstDeparture: string, EstArrival: string) => {
  const date1 = new Date(EstDeparture);
  const date2 = new Date(EstArrival);
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

describe('ShipmentDetailContainer Test', () => {
  it('should render each element h3 with the number passed as prop', () => {
    jest.spyOn(axios, 'get').mockResolvedValue([{
      'Shipment ID': 'c998e634-135e-4d2d-84f5-3ca89a9fcb66',
      'Client Name': 'Microsoft',
      Origin: 'New Udaan Bhawan, New Delhi 110037, INDIA',
      Destination: 'Hugo Eckener Ring 60549 Frankfurt',
      Mode: 'Air',
      'Estimated Departure': '3/5/19',
      'Estimated Arrival': '4/3/19',
      Status: 'Customs Hold',
    }]);

    const wrapper = mount(
      <ShipmentProvider>
        <ShipmentDetailContainer />
      </ShipmentProvider>,
    );
    const DayUse = daysLeft('3/5/19', '4/3/19');
    console.log(wrapper.debug());
  });
});
