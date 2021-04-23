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

/**
 * simple wrapper component for icon logic
 * @param Mode string that provide a type of transport mode
 * by default return the string wrapped
 * @returns MaterialUI icon or styled string
 */
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
