import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyIdToken } from "@/lib/firebase/auth-server";
import { getAdminFirestore } from "@/lib/firebase/admin";

const SESSION_COOKIE_NAME = "mesmer_session";
const USERS_COLLECTION = "users";

/** Format Firestore Timestamp or ISO string to display date */
function formatOnboardingDate(value) {
  if (!value) return "—";
  try {
    if (value?.toDate) return value.toDate().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    const d = typeof value === "string" ? new Date(value) : value;
    return isNaN(d.getTime()) ? "—" : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return "—";
  }
}

/** Map Firestore user doc to table row shape */
function mapUserDoc(id, data) {
  return {
    id,
    name: data?.displayName ?? data?.name ?? data?.email?.split("@")[0] ?? "—",
    email: data?.email ?? "—",
    lastMood: data?.lastMood ?? data?.lastMoodLabel ?? "—",
    onboardingDate: formatOnboardingDate(data?.createdAt ?? data?.onboardingDate),
    subscription: data?.subscription ?? data?.plan ?? "—",
  };
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    const decoded = token ? await verifyIdToken(token) : null;
    if (!decoded) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const db = getAdminFirestore();
    let snapshot;
    try {
      snapshot = await db
        .collection(USERS_COLLECTION)
        .orderBy("createdAt", "desc")
        .limit(100)
        .get();
    } catch {
      snapshot = await db.collection(USERS_COLLECTION).limit(100).get();
    }

    let total = snapshot.size;
    try {
      const countSnap = await db.collection(USERS_COLLECTION).count().get();
      total = countSnap.data().count ?? snapshot.size;
    } catch {
      total = snapshot.size;
    }

    const users = snapshot.docs.map((doc) => mapUserDoc(doc.id, doc.data()));
    return NextResponse.json({ users, total });
  } catch (e) {
    console.error("GET /api/admin/users error:", e);
    return NextResponse.json({ error: "Failed to load users" }, { status: 500 });
  }
}
