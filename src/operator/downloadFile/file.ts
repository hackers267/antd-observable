/**
 * 下载文件
 * @param fileName
 * @param blob
 */
export function downloadFile({
  fileName,
  blob,
}: {
  fileName: string;
  blob: Blob;
}) {
  const downloadLink = document.createElement('a');
  downloadLink.download = fileName;
  downloadLink.style.display = 'none';
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.click();
  return 'download';
}

export function getFileName(response: Response,fileName = '未命名'): string {
  const headers = new Headers(response.headers);
  const text = headers.get('content-disposition');
  let name = text?.split('=')?.[1] ?? fileName;
  name = name.replaceAll(`"`, '');
  return decodeURIComponent(name);
}
