import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxToolkit";
import { addToCart } from "../../store/slices/cartSlice";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Snackbar,
} from "@mui/material";

import styles from "./Goods.module.scss";

import { GoodsType } from "../../types/goodsType";

const Goods = ({
  mainId: id,
  displayName: name,
  displayDescription: description,
  price,
  displayAssets,
}: GoodsType) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();

  const addGoodsHandler = (id: string) => {
    const goods = {
      id,
      name,
      description,
      price,
      displayAssets,
      quantity: 1,
    };
    dispatch(addToCart(goods));

    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  return (
    <>
      <Card className={styles.card}>
        <CardMedia
          component="img"
          height="140"
          image={displayAssets[0].full_background}
          alt={name}
        />
        <CardContent className={styles.card__content}>
          <h4 className={styles.title}>{name}</h4>
          <p>{description}</p>
        </CardContent>
        <CardActions className={styles.actions}>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            onClick={() => {
              setOpen(true);
              addGoodsHandler(id);
            }}
          >
            BUY
          </Button>
          <h3 className={styles.price}>{price.regularPrice}</h3>
        </CardActions>
      </Card>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        message={`${name} has been added`}
        key={"top" + "right"}
        className={styles.tooltip__info}
      />
    </>
  );
};

export default Goods;
