import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export const getPosts = async () => {
  const mongoClient = await clientPromise;

  const data = await mongoClient.db().collection("posts").find().toArray();
  return JSON.parse(JSON.stringify(data));
};

export const getPost = async (id) => {
  const mongoClient = await clientPromise;

  const data = await mongoClient
    .db()
    .collection("posts")
    .findOne({ _id: new ObjectId(id) });

  return JSON.parse(JSON.stringify(data));
};

export default async (req, res) => {
  const data = await getPost(id);
  if (!data) {
    res.status(404).json("Post not found");
  }

  res.status(200).json({ post: data });
};
