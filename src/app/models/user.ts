export class User{
  constructor(
    public id:number,
    public email:string,
    public phone:string,
    public name:string,
    public lastname:string,
    public adr:string,
    public sujet:Array<string>
    ){}
}
