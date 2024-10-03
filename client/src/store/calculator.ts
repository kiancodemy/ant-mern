export const calculator = (orders: any) => {
  const { AllOrders } = orders;
  orders.totalQuantity = Number(
    AllOrders.reduce((a: any, b: any) => {
      return a + b.quantity;
    }, 0)
  );
  const allcosts =
    AllOrders.length > 0
      ? Number(
          Math.round(
            AllOrders.map((item: any) => item.quantity * item.Price).reduce(
              (a: number, b: number) => {
                return a + b;
              },
              0
            )
          ).toFixed(2)
        )
      : 0;
  orders.totalprice = allcosts;
  orders.totalTax =
    orders.totalprice > 100
      ? 0
      : Number(Math.round(orders.totalprice * 1.3).toFixed(2));
  return true;
};
