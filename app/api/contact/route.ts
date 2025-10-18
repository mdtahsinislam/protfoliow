import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Message from "@/models/Message";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Connect to database
    await connectDB();

    // Save new message
    await Message.create({ name, email, message });

    return NextResponse.json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ success: false, message: "Error saving message" }, { status: 500 });
  }
}
