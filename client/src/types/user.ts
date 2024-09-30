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
  Saleprice: number;
  TotalStock?: number;
  Image: string;
};
