import instance from "../interceptor";

export async function Loginapi(body) {
  console.log(body);
  const req = await instance.post("/auth/login", { ...body });
  return req;
}
