const { connectToDatabase } = require("../../lib/mongodb");
import type { NextApiRequest, NextApiResponse } from "next";
import Pusher from "pusher";

export const pusher = new Pusher({
  appId: process.env.APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
  secret: process.env.SECRET!,
  cluster: process.env.NEXT_PUBLIC_CLUSTER!,
  useTLS: true,
});

async function getMessages(req: NextApiRequest, res: NextApiResponse) {
  try {
    // connect to the database
    const { db } = await connectToDatabase();
    // fetch the messages
    const messages = await db
      .collection("messages")
      .find({})
      .sort({ published: -1 })
      .toArray();
    // return the messages
    return res.json({
      message: messages,
      success: true,
    });
  } catch (error) {
    // return the error
    return res.status(500).json({
      message: "An error occurred while fetching messages",
      success: false,
    });
  }
}

async function addMessage(req: NextApiRequest, res: NextApiResponse) {
  try {
    // connect to the database
    const { db } = await connectToDatabase();
    // add the message
    await db
      .collection("messages")
      .insertOne(
        { ...req.body, created_at: new Date() },
        { $setOnInsert: { created_at: new Date() } }
      );
    await pusher.trigger("global", "new-message", {
      req: req.body,
    });
    // return a message
    return res.status(201).json({
      message: "Message added successfully",
      success: true,
    });
  } catch (error) {
    // return an error
    return res.status(500).json({
      message: "An error occurred while adding the message",
      success: false,
    });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getMessages(req, res);
    }

    case "POST": {
      return addMessage(req, res);
    }

    default: {
      return res.status(405).json({
        message: "Method not allowed",
        success: false,
      });
    }
  }
}
