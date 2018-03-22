import React from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';

export default (props) => (
  props.report ?
    <Modal isOpen={props.isOpen} toggle={props.toggle} className={props.className} external={props.extBtn}>
      <ModalHeader>{props.report.title}</ModalHeader>
      <ModalBody>
        <div>
          {props.report.imageOne ?
            <img style={{maxWidth: '100%'}} src={"data:image/jpg;base64," + props.report.imageOne} /> :
            <img style={{maxWidth: '100%'}} src={"data:image/jpg;base64," + props.report.mapSnapshot} />
          }
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