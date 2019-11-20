import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Grid from '@material-ui/core/Grid';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import renderActiveShape from './Charts';
import renderLabelsShape from './Labels';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  tabs: {
    backgroundColor: '#0e0f1a',
    color: '#fff',
    boxShadow: 'none'
  },
  tab: {
    textTransform: 'capitalize'
  }
}));

export default function StatisticTabs(props) {
  const classes = useStyles();
  const [ value, setValue ] = React.useState(0);
  const [ activeIndex, setActiveIndex ] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {props.data.map((item, i) => (
            <Tab
              className={classes.tab}
              label={item.monthName}
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </AppBar>
      {props.data.map((item, i) => (
        <TabPanel
          style={{ width: '100%', height: '250px', textAlign: 'center' }}
          value={value}
          index={i}
        >
          <Grid
            style={{ width: '100%', height: '450px', textAlign: 'center' }}
            container
            justify="center"
          >
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={item.data}
                  labelLine={false}
                  label={renderLabelsShape}
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                />
              </PieChart>
            </ResponsiveContainer>
          </Grid>
        </TabPanel>
      ))}
    </div>
  );
}
