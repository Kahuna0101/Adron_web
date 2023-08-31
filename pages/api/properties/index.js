import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb";

export const getProperties = async () => {
  const mongoClient = await clientPromise;

  const data = await mongoClient.db().collection("properties").find().toArray();
  return JSON.parse(JSON.stringify(data));
};

export const getProperty = async (id) => {
  const mongoClient = await clientPromise;

  const data = await mongoClient
    .db()
    .collection("properties")
    .findOne({ _id: new ObjectId(id) });

  return JSON.parse(JSON.stringify(data));
};

export default async (req, res) => {
  const data = await getProperty(id);
  if (!data) {
    res.status(404).json("Property not found");
  }

  res.status(200).json({ property: data });
};
