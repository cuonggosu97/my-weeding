import React from "react";
import gallery1 from "../assets/images/1.png";
import gallery2 from "../assets/images/2.png";
import gallery3 from "../assets/images/3.png";
import gallery4 from "../assets/images/4.png";
import gallery5 from "../assets/images/5.png";
import gallery6 from "../assets/images/6.png";
function Gallery() {
  return (
    <div id="gallery" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">Thư viện</span>
            <h2 className="oliven-title">Ảnh cưới nè 😝</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gallery-filter mt-3">
          <div className="col-md-4 gallery-item ceremony">
            <a className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery1}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                {/* <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Ceremony</h4>
                </div> */}
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item party">
            <a className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery2}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                {/* <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Party</h4>{" "}
                </div> */}
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item ceremony">
            <a className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery3}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                {/* <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Ceremony</h4>{" "}
                </div> */}
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item party">
            <a className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery4}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                {/* <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Party</h4>{" "}
                </div> */}
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item ceremony">
            <a className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery5}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                {/* <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Ceremony</h4>{" "}
                </div> */}
              </div>
            </a>
          </div>
          <div className="col-md-4 gallery-item party">
            <a className="img-zoom">
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery6}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                {/* <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Party</h4>{" "}
                </div> */}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
