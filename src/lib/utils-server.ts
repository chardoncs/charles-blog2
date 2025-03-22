export async function getFileResponse(path: string, mime: string): Promise<Response> {
  const file = Bun.file(path);

  return new Response(await file.bytes(), {
    headers: {
      "Content-Type": mime,
    },
  });
}
