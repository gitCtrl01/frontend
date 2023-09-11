import Instance from "../interceptor";

export async function RegisterClg(body) {
  const req = Instance.post("/college/create", body);
  return req;
}
