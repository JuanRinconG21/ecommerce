import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Productos = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false);
  };
  const handleShow2 = () => {
    setShow2(true);
  };

  return (
    <>
      <Modal
        show={show2}
        onHide={handleClose2}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" onClick={handleClose2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="fixed-body">
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      <div
        class="modal fade bg-white"
        id="templatemo_search"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            action=""
            method="get"
            class="modal-content modal-body border-0 p-0"
          >
            <div class="input-group mb-2">
              <input
                type="text"
                class="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
              />
              <button
                type="submit"
                class="input-group-text bg-success text-light"
              >
                <i class="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="container py-5">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="h2 pb-4">Categorias</h1>
          </div>

          <div class="col-lg-9">
            <div class="row">
              <div class="col-md-6">
                <ul class="list-inline shop-top-menu pb-3 pt-1">
                  <li class="list-inline-item">
                    <a class="h3 text-dark text-decoration-none mr-3" href="#">
                      All
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="h3 text-dark text-decoration-none mr-3" href="#">
                      Men's
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="h3 text-dark text-decoration-none" href="#">
                      Women's
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 pb-4">
                <div class="d-flex">
                  <select class="form-control">
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Item</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4 product-wap rounded-0">
                  <div class="card rounded-0">
                    <img
                      class="card-img rounded-0 img-fluid"
                      src="https://noticias.imer.mx/wp-content/uploads/2022/08/GAMES.png"
                    />
                    <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul class="list-unstyled">
                        <li>
                          <a
                            class="btn btn-success text-white mt-2"
                            onClick={handleShow2}
                          >
                            <i class="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            class="btn btn-success text-white mt-2"
                            onClick={handleShow}
                          >
                            <i class="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body">
                    <a href="shop-single.html" class="h3 text-decoration-none">
                      VideoJuego
                    </a>
                    <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul class="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-warning fa fa-star"></i>
                        <i class="text-muted fa fa-star"></i>
                        <i class="text-muted fa fa-star"></i>
                      </li>
                    </ul>
                    <p class="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div div="row">
              <ul class="pagination pagination-lg justify-content-end">
                <li class="page-item disabled">
                  <a
                    class="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                    href="#"
                    tabindex="-1"
                  >
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                    href="#"
                  >
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                    href="#"
                  >
                    3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer class="bg-dark" id="tempaltemo_footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4 pt-5">
              <h2 class="h2 text-success border-bottom pb-3 border-light logo">
                Zay Shop
              </h2>
              <ul class="list-unstyled text-light footer-link-list">
                <li>
                  <i class="fas fa-map-marker-alt fa-fw"></i>
                  123 Consectetur at ligula 10660
                </li>
                <li>
                  <i class="fa fa-phone fa-fw"></i>
                  <a class="text-decoration-none" href="tel:010-020-0340">
                    010-020-0340
                  </a>
                </li>
                <li>
                  <i class="fa fa-envelope fa-fw"></i>
                  <a
                    class="text-decoration-none"
                    href="mailto:info@company.com"
                  >
                    info@company.com
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4 pt-5">
              <h2 class="h2 text-light border-bottom pb-3 border-light">
                Products
              </h2>
              <ul class="list-unstyled text-light footer-link-list">
                <li>
                  <a class="text-decoration-none" href="#">
                    Luxury
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Sport Wear
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Men's Shoes
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Women's Shoes
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Popular Dress
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Gym Accessories
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Sport Shoes
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4 pt-5">
              <h2 class="h2 text-light border-bottom pb-3 border-light">
                Further Info
              </h2>
              <ul class="list-unstyled text-light footer-link-list">
                <li>
                  <a class="text-decoration-none" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Shop Locations
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row text-light mb-4">
            <div class="col-12 mb-3">
              <div class="w-100 my-3 border-top border-light"></div>
            </div>
            <div class="col-auto me-auto">
              <ul class="list-inline text-left footer-icons">
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="http://facebook.com/"
                  >
                    <i class="fab fa-facebook-f fa-lg fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <i class="fab fa-instagram fa-lg fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="https://twitter.com/"
                  >
                    <i class="fab fa-twitter fa-lg fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.linkedin.com/"
                  >
                    <i class="fab fa-linkedin fa-lg fa-fw"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-auto">
              <label class="sr-only" for="subscribeEmail">
                Email address
              </label>
              <div class="input-group mb-2">
                <input
                  type="text"
                  class="form-control bg-dark border-light"
                  id="subscribeEmail"
                  placeholder="Email address"
                />
                <div class="input-group-text btn-success text-light">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-100 bg-black py-3">
          <div class="container">
            <div class="row pt-2">
              <div class="col-12">
                <p class="text-left text-light">
                  Copyright &copy; 2021 Company Name | Designed by{" "}
                  <a
                    rel="sponsored"
                    href="https://templatemo.com"
                    target="_blank"
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Productos;
