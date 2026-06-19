export const dynamic = "force-static"; // cache this route
export const revalidate = 3; // revalidate every 3 seconds for this route in npm run start

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
