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
