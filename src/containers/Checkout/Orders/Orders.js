import React, { Component } from 'react';
import Order from '../../../components/Order/Order';
import { connect } from 'react-redux';
import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map(order => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        );
      });
    }
    return <div>{orders}</div>;
  }
}

const mapsStateToProps = state => ({
  orders: state.order.orders,
  loadgin: state.order.loading,
  token: state.auth.token,
  userId: state.auth.userId
});

const mapsDispatchToProps = dispatch => ({
  onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
});

export default connect(
  mapsStateToProps,
  mapsDispatchToProps
)(withErrorHandler(Orders, axios));
