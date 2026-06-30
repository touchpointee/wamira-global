import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { connectDB } from "@/lib/db";
import { resourceArticleSchema } from "@/lib/validations";
import ResourceArticle from "@/models/ResourceArticle";

export async function POST(request: Request) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = resourceArticleSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Please check the resource fields.", errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    await connectDB();
    await ResourceArticle.create(parsed.data);
    revalidatePath("/resources");
    revalidatePath("/admin/resources");
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    if (error?.code === 11000) {
      return NextResponse.json({ message: "That slug is already in use." }, { status: 409 });
    }
    console.error("Resource create failed:", error);
    return NextResponse.json({ message: "Unable to save resource." }, { status: 500 });
  }
}
