import Instance from "../interceptor";

export async function ProfessorRegister(body) {
  const req = await Instance.post("/auth/createProf", { ...body });
  return req;
}
