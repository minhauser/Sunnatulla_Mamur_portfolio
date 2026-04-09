import { readFile } from "node:fs/promises";
import path from "node:path";

function contentTypeForExt(ext: string) {
  switch (ext.toLowerCase()) {
    case ".pdf":
      return "application/pdf";
    case ".pptx":
      return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    default:
      return "application/octet-stream";
  }
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ path?: string[] }> }
) {
  const { path: rawParts } = await context.params;
  const parts = rawParts ?? [];
  if (parts.length === 0) {
    return new Response("Not found", { status: 404 });
  }

  const decodedParts = parts.map((p) => decodeURIComponent(p));
  const projectsDir = path.resolve(process.cwd(), "projects");
  const requestedPath = path.resolve(projectsDir, ...decodedParts);

  if (!requestedPath.startsWith(projectsDir + path.sep)) {
    return new Response("Not found", { status: 404 });
  }

  let file: Buffer;
  try {
    file = await readFile(requestedPath);
  } catch {
    return new Response("Not found", { status: 404 });
  }

  const ext = path.extname(requestedPath);
  const contentType = contentTypeForExt(ext);
  const filename = path.basename(requestedPath);
  const body = new Uint8Array(file);

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `inline; filename="${filename}"`,
      "Cache-Control": "public, max-age=86400"
    }
  });
}

