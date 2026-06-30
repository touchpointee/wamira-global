import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { connectDB } from "@/lib/db";
import { resourceArticleSchema } from "@/lib/validations";
import ResourceArticle from "@/models/ResourceArticle";

export async function PUT(request: Request, { params }: { params: { id: string } }) {
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
    const updated = await ResourceArticle.findByIdAndUpdate(params.id, parsed.data, {
      new: true,
      runValidators: true
    });

    if (!updated) {
      return NextResponse.json({ message: "Resource not found." }, { status: 404 });
    }

    revalidatePath("/resources");
    revalidatePath("/admin/resources");
    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error?.code === 11000) {
      return NextResponse.json({ message: "That slug is already in use." }, { status: 409 });
    }
    console.error("Resource update failed:", error);
    return NextResponse.json({ message: "Unable to update resource." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  try {
    await connectDB();
    await ResourceArticle.findByIdAndDelete(params.id);
    revalidatePath("/resources");
    revalidatePath("/admin/resources");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resource delete failed:", error);
    return NextResponse.json({ message: "Unable to delete resource." }, { status: 500 });
  }
}
