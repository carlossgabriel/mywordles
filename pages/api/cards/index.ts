import {
  BatchGetCommand,
  PutCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
import { NextApiRequest, NextApiResponse } from "next";

import { ddbDocClient } from "../../../lib/ddbClient.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { word, statistics } = req.body;

    const params = {
      TableName: process.env.TABLE_NAME,
      Item: {
        word,
        statistics,
        date: new Date().toLocaleDateString("en-US"),
      },
    };

    try {
      const data = await ddbDocClient.send(new PutCommand(params));
      console.log("Success - item created", data);
      res.status(200).json({ data });
    } catch (e) {
      console.log("Failed to create new document", e);
    }
  }

  if (req.method === "GET") {
    let data;
    const params = {
      TableName: process.env.TABLE_NAME,
    };

    try {
      data = await ddbDocClient.send(new ScanCommand(params));
    } catch (e) {
      console.log("Failed to get itens from DynamoDB", e);
    }

    res.status(200).json({
      data,
    });
  }
}
