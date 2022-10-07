import React from "react"
import useSWR from "swr";
import { Article } from "../../types";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleList = () => {
    const fetcher = async (url: string) => {
        const posts = await (await fetch("/api/posts")).json();
        return posts.data;
    }
    const {data: articles, error} = useSWR<Article[]>("/api/posts", fetcher);
    if (error) {
        return (
            <div>Error fetching articles...</div>
        )
    }
    if (!articles) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <>
                {
                    articles.map((article, i) => {
                        return (
                            <ArticleCard key={article.uuid} article={article} />
                        )    
                    })
                }
            </>
    )
}

export default ArticleList;