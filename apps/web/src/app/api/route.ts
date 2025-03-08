// src/app/api/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const baseUrl = process.env.SERVER_URL || 'http://localhost:8080';

    const response = await fetch(`${baseUrl}${request.url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      error: 'Internal Server Error'
    }, {
      status: 500
    });
  }
}