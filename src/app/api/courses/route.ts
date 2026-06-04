import { NextResponse } from 'next/server';
import { courses } from '@/lib/learningData';

export async function GET() {
  return NextResponse.json(courses);
}
