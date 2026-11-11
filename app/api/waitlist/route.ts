// app/api/waitlist/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs"; // googleapis needs Node, not the edge runtime

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getSheets() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({ email: "" }));

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const clean = email.trim().toLowerCase();

  try {
    const sheets = getSheets();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

    // Optional: skip duplicates
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:A",
    });
    const already = existing.data.values?.some(
      (row) => row[0]?.toLowerCase() === clean
    );
    if (already) {
      return NextResponse.json({ ok: true }); // treat as success, don't leak who's signed up
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:B",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [[clean, new Date().toISOString()]] },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Sheets error:", err);
    return NextResponse.json(
      { error: "Couldn't save your email. Please try again." },
      { status: 500 }
    );
  }
}