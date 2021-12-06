import { Comment } from "./comment";

export class Post{
  constructor(
    public id:number,
    public description:string,
    public date:string,
    public vote:number,
    public user:string,
    public sujet:string,
    public reply:Array<Comment>
    ){}
}
