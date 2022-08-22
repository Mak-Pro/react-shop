import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxToolkit";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

import styles from "./CartItem.module.scss";
import { CartItemType } from "../../types/cartItemType";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../store/slices/cartSlice";

const CartItem = ({ id, name, price, quantity }: CartItemType) => {
  const dispatch = useAppDispatch();

  const decreaseQuantityHandler = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const increaseQuantityHandler = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const removeItemHandler = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <li className={styles.carts__list_item}>
      <div>
        <h6 className={styles.carts__list_item_title}>{name}</h6>
      </div>
      <div>
        <ul>
          <li>
            <Button onClick={() => decreaseQuantityHandler(id)}>
              <RemoveIcon />
            </Button>
          </li>
          <li>{quantity}</li>
          <li>
            <Button onClick={() => increaseQuantityHandler(id)}>
              <AddIcon />
            </Button>
          </li>
        </ul>
        =
        <span className={styles.carts__list_item_price}>
          {price.regularPrice * quantity} $
        </span>
        <Button className={styles.remove} onClick={() => removeItemHandler(id)}>
          <CloseIcon />
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
