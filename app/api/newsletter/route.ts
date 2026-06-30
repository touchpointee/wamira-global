import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { newsletterSchema } from "@/lib/validations";
import NewsletterSubscriber from "@/models/NewsletterSubscriber";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    await connectDB();
    const email = parsed.data.email.toLowerCase();
    const existing = await NewsletterSubscriber.findOne({ email });

    if (existing) {
      return NextResponse.json({ success: true, message: "You are already subscribed." });
    }

    await NewsletterSubscriber.create({ email });
    return NextResponse.json({ success: true, message: "Thank you for subscribing." });
  } catch (error) {
    console.error("Newsletter subscription failed:", error);
    return NextResponse.json(
      { message: "We could not complete your subscription right now." },
      { status: 500 }
    );
  }
}
