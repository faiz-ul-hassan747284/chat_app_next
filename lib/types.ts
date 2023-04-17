type messageData = {
  message: {
    _id: string,
    message: string,
    created_at: string,
    user: string
  }[],
  success: boolean
}
export type {
  messageData
}