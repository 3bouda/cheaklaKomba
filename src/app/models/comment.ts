export class Comment{
  constructor(
    public id:number,
    public description:string,
    public date:string,
    public voteup:number,
    public votedown:number,
    public user:string,
    ){}
}
