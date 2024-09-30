import { Form, Button, Input, Select, InputNumber, message } from "antd";

import { useAdmiupdateMutation } from "../../store/api/adminApi";

import type { FormProps } from "antd";
import { categories, brand } from "../../assets/admin/adminDashboard";

export default function UpdateModel({
  UpdatedItem,
  setIsModalOpen,
}: {
  UpdatedItem: any;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [get, { data: info, isError, error }] = useAdmiupdateMutation();

  ///upload image configuration

  type FieldType = {
    Title?: string;
    Description?: string;
    Category?: string;
    Brand?: string;
    Price?: number;
    Saleprice?: number;
    TotalStock?: number;
  };
  ///submit function//

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      await get({ ...values, _id: UpdatedItem._id });

      setIsModalOpen(false);
      message.success(info.message);
    } catch (err) {
      if (isError) {
        message.error(error?.data?.message);
      }
    }
  };

  ///main tsx///

  return (
    <Form
      name="basic"
      wrapperCol={{ span: 20 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Title"
        initialValue={UpdatedItem.Title}
        name="Title"
        rules={[{ required: true, message: "Please input your Title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Description"
        initialValue={UpdatedItem.Description}
        name="Description"
        rules={[{ required: true, message: "Please input your  Description!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Category"
        name="Category"
        initialValue={UpdatedItem.Category}
        rules={[{ required: true, message: "Please input your  Category!" }]}
      >
        <Select
          showSearch
          placeholder="Category"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={categories}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Brand"
        initialValue={UpdatedItem.Brand}
        name="Brand"
        rules={[{ required: true, message: "Please input your  Brand!" }]}
      >
        <Select
          showSearch
          placeholder="Brand"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={brand}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Price"
        initialValue={UpdatedItem.Price}
        name="Price"
        rules={[{ required: true, message: "Please input your Price!" }]}
      >
        <InputNumber addonAfter="$" size="large" min={1} max={100000} />
      </Form.Item>
      <Form.Item<FieldType>
        initialValue={UpdatedItem.Saleprice}
        label="Saleprice"
        name="Saleprice"
      >
        <InputNumber addonAfter="$" size="large" min={1} max={100000} />
      </Form.Item>
      <Form.Item<FieldType>
        initialValue={UpdatedItem.TotalStock || 1}
        label="TotalStock"
        name="TotalStock"
        rules={[{ required: true, message: "Please input your TotalStock!" }]}
      >
        <InputNumber size="large" min={1} max={100000} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
