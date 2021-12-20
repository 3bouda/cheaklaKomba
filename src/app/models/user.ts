export class User{
  constructor(
    public id?:number,
    public data?:{
     email?:string,
     phone?:string,
     name?:string,
     lastname?:string,
     adr?:string,
     pwd?:string,
     description?:string;
    }
  ){}
}
