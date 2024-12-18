import {
  Form,
  Button,
  Input,
  Select,
  InputNumber,
  Upload,
  message,
} from "antd";
import { setloading } from "../../types/user";

import { useAdmincreateMutation } from "../../store/api/adminApi";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import type { FormProps } from "antd";
import { categories, brand } from "../../assets/admin/adminDashboard";

export default function NewProduct({ setloading }: setloading) {
  const [get, { isError, error }] = useAdmincreateMutation();
  const [fileList, setFileList] = useState<any>([]);

  ///upload image configuration

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    setFileList(e.fileList);
    return e?.fileList;
  };

  const props: UploadProps = {
    action: `${import.meta.env.VITE_BASEURL}/admin/send`,

    headers: {
      authorization: "authorization-text",
    },

    onChange({ file, fileList }) {
      if (file.status !== "uploading") {
        console.log(file, fileList);
      }
      if (file.status === "done") {
        message.success(`${file.name} file uploaded successfully`);
      } else if (file.status === "error") {
        message.error(`${file.name} file upload failed.`);
      }
      setFileList(fileList);
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
    file: any;
  };

  ///submit function//

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      setloading(true);

      let find = values.file.find((item: any) => item.status === "done");
      const url = find.response.url;
      delete values.file;
      const all = { ...values, Image: url };

      const info = await get(all).unwrap();
      setloading(false);

      message.success(info.message);
    } catch (err) {
      if (isError) {
        message.error(error?.data?.message);
      }
    }
  };

 

  return (
    <Form
      layout="vertical"
      name="basic"
      labelCol={{ span: 12 }}
      wrapperCol={{ span: 20 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please Upload Image!",
            validator: () => {
              if (
                fileList.some((file: any) => file.status === "error") ||
                fileList.length === 0
              ) {
                return Promise.reject(
                  new Error("File upload failed or is it s more than two!")
                );
              }
              return Promise.resolve();
            },
          },
        ]}
        name="file"
        label="Upload Image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload {...props} multiple={false} name="file" listType="picture">
          <Button disabled={fileList.length >= 1} icon={<UploadOutlined />}>
            Click to upload
          </Button>
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
      <Form.Item<FieldType> label="Saleprice" name="Saleprice">
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
        <Button
          disabled={fileList.length === 0}
          block
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
