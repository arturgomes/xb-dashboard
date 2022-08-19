import { Chip, Card, CardContent, Typography, } from '@material-ui/core';

import { Shipment } from '../../data/Shipment'
import './styles.css'


const OutlinedCard = (props: Shipment) => {

  function getStatus(status: string) {
    switch (status) {
      case 'ARRIVED':
        return 'primary'
      case 'IN_TRANSIT':
        return 'default'
      default:
        return 'secondary'
    }
  }

  return (
    <Card>
      <CardContent>
        <Chip label={`${props.status}`} color={`${getStatus(props.status)}`} />
        <Typography variant="h4">House Bill No. {props.houseBillNumber}</Typography>
        <div className="shipment_content">
          <Typography variant='subtitle1'>{props.client}</Typography>
          <Typography >Origin: {props.origin} </Typography>
          <Typography >Destination: {props.destination}</Typography>
          <Typography >Departed: {props.estimatedDeparture}</Typography>
          <Typography >Mode: {props.mode}</Typography>
        </div>
      </CardContent>

    </Card >

  )
};



export const ShipmentBlock = (props: Shipment) => {

  return (<div className="shipment_card">


  </div >)
}
export default OutlinedCard;