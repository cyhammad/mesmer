import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyIdToken } from "@/lib/firebase/auth-server";
import { getAdminFirestore } from "@/lib/firebase/admin";

const SESSION_COOKIE_NAME = "mesmer_session";
const EXERCISES_COLLECTION = "exercises";

/** Map Firestore exercise doc to a clean shape */
function mapExerciseDoc(id, data) {
  return {
    id,
    title: data?.title ?? "—",
    description: data?.description ?? "",
    category: data?.category ?? data?.categoryName ?? "—",
    categoryId: data?.categoryId ?? "",
    categoryName: data?.categoryName ?? data?.category ?? "—",
    duration: data?.duration ?? 0,
    isMood: data?.isMood ?? false,
    listen: data?.listen ?? "",
    watch: data?.watch ?? "",
    read: data?.read ?? "",
    mesmerFact: data?.mesmerFact ?? "",
    theScience: data?.theScience ?? "",
    whatItIs: data?.whatItIs ?? "",
    whatYouDo: data?.whatYouDo ?? "",
    whenToUse: data?.whenToUse ?? "",
    steps: Array.isArray(data?.steps) ? data.steps : [],
  };
}

export async function GET(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    const decoded = token ? await verifyIdToken(token) : null;
    if (!decoded) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const db = getAdminFirestore();
    const { searchParams } = new URL(request.url);
    const categoryFilter = searchParams.get("category");

    let query = db.collection(EXERCISES_COLLECTION);

    if (categoryFilter) {
      // Try filtering by categoryName first, fall back to category
      query = query.where("categoryName", "==", categoryFilter);
    }

    let snapshot;
    try {
      snapshot = await query.limit(200).get();
    } catch {
      // Fallback without ordering
      snapshot = await db.collection(EXERCISES_COLLECTION).limit(200).get();
    }

    // If categoryName filter returned nothing, try category field
    if (categoryFilter && snapshot.empty) {
      try {
        snapshot = await db
          .collection(EXERCISES_COLLECTION)
          .where("category", "==", categoryFilter)
          .limit(200)
          .get();
      } catch {
        // ignore
      }
    }

    const exercises = snapshot.docs.map((doc) =>
      mapExerciseDoc(doc.id, doc.data()),
    );

    // Get category counts from ALL exercises (no filter)
    let allSnapshot;
    try {
      allSnapshot = await db.collection(EXERCISES_COLLECTION).get();
    } catch {
      allSnapshot = { docs: [] };
    }

    const categoryCounts = {};
    allSnapshot.docs.forEach((doc) => {
      const data = doc.data();
      const cat = data?.categoryName || data?.category || "Uncategorized";
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });

    const categories = Object.entries(categoryCounts).map(([name, count]) => ({
      name,
      count: String(count).padStart(2, "0"),
    }));

    return NextResponse.json({
      exercises,
      categories,
      total: exercises.length,
    });
  } catch (e) {
    console.error("GET /api/admin/exercises error:", e);
    return NextResponse.json(
      { error: "Failed to load exercises" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    const decoded = token ? await verifyIdToken(token) : null;
    if (!decoded) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const db = getAdminFirestore();

    const exerciseData = {
      title: body.title || "",
      description: body.description || "",
      category: body.category || "",
      categoryId: body.categoryId || "",
      categoryName: body.categoryName || body.category || "",
      duration: Number(body.duration) || 0,
      isMood: body.isMood ?? true,
      listen: body.listen || "",
      watch: body.watch || "",
      read: body.read || "",
      mesmerFact: body.mesmerFact || "",
      theScience: body.theScience || "",
      whatItIs: body.whatItIs || "",
      whatYouDo: body.whatYouDo || "",
      whenToUse: body.whenToUse || "",
      steps: Array.isArray(body.steps) ? body.steps : [],
      createdAt: new Date().toISOString(),
    };

    const docRef = await db
      .collection(EXERCISES_COLLECTION)
      .add(exerciseData);

    return NextResponse.json({
      id: docRef.id,
      ...exerciseData,
    });
  } catch (e) {
    console.error("POST /api/admin/exercises error:", e);
    return NextResponse.json(
      { error: "Failed to create exercise" },
      { status: 500 },
    );
  }
}

export async function PUT(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    const decoded = token ? await verifyIdToken(token) : null;
    if (!decoded) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    if (!body.id) {
      return NextResponse.json(
        { error: "Exercise ID is required" },
        { status: 400 },
      );
    }

    const db = getAdminFirestore();

    const updateData = {
      title: body.title || "",
      description: body.description || "",
      category: body.category || "",
      categoryId: body.categoryId || "",
      categoryName: body.categoryName || body.category || "",
      duration: Number(body.duration) || 0,
      isMood: body.isMood ?? true,
      listen: body.listen || "",
      watch: body.watch || "",
      read: body.read || "",
      mesmerFact: body.mesmerFact || "",
      theScience: body.theScience || "",
      whatItIs: body.whatItIs || "",
      whatYouDo: body.whatYouDo || "",
      whenToUse: body.whenToUse || "",
      steps: Array.isArray(body.steps) ? body.steps : [],
      updatedAt: new Date().toISOString(),
    };

    await db
      .collection(EXERCISES_COLLECTION)
      .doc(body.id)
      .update(updateData);

    return NextResponse.json({ id: body.id, ...updateData });
  } catch (e) {
    console.error("PUT /api/admin/exercises error:", e);
    return NextResponse.json(
      { error: "Failed to update exercise" },
      { status: 500 },
    );
  }
}

export async function DELETE(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    const decoded = token ? await verifyIdToken(token) : null;
    if (!decoded) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const exerciseId = searchParams.get("id");

    if (!exerciseId) {
      return NextResponse.json(
        { error: "Exercise ID is required" },
        { status: 400 },
      );
    }

    const db = getAdminFirestore();
    await db.collection(EXERCISES_COLLECTION).doc(exerciseId).delete();

    return NextResponse.json({ success: true, id: exerciseId });
  } catch (e) {
    console.error("DELETE /api/admin/exercises error:", e);
    return NextResponse.json(
      { error: "Failed to delete exercise" },
      { status: 500 },
    );
  }
}
