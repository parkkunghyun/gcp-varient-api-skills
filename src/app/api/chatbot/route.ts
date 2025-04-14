// /api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINAI_API_KEY;

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: message + ". 그리고 3줄 미만으로 알려줘" }] }]
    }),
  });

  const data = await res.json();
  console.log(data);

  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || '답변을 생성할 수 없었습니다.';

  return NextResponse.json({ reply });
}
