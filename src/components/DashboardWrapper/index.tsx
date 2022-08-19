import { Box, Container, Grid, Typography } from '@material-ui/core';
import { addDays, format } from 'date-fns';
import OutlinedCard from '../OutlinedCard';
import './styles.css'


interface DashboardWrapperProps {
  shipments: any[]

}
export const DashboardWrapper = (props: DashboardWrapperProps) => {
  const today = new Date();
  const dates = [...Array(7).keys()].map(key => format(addDays(today, key), 'MM/dd/yy'))

  function filterShipment(date: string) {
    const ships = props.shipments
      .filter(ship => ship.estimatedArrival === date)
    return ships.length > 0 ? ships
      .map(ship =>
      (<OutlinedCard key={ship.id}
        id={ship.id}
        client={ship.client}
        origin={ship.origin}
        destination={ship.destination}
        mode={ship.mode}
        estimatedDeparture={ship.estimatedDeparture}
        estimatedArrival={ship.estimatedArrival}
        status={ship.status}
        houseBillNumber={ship.houseBillNumber}
      />)) : <span>Nothing for the day</span>
  }
  return <>
    <Box className="dashboard_wrapper">
      {dates.map(date => (<Box className="dashboard_col">
        <Typography variant="subtitle1">Arriving on {date}</Typography>
        {filterShipment(date)}
      </Box>))}
    </Box>
  </>
    ;
}
