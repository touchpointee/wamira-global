import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { contactSchema } from "@/lib/validations";
import ContactLead from "@/models/ContactLead";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Please check the form and try again.", errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    await connectDB();
    await ContactLead.create(parsed.data);

    return NextResponse.json({ success: true, message: "Your message has been received." });
  } catch (error) {
    console.error("Contact submission failed:", error);
    return NextResponse.json(
      { message: "We could not send your message right now. Please try again later." },
      { status: 500 }
    );
  }
}
