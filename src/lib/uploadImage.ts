export async function uploadAdminImage(file: File, _prefix = "img"): Promise<string> {
  console.log("Upload desativado na versão estática:", file.name);
  // Na versão estática, apenas criamos uma URL temporária para visualização local
  return URL.createObjectURL(file);
}
