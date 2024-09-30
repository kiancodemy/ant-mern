import { Button, Flex, Drawer, Row } from "antd";
import { useState } from "react";

import NewProduct from "../../components/admin/NewProduct";
import ProductCard from "../../components/admin/ProductCard";

export default function Products() {
  const [open, setOpen] = useState(false);

  const [loading, setloading] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="p-4">
      <Flex justify="end">
        <Button onClick={showDrawer} size="large" type="primary">
          Add new Product
        </Button>
        <Drawer
          loading={loading}
          title="Add New Product"
          placement="right"
          closable={true}
          onClose={onClose}
          open={open}
          key="right"
        >
          <NewProduct setloading={setloading}></NewProduct>
        </Drawer>
      </Flex>
      <ProductCard></ProductCard>
    </div>
  );
}
