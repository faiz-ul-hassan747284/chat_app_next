const { connectToDatabase } = require("../../lib/mongodb");
import type { NextApiRequest, NextApiResponse } from "next";

async function getMessages(req: NextApiRequest, res: NextApiResponse) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let messages = await db
      .collection("messages")
      .find({})
      .sort({ published: -1 })
      .toArray();
    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(messages)),
      success: true,
    });
  } catch (error: any) {
    // return the error
    return res.json({
      messages: new Error(error).message,
      success: false,
    });
  }
}

async function addMessage(req: NextApiRequest, res: NextApiResponse) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post
    await db
      .collection("messages")
      .insertOne(
        { ...req.body, created_at: new Date() },
        { $setOnInsert: { created_at: new Date() } }
      );
    // return a message
    return res.json({
      message: "Message added successfully",
      success: true,
    });
  } catch (error: any) {
    // return an error
    return res.json({
      message: new Error(error).message,
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
  }
}
