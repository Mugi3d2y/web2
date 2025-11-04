interface Film {
    title:string;
    director:string;
    duration:number;
    imageLink?:string | null;
    description?:string | null;
    budget?:number | null;
}


export type { Film }