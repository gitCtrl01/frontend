import Instance from "../interceptor";

export async function Loginapi(body) {
  const req = await Instance.post("/auth/login", { ...body });
  return req;
}

export async function Proflogin(body) {
  const req = await Instance.post("/auth/proflogin", { ...body });
  return req
}

