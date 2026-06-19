import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // 1. A standard Web API data structure (holds the data). Route Handlers, Middleware. ✅ Yes, you must have the request object to access it.
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders);

  // 2. A Next.js utility function (fetches the data). Server Components, Server Actions, Route Handlers. ❌ No, it reads from Next.js's global server context. Throw error in client side.
  const headerlist = await headers();
  console.log(headerlist.get("authorization"), headerlist.get("cookie"));
  // console.log(headerlist.entries().toArray());

  // 3.
  console.log(request.headers.get("authorization"));
  console.log(request.headers.get("cookie"));
  console.log(request.cookies.get("token"));

  // return new Response("Profile API Data"); // plain text
  // return new Response("<h1>Profile API Data</h1>"); // content-type: text/plain;charset=UTF-8

  return new Response("<h1>Profile API Data</h1>", {
    headers: { "Content-Type": "text/html" },
  }); // content-type: text/html
}

/*
 Here is the very simple difference between the three ways you are handling headers in your code:

### 1. `new Headers(request.headers)` (The "Unnecessary Copy")
* **What it is:** You are taking the existing headers and wrapping them in a brand new `Headers` box.
* **Simple meaning:** It’s like photocopying a document you already have. 
* **Should you use it?** **No.** `request.headers` is *already* a `Headers` object. Wrapping it in `new Headers()` just creates a duplicate for no reason. You can safely delete this.

### 2. `await headers()` (The "Telepath")
* **What it is:** A special Next.js magic function that reaches into the server's background memory to grab the current request's headers.
* **Simple meaning:** It doesn't need the `request` object to work. It just "knows" what the current request is.
* **When to use it:** Use this in **Server Components (`page.tsx`)** or **Server Actions**, because those functions *do not* receive a `request` object as a parameter. This is your only way to get headers there.

### 3. `request.headers` & `request.cookies` (The "Direct Approach")
* **What it is:** Reading directly from the `request` object that Next.js passed into your Route Handler.
* **Simple meaning:** You were handed the `request`, so you just look inside it directly. 
* **When to use it:** **Always use this inside Route Handlers (`route.ts`).** It is the fastest, most standard way. Plus, Next.js gives you a bonus `request.cookies` method, which automatically parses cookies for you (so you don't have to manually read the raw `"cookie"` header string).

---

### 💡 The Golden Rule:
* **Inside a Route Handler (`route.ts`)?** 👉 Use **`request.headers`** and **`request.cookies`** (Method 3).
* **Inside a Server Component (`page.tsx`) or Server Action?** 👉 Use **`await headers()`** (Method 2).
* **Method 1?** 👉 Just ignore it and delete it!
*/
