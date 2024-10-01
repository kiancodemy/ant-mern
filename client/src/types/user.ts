export type usertype = {
  userinfo: {
    username: string;
    email: string;
    role: string;
  };
};

export type onClos = {
  onClos?: () => void;
};
export type setloading = {
  setloading: React.Dispatch<React.SetStateAction<boolean>>;
};
export type productsType = {
  _id: string;
  Title: string;
  Description: string;
  Category: string;
  Brand: string;
  Price: number;
  Saleprice?: number;

  TotalStock: number;
  Image: string;
};
export type CategoryType = {
  value: number;
  label: String;
};
export type CategoriesType = {
  key: number;
  value: String;
  label: String;
};
