import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../feater';

export default function ProductCart() {

    const data = useSelector((state)=> state.allCartData.items);

    const dispatch = useDispatch();


  return (
    <MDBContainer>
      <MDBRow className='my-5'>
            {
                data.map((item) => (
                    <MDBCol className='col-md-6 col-lg-3 col-12 mt-4' key={item.id}>
                    <MDBCard style={{height:'35rem'}}>
                      <MDBCardImage
                        src={item.img}
                        position="top"
                        alt="..."
                      />
                      <MDBCardBody>
                        <MDBCardTitle>{item.title}</MDBCardTitle>
                        <MDBBtn onClick={() => dispatch(addToCart(item))}>Add To Cart</MDBBtn>
                        <MDBCardText>{item.price}</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                ))
            }
      </MDBRow>
    </MDBContainer>
  );
}