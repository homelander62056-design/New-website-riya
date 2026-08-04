import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory click counter per model and total clicks
const modelClickCounts: Record<string, number> = {};
let totalClickCount = 0;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, city, whatsappNumber, count: clientCount } = body;

    if (!name || !whatsappNumber) {
      return NextResponse.json(
        { success: false, message: "Model name and whatsappNumber are required" },
        { status: 400 }
      );
    }

    // Increment click counts
    const modelKey = `${name}_${whatsappNumber}`;
    modelClickCounts[modelKey] = (modelClickCounts[modelKey] || 0) + 1;
    totalClickCount += 1;

    const currentModelCount = clientCount || modelClickCounts[modelKey];

    // Configure Nodemailer Transporter using environment variables
    const emailUser = process.env.EMAIL_USER || "rajeshk.techg@gmail.com";
    const emailPass = process.env.EMAIL_PASS || "jckykwaqysnqzogi";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"WhatsApp Click Tracker" <${emailUser}>`,
      to: emailUser,
      subject: `🔥 New WhatsApp Click: ${name} (${city}) - Click #${currentModelCount}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; rounded-radius: 10px;">
          <h2 style="color: #ff2d55; margin-bottom: 5px;">📲 WhatsApp Button Click Alert</h2>
          <p style="color: #666; font-size: 14px; margin-top: 0;">A user just clicked the WhatsApp button for a model profile!</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Model Name:</td>
              <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">City / Location:</td>
              <td style="padding: 10px; border: 1px solid #eee;">${city || "N/A"}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">WhatsApp Number:</td>
              <td style="padding: 10px; border: 1px solid #eee; color: #25D366; font-weight: bold;">+${whatsappNumber}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Model Click Count:</td>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; color: #ff2d55;">${currentModelCount} clicks</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Total Site WhatsApp Clicks:</td>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">${totalClickCount} clicks</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #eee;">Timestamp:</td>
              <td style="padding: 10px; border: 1px solid #eee;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">
            This email was sent automatically from your website when a user clicked the WhatsApp button.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Click tracked and email sent successfully",
      count: currentModelCount,
      totalCount: totalClickCount,
    });
  } catch (error: any) {
    console.error("Error in whatsapp-click route:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
