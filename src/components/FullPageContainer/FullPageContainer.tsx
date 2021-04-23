import React, { ReactNode } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { makeStyles, Typography } from '@material-ui/core';

import styles from './FullPageContainerStyles';

type FullPageContainerProps = {
  children: ReactNode;
  title: string;
};

const useStyles = makeStyles(styles);

const FullPageContainer = ({ children, title }: FullPageContainerProps): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <AppBar />
      <div className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
        {children}
      </div>
    </>
  );
};

export default FullPageContainer;
