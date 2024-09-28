import {
  Form,
  Button,
  Input,
  Select,
  InputNumber,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import type { FormProps } from "antd";
import { categories, brand } from "../../assets/admin/adminDashboard";
export default function NewProduct() {
  ///upload image config

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const props: UploadProps = {
    name: "file",
    action: "/",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  type FieldType = {
    Title?: string;
    Description?: string;
    Category?: string;
    Brand?: string;
    Price?: number;
    Saleprice?: number;
    TotalStock?: number;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form
      layout="vertical"
      name="basic"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 20 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        rules={[{ required: true, message: "Please Upload Image!" }]}
        name="upload"
        label="Upload Image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload {...props} multiple={false} name="logo" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item<FieldType>
        label="Title"
        name="Title"
        rules={[{ required: true, message: "Please input your Title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Description"
        name="Description"
        rules={[{ required: true, message: "Please input your  Description!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Category"
        name="Category"
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
        name="Price"
        rules={[{ required: true, message: "Please input your Price!" }]}
      >
        <InputNumber addonAfter="$" size="large" min={1} max={100000} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Saleprice"
        name="Saleprice"
        rules={[{ message: "Please input yourSaleprice!" }]}
      >
        <InputNumber addonAfter="$" size="large" min={1} max={100000} />
      </Form.Item>
      <Form.Item<FieldType>
        label="TotalStock"
        name="TotalStock"
        rules={[{ required: true, message: "Please input your TotalStock!" }]}
      >
        <InputNumber addonAfter="$" size="large" min={1} max={100000} />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
