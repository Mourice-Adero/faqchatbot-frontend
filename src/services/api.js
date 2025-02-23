export async function fetchFAQs() {
  try {
    const response = await fetch("http://localhost:8000/faqs");
    if (!response.ok) {
      throw new Error(
        `Server error: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching FAQs:", error.message);
    throw new Error("Failed to fetch FAQs. Please try again later.");
  }
}

export async function sendMsgToApi(message) {
  try {
    const response = await fetch(
      `http://localhost:8000/faqs/${encodeURIComponent(message)}`
    );
    if (!response.ok) {
      throw new Error(
        `Server error: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      return "No response available.";
    }

    return data[0].answer || "Sorry, I couldn't find an answer to that.";
  } catch (error) {
    console.error("Error fetching response:", error.message);
    return "An error occurred while fetching the response.";
  }
}
