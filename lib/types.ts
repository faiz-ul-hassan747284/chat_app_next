type messagesData = {
  message: {
    _id: string;
    message: string;
    created_at: string;
    user: string;
  }[];
  success: boolean;
};

type messageData = {
  _id: string;
  message: string;
  created_at: string;
  user: string;
};
type usersData = {
  users: {
    _id: string;
    name: string;
    created_at: string;
    color: string;
  }[];
  success: boolean;
};

type userData = {
  _id: string;
  name: string;
  created_at: string;
  color: string;
};
export type { messagesData, messageData, usersData, userData };
