import React from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/useReduxToolkit";
import { fetchGoodsList } from "../../store/slices/goodsListSlice";

import { GoodsType } from "../../types/goodsType";

import { Container, Grid, CircularProgress } from "@mui/material";

import styles from "./Body.module.scss";

import GoodsList from "./../../components/GoodsList/GoodsList";
import Goods from "./../../components/Goods/Goods";

const Body = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchGoodsList());
  }, []);

  const { loading, list } = useAppSelector((state) => state.goodsList);

  return (
    <Container>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <GoodsList>
          {list.map((item: GoodsType) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={item.mainId}>
                <Goods
                  mainId={item.mainId}
                  displayName={item.displayName}
                  displayDescription={item.displayDescription}
                  price={item.price}
                  displayAssets={item.displayAssets}
                />
              </Grid>
            );
          })}
        </GoodsList>
      )}
    </Container>
  );
};

export default Body;
