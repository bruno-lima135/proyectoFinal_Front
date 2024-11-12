import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  async function handleCreateUser(event) {
    event.preventDefault();
    console.log("aksmdkalsmdsam");
  }

  return (
    <>
      <div className=" login-background d-flex justify-content-center">
        <div className=" login-container d-flex flex-column justify-content-center  ">
          <div className="row g-0 shadow rounded  ">
            <div className="col-md-6  ">
              <div className=" login-box text-center h-100 w-100">
                <Link to={"/"}>
                  <img src="./images/img_pages/vibracowhite.png" alt="" />
                </Link>

                <h1 className="image-title text-white d-md-flex d-none ">
                  Lo hacemos saludable
                </h1>
              </div>
            </div>

            <div className="col-md-6 bg-white form-column">
              <div className="d-flex flex-column p-5">
                <div>
                  <h2 className="title">Crea tu cuenta Vibra </h2>
                  <form
                    className="w-100 mt-4"
                    style={{ maxWidth: "400px" }}
                    method="post"
                    onSubmit={(event) => handleCreateUser(event)}
                  >
                    <div className="form-group mb-4">
                      <label className="text">Email</label>

                      <input type="email" className="form-control text" />
                    </div>

                    <div className="form-group mb-4">
                      <label className="text">Nombre</label>
                      <input type="name" className="form-control text" />
                    </div>
                    <div className="form-group mb-4">
                      <label className="text">Apellido</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group mb-4">
                      <label className="text">Contraseña</label>
                      <input type="password" className="form-control" />
                    </div>
                    <button
                      type="submit"
                      className="title btn text-light bg-dark mb-3  w-100"
                    >
                      Crear cuenta
                    </button>
                  </form>
                </div>
                <Link to={"/login"} className="text text-decoration-none">
                  <i class="bi bi-arrow-left fs-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
