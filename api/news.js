// /api/news.js
export default async function handler(req, res) {
  const apiKey = "66e47d59086af2af250337e8777cc88b"; // Your GNews API key
  const apiUrl = `https://gnews.io/api/v4/top-headlines?lang=en&country=us&token=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch from GNews API");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
