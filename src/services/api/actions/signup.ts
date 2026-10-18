"use server"
import { RegisterData } from "@/services/types/RegisterData";

export async function signup(values: RegisterData) {
  try {
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json',
      },
    }
    )
    let data = await res.json();
    return res.ok;
  } catch (err) {
    console.log(err);
  }
}