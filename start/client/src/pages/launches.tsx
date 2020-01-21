import React, { Fragment }  from 'react';
import { gql } from '@apollo/client'
import { RouteComponentProps } from '@reach/router';

export const LAUNCH_TILE_DATA = gql`
  fragment LaunchTile on Launch {
    __typename
    id
    isBooked
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
`;

interface LaunchesProps extends RouteComponentProps {}

const Launches: React.FC<LaunchesProps> = () => {
  return <div />;
}

export default Launches;

