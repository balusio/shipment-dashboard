import React, { ReactNode } from 'react';
import { mount, configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from "react-router-dom"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_URL } from 'utils/constants';
import { ShipmentProvider } from '../../../utils/context/ShipmentsContext';
import ShipmentDetailContainer from '../ShipmentDetailContainer';
import { Typography } from '@material-ui/core';

configure({ adapter: new Adapter() });

const mock = new MockAdapter(axios);

const testId = '123';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: testId,
  }),
}));

mock.onGet(`${API_URL}/shipment/${testId}`).reply(200, [{
  'Shipment ID': testId,
  'Client Name': 'Microsoft',
  Origin: 'New Udaan Bhawan, New Delhi 110037, INDIA',
  Destination: 'Hugo Eckener Ring 60549 Frankfurt',
  Mode: 'Air',
  'Estimated Departure': '3/5/19',
  'Estimated Arrival': '4/3/19',
  Status: 'Customs Hold',
}]);

const waitForComponentToPaint = async (wrapper: any) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    wrapper.update();
  });
};

const daysLeft = (EstDeparture: string, EstArrival: string) => {
  const date1 = new Date(EstDeparture);
  const date2 = new Date(EstArrival);
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

xdescribe('ShipmentDetailContainer Test', () => {
  it('should render ', () => {
    const wrapper = mount(
      <Router>
        <ShipmentProvider>
          <ShipmentDetailContainer />
        </ShipmentProvider>
      </Router>,
    );
    waitForComponentToPaint(wrapper);
    wrapper.update();
   // expect(wrapper.find(Typography).at(0).text()).toBe('Shipment from: <strong>Microsoft </strong>');
    console.log(wrapper.find(ShipmentDetailContainer).debug());
  });
});
