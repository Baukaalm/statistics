import React, { PureComponent } from 'react';
import { Grid, Box } from '@material-ui/core';
import StatisticTabs from './Tabs';
import { data } from './data';

export default class Charts extends PureComponent {
  state = {
    activeIndex: 0
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    return (
      <div>
        <Grid justify="center" container>
          <Box pt={3.5} pb={2.5}>
            Statistic
          </Box>
        </Grid>
        <StatisticTabs data={data} />
      </div>
    );
  }
}
