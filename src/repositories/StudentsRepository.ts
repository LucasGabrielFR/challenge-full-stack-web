import { Student } from "../model/Student";

interface ICreateStudentDTO {
  name: string;
  cpf: string;
  email: string;
}

class StudentsRepository {

  private students: Student[];

  constructor() {
    this.students = [];
  }

  create({name, cpf, email}: ICreateStudentDTO) :void{
    const student = new Student();

    Object.assign(student, {
      name,
      cpf,
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.students.push(student);
  }

  list(): Student[] {
    return this.students;
  }


  findByCpf(cpf: string): Student {
    const student = this.students.find(student => student.cpf === cpf);
    return student;
  }

}

export { StudentsRepository };