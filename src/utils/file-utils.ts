export async function fileExists(path: string): Promise<boolean> {
  try { await fetch('file://' + path); return true; }
  catch { return false; }
}
