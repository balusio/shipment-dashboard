import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {
  AirplanemodeActive,
  DirectionsRailway,
  DirectionsBoat,
} from '@material-ui/icons';

import ModeTransportIcon from '../ModeTransportIcon';

configure({ adapter: new Adapter() });

describe('ModeTransportIcon Test', () => {
  it('should render a simple span with the tile if no option for icon is passed', () => {
    const wrapper = mount(
      <ModeTransportIcon Mode="whatever" />,
    );
    expect(wrapper.find('span').text()).toEqual('whatever');
  });

  it('should render the rail icon', () => {
    const wrapper = mount(
      <ModeTransportIcon Mode="Rail" />,
    );
    expect(wrapper.find(DirectionsRailway)).toBeTruthy();
  });

  it('should render the Airplane icon', () => {
    const wrapper = mount(
      <ModeTransportIcon Mode="Air" />,
    );
    expect(wrapper.find(AirplanemodeActive)).toBeTruthy();
  });

  it('should render the Airplane icon', () => {
    const wrapper = mount(
      <ModeTransportIcon Mode="Sea" />,
    );
    expect(wrapper.find(DirectionsBoat)).toBeTruthy();
  });
});
