import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxToolkit";

import styles from "./Cart.module.scss";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog, Button } from "@mui/material";
import CartItem from "./CartItem";

import { CartItemType } from "../../types/cartItemType";

const Cart = () => {
  const { quantity } = useAppSelector((state) => state.cart);

  const [modalOpen, setModalOpen] = React.useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  // goods
  const { addedList } = useAppSelector((state) => state.cart);

  const totalPrice = addedList.reduce(
    (sum: number, current: CartItemType): any => {
      return (sum += current.price.regularPrice * current.quantity);
    },
    0
  );

  return (
    <>
      <button className={styles.cart} onClick={handleClickOpen}>
        <ShoppingCartIcon className={styles.icon} />
        <span className={styles.quantity}>{quantity}</span>
      </button>

      <Dialog open={modalOpen} onClose={handleClose}>
        <div className={styles.carts}>
          <div className={styles.carts__header}>
            <h4 className={styles.carts__title}>Cart</h4>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>

          {addedList.length > 0 ? (
            <div className={styles.carts__body}>
              <ul className={styles.carts__list}>
                {addedList.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    price={{
                      regularPrice: item.price.regularPrice,
                      finalPrice: item.price.finalPrice,
                    }}
                  />
                ))}
              </ul>
              <div className={styles.carts__total}>
                {" "}
                <span>Total price:</span>{" "}
                <span className={styles.carts__total_price}>
                  {totalPrice} $
                </span>{" "}
              </div>
              <div className={styles.carts__actions}>
                <Button variant="contained" color="secondary">
                  Checkout
                </Button>
              </div>
            </div>
          ) : (
            <h2 className={styles.carts__nodata_title}>No Goods in Cart</h2>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default Cart;
