import React from 'react';
import { SvgIconProps } from '@material-ui/core';
import {
  AirplanemodeActive,
  DirectionsRailway,
  DirectionsBoat,
} from '@material-ui/icons';

type ModeTransportIconProps = SvgIconProps & {
  Mode: string;
};

const ModeTransportIcon = ({ Mode, ...props }: ModeTransportIconProps): JSX.Element => {
  let ModeIcon;
  switch (Mode) {
    case 'Air':
      ModeIcon = <AirplanemodeActive {...props} />;
      break;
    case 'Rail':
      ModeIcon = <DirectionsRailway {...props} />;
      break;
    case 'Sea':
      ModeIcon = <DirectionsBoat {...props} />;
      break;
    default:
      ModeIcon = <span>{Mode}</span>;
  }
  return ModeIcon;
};

export default ModeTransportIcon;
