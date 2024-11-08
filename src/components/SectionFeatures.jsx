import React from "react";

function SectionFeatures() {
  return (
    <>
      <div className="container">
        <div className="gif-container mt-4 ">
          <video autoPlay loop muted id="gif-vibraco">
            <source src="../videos/GIF.mp4" />
          </video>
        </div>
        <div className="bars-banner ">
          <img src="../../images/img_pages/bars.jpg" alt="" className="w-100" />
        </div>

        <div className="worker-section mt-1">
          <div className="container p-0 ">
            <div className="row g-0 p-0 m-0">
              <div className="col-lg-4 p-0 m-0">
                <div className=" w-100 h-100  d-flex flex-column align-items-center justify-content-center bg-black">
                  <img
                    src="./images/img_pages/vibracologowhite.webp"
                    className="w-25"
                    alt=""
                  />
                  <p className="w-50 text-center text-white text">
                    Somos un equipo apasionado y capacitado en lo que hacemos.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="">
                  <img
                    src="./images/img_pages/worker.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="cards-section ">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="w-100 h-100  ">
                <img
                  src="../../images/img_pages/vibra-gingershot.jpg"
                  alt=""
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="w-100 h-100 mt-1">
                <img
                  src="../../images/img_pages/vibraco-card01.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="w-100 h-100 ratio ratio-1x1 mt-1">
                <img
                  src="../../images/img_pages/vibraco-card06.jpg"
                  alt=""
                  className="img-fluid card-img ratio ratio-1x1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="send-info-section d-flex justify-content-center mt-5 ">
        <div className="send-info-container ">
          <div className="row p-4 bg-black text-white rounded">
            <div className="col-lg-6  ">
              <div className=" w-100 text-center ">
                <h4 className="title mt-1">Envíos a domicilio</h4>
                <p className="text">
                  Montevideo, Ciudad de la Costa y Maldonado.
                </p>
                <p className="text">
                  Antes de finalizar la compra, se puede seleccionar la opción
                  de envío y estará siendo entregado el pedido a domicilio de 24
                  a 48 hs.
                </p>
              </div>
            </div>
            <div className="col-lg-6 pickup-col ">
              <div className="w-100 text-center">
                <h4 className="title mt-1">Retiro de su compra</h4>
                <p className="text">Montevideo - Tres cruces</p>
                <p className="text">
                  Se puede seleccionar retirar la compra en Martín García 2381,
                  luego de recibir un mail con la confirmación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionFeatures;
