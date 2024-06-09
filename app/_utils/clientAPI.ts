import axios from "axios";
import Guess from "../_models/Guess";

const rootURL = "/api/v1";

export async function checkGuess(make: string, model: string): Promise<Guess | null> {
  const searchParams = new URLSearchParams({ make, model });
  try {
    const result = await axios.get(rootURL + "/checkGuess", { params: searchParams });
    return result.data;
  } catch (error: any) {
    alert("Error fetching results from server.\n" + String(error));
    return null;
  }
}
