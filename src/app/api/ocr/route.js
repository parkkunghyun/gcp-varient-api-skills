export async function POST(req) {
    const formData = await req.formData();
    const file = formData.get("image");

    if (!(file instanceof Blob)) {
    return new Response(JSON.stringify({ error: "Invalid file" }), { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const blob = new Blob([buffer]);
  
    const form = new FormData();
    form.append('image', blob, file.name);
  
    const res = await fetch("http://34.58.63.44:5551/ocr", {
      method: 'POST',
      body: form,
    });
  
    const data = await res.json();

    console.log(data)
    return Response.json(data);
  }
  