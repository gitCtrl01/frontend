import { GetItem } from "../../util/localstorage";
import Instance from "../interceptor";

export async function GetInvites() {
  const req = await Instance.get("/prof/getInvites", {
    headers: {
      Authorization: `Bearer ${GetItem("token")}`,
    },
  });
  return req;
}

export async function AppriveGuide(id) {
  const req = await Instance.put(
    "/prof/assignprof",
    { _id: id },
    {
      headers: {
        Authorization: `Bearer ${GetItem("token")}`,
      },
    }
  );
  return req;
}
