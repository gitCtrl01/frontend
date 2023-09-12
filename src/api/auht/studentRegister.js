import Instance from "../interceptor";

export default function StudentRetisterApi(data) {
  const req = Instance.post("/auth/studentRegister", { ...data });
}
