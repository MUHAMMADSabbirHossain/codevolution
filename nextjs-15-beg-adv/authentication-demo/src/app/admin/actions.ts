"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function setRole(formdata: FormData) {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Unauthorized");
  }

  const client = await clerkClient();
  const id = formdata.get("id") as string;
  const role = formdata.get("role") as string;

  try {
    await client.users.updateUser(id, { publicMetadata: { role } });

    revalidatePath("/admin");
  } catch (error) {
    throw new Error("Failed to update user");
  }
}

export async function removeRole(formdata: FormData) {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Unauthorized");
  }

  const client = await clerkClient();
  const id = formdata.get("id") as string;

  try {
    await client.users.updateUser(id, { publicMetadata: { role: null } });

    revalidatePath("/admin");
  } catch (error) {
    throw new Error("Failed to update user");
  }
}
