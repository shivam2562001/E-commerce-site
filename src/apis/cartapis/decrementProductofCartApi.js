import Axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
};

async function decrementCartProduct(productId,_id) {
  try {
    const data = {
        productId,
      _id
    };

    return await Axios.post(
      `${process.env.REACT_APP_SERVER_URL}/cart/product/decrement`,
      data,
      config
    );
  } catch (err) {
    throw err;
  }
}

export default decrementCartProduct;