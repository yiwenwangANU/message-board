import axios from "axios";

export async function getPosts() {
  try {
    const res = await axios.get("http://localhost:8080/feed/posts");
    if (res.status !== 200) throw new Error("Failed to fetch user status!");
    return res.data;
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
}
