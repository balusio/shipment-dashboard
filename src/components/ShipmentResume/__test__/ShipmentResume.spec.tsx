import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Typography } from '@material-ui/core';

import ShipmentResume from '../ShipmentResume';

configure({ adapter: new Adapter() });

describe('ShipmentResume Test', () => {
  it('should render each element h3 with the number passed as prop', () => {
    const wrapper = mount(
      <ShipmentResume
        shipmentsDelivered={25}
        shipmentsCancelled={1}
        shipmentsInTransit={1}
      />,
    );
    expect(wrapper.find(Typography).at(0).text()).toEqual('25');
  });
});
