import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleOffcanvas } from "../redux/pagesSlice";
import { Navigate, useNavigate } from "react-router-dom";

function ProductCard({ productData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowCart = () => {
    dispatch(toggleOffcanvas());
  };

  const handleAddItem = (clickedItem) => {
    dispatch(
      addToCart({
        id: productData.id,
        name: productData.name,
        price: productData.price,
        image: productData.image,
      })
    );
  };

  return (
    <Card
      className="cardComp"
      style={{
        width: "15rem",
        border: "none",
        transition: "border-color 0.3s ease",
      }}
    >
      <Card.Img
        className="juiceImage img-fluid"
        variant="top"
        src={`./images/Products/Juices/${productData.image}.jpg`}
        //src={`../../public/images/Products/juices/${image}.jpg`}
      />
      <Card.Body>
        <Card.Title className="text-center">{productData.name}</Card.Title>
        <Card.Text className="text-center text-success">
          $U {productData.price}
        </Card.Text>

        <div className="text-center">
          <Button
            className="cardBtn rounded-pill px-3 bg-dark text-white"
            variant=""
            onClick={() => {
              handleShowCart();
              handleAddItem({ productData });
            }}
          >
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
