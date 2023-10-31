import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBBtn,
  MDBCollapse,
  MDBBadge,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../feater";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const { cart, totalQuitity } = useSelector((state) => state.allCartData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, [cart]);

  return (
    <>
      <div className="fixed-top">
        <MDBNavbar expand="lg" light bgColor="light">
          <MDBContainer>
            <Link to={"/"}>
              <MDBNavbarBrand
                href="#"
                style={{ color: "#3b71ca", fontWeight: "bold" }}
              >
                E KART
              </MDBNavbarBrand>
            </Link>

            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>

            <MDBCollapse navbar show={showBasic}>
              <div className="mx-auto">
                <MDBNavbarNav className="mb-2 mb-lg-0">
                  <form className="d-flex input-group w-auto">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Type query"
                      aria-label="Search"
                    />
                    <MDBBtn color="primary">Search</MDBBtn>
                  </form>
                </MDBNavbarNav>
              </div>
              <Link to={"/cart"}>
                <div className="position-relative d-inline-block">
                  <MDBBtn>Cart</MDBBtn>
                  <MDBBadge
                    color="success"
                    light
                    pill
                    className={`position-absolute translate-middle ${
                      totalQuitity >= 1 ? "" : "d-none"
                    }`}
                  >
                    {totalQuitity}
                    <span class="visually-hidden">unread messages</span>
                  </MDBBadge>
                </div>
              </Link>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </div>
    </>
  );
}
