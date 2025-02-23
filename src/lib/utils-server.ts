export async function getFileResponse(path: string, mime: string): Promise<Response> {
  const file = Bun.file(path)

  return new Response(await (mime.startsWith("text/") ? file.text() : file.bytes()), {
    headers: {
      "Content-Type": mime,
    },
  })
}
