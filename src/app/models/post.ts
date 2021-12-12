import { Comment } from "./comment";

export class Post{
  constructor(
    public id?:string,
    public description?:string,
    public date?:string,
    public voteup?:number,
    public votedown?:number,
    public user?:string,
    public sujet?:string,
    ){}
}
