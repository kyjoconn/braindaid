import React from "react";
import { Article } from "../../types";
import style from "./ArticleCard.module.css";

const ArticleCard = ({article}: {article: Article}) => {
    return (
        <div className={style.article}>
            <p>From {article.source}</p>
            <a href={article.article_link}>
                <h3>{article.title}</h3>
            </a>
            <img src={article.image_link} />
        </div>
    )
}

export default ArticleCard;