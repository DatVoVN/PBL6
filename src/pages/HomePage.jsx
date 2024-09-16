import React from "react"
import "./HomePage.css"
import ProductItem from "../components/ProductItem"
import TopViewProduct from "../components/TopViewProduct"
import TopCommentProduct from "../components/TopCommentProduct"

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#070720" }}>
      <section className="hero">
        <div className="container">
          <div className="hero__slider owl-carousel">
            <div
              className="hero__items"
              style={{
                backgroundImage: `url(img/hero/hero-1.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top center",
              }}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero__text">
                    <div className="label">Adventure</div>
                    <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                    <p>After 30 days of travel across the world...</p>
                    <a href="#">
                      <span>Watch Now</span>
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="trending__product">
                <div class="row">
                  <div class="col-lg-8 col-md-8 col-sm-8">
                    <div class="section-title">
                      <h5>Trending Now</h5>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="btn__all">
                      <a href="#" class="primary-btn">
                        View All
                        <span class="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <ProductItem />
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <ProductItem />
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <ProductItem />
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <ProductItem />
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <ProductItem />
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <ProductItem />
                  </div>
                </div>
              </div>
              <div class="popular__product">
                <div class="row">
                  <div class="col-lg-8 col-md-8 col-sm-8">
                    <div class="section-title">
                      <h5>Popular Shows</h5>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="btn__all">
                      <a href="#" class="primary-btn">
                        View All <span class="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <ProductItem />
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <ProductItem />
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <ProductItem />
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <ProductItem />
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <ProductItem />
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <ProductItem />
                  </div>
                </div>
              </div>
              <div class="recent__product">
                <div class="row">
                  <div class="col-lg-8 col-md-8 col-sm-8">
                    <div class="section-title">
                      <h5>Recently Added Shows</h5>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4">
                    <div class="btn__all">
                      <a href="#" class="primary-btn">
                        View All <span class="arrow_right"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4">
                  <ProductItem />
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                  <ProductItem />
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                  <ProductItem />
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                  <ProductItem />
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                  <ProductItem />
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                  <ProductItem />
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="product__sidebar">
                <div class="product__sidebar__view">
                  <div class="section-title" style={{ marginBottom: "-40px" }}>
                    <h5>Top Views</h5>
                  </div>
                </div>
                <TopViewProduct />
                <TopViewProduct />
                <TopViewProduct />
                <TopViewProduct />
                <TopViewProduct />
                <div class="product__sidebar__comment">
                  <div class="section-title" style={{ marginBottom: "20px" }}>
                    <h5>New Comment</h5>
                  </div>
                  <TopCommentProduct />
                  <TopCommentProduct />
                  <TopCommentProduct />
                  <TopCommentProduct />
                  <TopCommentProduct />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
