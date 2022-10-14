export interface ApiResponse<Resource> {
    success: boolean;
    message: string;
    data: Resource;
}


export interface Article {
    uuid?: string;
    title?: string;
    article_link?: string;
    source?: string;
    image_link?: string;
}