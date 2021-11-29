import { v4 as uuidV4 } from "uuid";

class Student{

  ra?: string;
  name: string;
  cpf: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    if(!this.ra){
      this.ra = uuidV4();
    }
    
  }

}

export {Student}