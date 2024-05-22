export interface PlaceType {
    id:string;
    name:string;
    hearts:number;
    rating:number;
    theme:string;
}


export const places:PlaceType[] = [
    {
        id:"1",
        name:"가나다",
        hearts:1,
        rating:1,
        theme:"테마"
    },
    {
        id:"2",
        name:"나다라",
        hearts:1,
        rating:1,
        theme:"테마"
    },
    {
        id:"3",
        name:"부산",
        hearts:1,
        rating:1,
        theme:"테마"
    },
    {
        id:"4",
        name:"라마가",
        hearts:1,
        rating:1,
        theme:"테마"
    }
]