import React, { useEffect, useState } from "react";
import CardOrder from "../components/CardOrder";
import axios from "axios";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

function Order() {
  const userId = useSelector((state) => state.login);
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    async function getUserOrders() {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/orders`,
        data: { userId: userId.userId },
      });

      setUserOrders(response.data);
    }

    getUserOrders();
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 ">
      <h2>Historial de compra</h2>
      <p>
        Consulta el estado de pedidos recientes, gestiona devoluciones y
        descubre productos similares.{" "}
      </p>

      {userOrders.map((order) => (
        <CardOrder orderData={order} />
      ))}
    </div>
  );
}

export default Order;
