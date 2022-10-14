// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse, Article } from '../../types'
import {DynamoDBClient, ScanCommand} from "@aws-sdk/client-dynamodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Article[]>>
) {
  const client = new DynamoDBClient({});

  let {Items} = await client.send(
    new ScanCommand({
      TableName: 'article',
    })
  );

  if (!Items) Items = [];

  const resData = Items.map((item) => {
  return {
    uuid: item.title_date_source.S,
    source: item.source.S,
    title: item.title.S,
    image_link: item.image_link?.S || "",
    article_link: item.article_link.S
  }
})

return res.status(200).json({
  success: true,
  message: "",
  data: resData
})

}
