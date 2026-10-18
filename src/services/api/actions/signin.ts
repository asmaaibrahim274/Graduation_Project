"use server"
import { LoginData } from "@/services/types/LoginData";
import { cookies } from "next/headers";

export async function signin(values: LoginData) {
  try {
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json',
      },
    }
    )
    let data = await res.json();
    // console.log(data);
    
    let cookie = await cookies();
    cookie.set("userToken", data.token);
    return res.ok;
  } catch (err) {
    console.log(err);
  }
}