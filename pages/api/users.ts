import { connectToDatabase } from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let users = await db
      .collection("users")
      .find({})
      .sort({ published: -1 })
      .toArray();
    // return the posts
    return res.json({
      users: JSON.parse(JSON.stringify(users)),
      success: true,
    });
  } catch (error: any) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function addUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body } = req;
    const { db } = await connectToDatabase();
    const existingUser = await db
      .collection("users")
      .findOne({ name: body.name });
    if (existingUser)
      return res
        .status(409)
        .json({ message: "User with this name already exists", success: true });
    const result = await db
      .collection("users")
      .insertOne({
        ...body,
        created_at: new Date(),
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      });
    return res
      .status(201)
      .json({
        message: "User added successfully",
        success: true,
        user_id: result.insertedId,
      });
  } catch (error: any) {
    console.error(error);
    return res
      .status(500)
      .json({ message: `Failed to add user ${error.message}`, success: false });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getUsers(req, res);
    }

    case "POST": {
      return addUsers(req, res);
    }
  }
}
