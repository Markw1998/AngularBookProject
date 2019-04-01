export interface GoogleBookResponse
{
    items : IItems[];
}

export interface IItems{
    volumeInfo: string;
    searchInfo: string;
} 