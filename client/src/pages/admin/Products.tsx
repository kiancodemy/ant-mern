import { Button, Flex, Drawer } from "antd";
import { useState } from "react";
import NewProduct from "../../components/admin/NewProduct";
export default function Products() {
  const [open, setOpen] = useState(false);
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
          title="Add New Product"
          placement="right"
          closable={true}
          onClose={onClose}
          open={open}
          key="right"
        >
          <NewProduct></NewProduct>
        </Drawer>
      </Flex>
    </div>
  );
}
