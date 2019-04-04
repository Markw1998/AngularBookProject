export interface GoogleBookResponse {
    items: Item[];
}

export interface Item {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    searchInfo: SearchInfo;
}

export interface SearchInfo {
    textSnippet: string;
}

export interface VolumeInfo {
    title: string;
    imageLinks: ImageLinks;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}