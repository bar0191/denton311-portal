import React from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCLKqNMg-sZGJquZ32j1XTkHmrzj1tC0Is&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={16} defaultCenter={{ lat: props.lat[0], lng: props.long[0] }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: props.lat[0], lng: props.long[0] }} />
    )}
  </GoogleMap>
));

export default (props) => (
  props.report ?
    <Modal style={{maxWidth: '750px'}} isOpen={props.isOpen} toggle={props.toggle} className={props.className} external={props.extBtn}>
      <ModalHeader>{props.report.title}</ModalHeader>
      <ModalBody>
        <div>
          <MyMapComponent
            isMarkerShown
            lat={Object.keys(props.report.coords ? props.report.coords : {}).map(function(key, index) {
              console.log(props.report.coords['latitude']);
              return props.report.coords['latitude'];
            })}
            long={Object.keys(props.report.coords ? props.report.coords : {}).map(function(key, index) {
              return props.report.coords['longitude']
            })}
          />
          {Object.keys(props.report.coords ? props.report.coords : {}).map(function(key, index) {
            console.log(props.report.coords[key])
          })}
          {/*<Carousel images={this.state.images} />*/}
        </div>
        <div style={{alignItems: 'center', marginHorizontal: 20, marginVertical: 15}}>
          <p>
            {!props.report.additionalDetails ? '' : props.report.additionalDetails}
            {' ' + props.report.address}
          </p>
        </div>
        {
          props.report.problemDetails ?
            <div style={{alignItems: 'center', marginHorizontal: 20, marginVertical: 15}}>
              {Object.keys(props.report.problemDetails).map((key) => {
                return (
                  <p>
                    {key + ': ' + props.report.problemDetails[key]}
                  </p>
                )
              })}
            </div> : null
        }
        <div style={{alignItems: 'center', marginHorizontal: 20, marginVertical: 15}}>
          <p>{props.report.status + ' ' + moment(props.report.dateCreated, moment.ISO_8601).fromNow()}</p>
        </div>
      </ModalBody>
      {/*<ModalFooter>*/}
        {/*<Button color="secondary" onClick={props.toggle}>Close</Button>*/}
      {/*</ModalFooter>*/}
    </Modal> : null
);