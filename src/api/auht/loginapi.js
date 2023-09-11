import Instance from "../interceptor";

export async function Loginapi(body) {
  console.log(body);
  const req = await Instance.post("/auth/login", { ...body });
  return req;
}
