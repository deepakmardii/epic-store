export default async function handler(req, res) {
  if (req.method === "POST") {
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
