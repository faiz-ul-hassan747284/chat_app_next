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
export type { messagesData, messageData };
