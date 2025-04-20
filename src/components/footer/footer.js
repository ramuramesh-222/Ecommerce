import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{marginTop:'10px'}}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Click Shop
              </h6>
              <p>
                Discover the latest trends in fashion, electronics, and more.
              </p>
              <p>
                Shop now and enjoy exclusive deals, fast delivery, and secure checkout!
                Let me know if you want a more casual, luxury, or tech-focused version!
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p><a href="#!" className="text-reset link-underline-light">Jewelery</a></p>
              <p><a href="#!" className="text-reset link-underline-light">Menclothing</a></p>
              <p><a href="#!" className="text-reset link-underline-light">Womenclothing</a></p>
              <p><a href="#!" className="text-reset link-underline-light">Electronics</a></p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p><i className="fas fa-envelope me-3"></i> clickshop@gmail.com</p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: '#3b49df', color: 'white' }}>
        © 2025 Copyright:
        <a className="text-reset fw-bold ms-1" href="https://ecommerce-khaki-eight-96.vercel.app/">Click Shop.com</a>
      </div>
    </footer>
  )
}

export default Footer



