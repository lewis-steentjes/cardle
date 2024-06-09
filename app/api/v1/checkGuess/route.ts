import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import Guess from "@/app/_models/Guess";

export async function GET(req: NextRequest) {
  const makeAnswer = "toyota";
  const modelAnswer = "celica";

  const searchParams = req.nextUrl.searchParams;
  const make = searchParams.get("make")?.toLowerCase();
  const model = searchParams.get("model")?.toLowerCase();
  const makeIsCorrect = make === makeAnswer;
  const modelIsCorrect = model === modelAnswer;

  if (!make || !model) {
    // error, bad input
    console.log("invalid API call, ", searchParams);
    return NextResponse.json(
      { error: "Internal Server Error, API call requires both 'make' and 'model'. " },
      { status: 500 },
    );
  }
  const guessResult: Guess = {
    make,
    model,
    makeIsCorrect,
    modelIsCorrect,
  };

  return NextResponse.json(guessResult);
}
