import { Router } from "express";
import { StudentsRepository } from "../repositories/StudentsRepository";

const studentsRoutes = Router();
const studentsRepository = new StudentsRepository();

studentsRoutes.post("/", (req, res) => {
  const { name, cpf, email } = req.body;

  const studentAlredyExists = studentsRepository.findByCpf(cpf);

  if(studentAlredyExists){
    return res.status(400).json({ error: "Student already exists" });
  }

  studentsRepository.create({ name, cpf, email });

  return res.status(201).send();
});

studentsRoutes.get("/", (req, res) => {
  const all = studentsRepository.list();

  return res.json(all);
});



export { studentsRoutes };