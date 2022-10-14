// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse, Article } from '../../types'
import {DynamoDB} from "@aws-sdk/client-dynamodb";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Article[]>>
) {
  const ddb = new DynamoDBClient({});

  // var params = {
  //   TableName: 'article',
  //   Key: {
  //     'title_date_source': { : 'New collections_December 20, 2015_benmvp'}
  //   }
  // };

  var params = {
    //KeyConditionExpression: 'Season = :s and Episode > :e',
    TableName: 'article'
  };

  let resData = null;

 ddb.scan(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
      // data.Items.forEach(function (element, index, array) {
      //   console.log(
      //       "printing",
      //       element.Title.S + " (" + element.Subtitle.S + ")"
      //   );
      // });
      console.log(data.Items[0])

      resData = data.Items.map((item) => {
        return {
          uuid: item.title_date_source.S,
          source: item.source.S,
          title: item.title.S,
          image_link: item.image_link.S,
          article_link: item.article_link.S
        }
      })

      res.status(200).json({
        success: true,
        message: "",
        data: resData || []
      })

    }
  });


  // ddb.getItem(params, function(err, data) {
  //   if (err) {
  //     console.log("Error", err);
  //   } else {
  //     console.log("Success", data.Item);
  //   }
  // });




  const mockData: Article[] = [
    {
      uuid: "dfskjhfbwjkflsdnf;ldskf",
      source: "benmvp",
      title: "How to grate cheese",
      image_link: "https://i.imgur.com/AD3MbBi.jpeg",
      article_link: "https://www.benmvp.com/blog/mock-all-functions-module-except-one-jest/",
    },
    {
      uuid: "dfskjhfbwjkflgjsalkdmf'dskfds",
      source: "benmvp",
      title: "How to grate pasta",
      image_link: "https://i.imgur.com/AD3MbBi.jpeg",
      article_link: "https://www.benmvp.com/blog/mock-all-functions-module-except-one-jest/",
    },
  ]
  // res.status(200).json({
  //   success: true,
  //   message: "",
  //   data: mockData
  // })
}
