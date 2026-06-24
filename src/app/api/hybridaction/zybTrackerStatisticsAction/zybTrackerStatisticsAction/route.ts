// app/api/hybridaction/zybTrackerStatisticsAction/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const pcPlat = req.nextUrl.searchParams.get("pcPlat") ?? "unknown";
  return NextResponse.json({ success: true, pcPlat });
}
