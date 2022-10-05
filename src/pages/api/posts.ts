// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse, Article } from '../../types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Article[]>>
) {

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
  res.status(200).json({
    success: true,
    message: "",
    data: mockData
  })
}
