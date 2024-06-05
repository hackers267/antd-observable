import { from, map, of, pipe } from "rxjs";
import { downloadFile, getFileName } from "./file";

/**
 * 下载文件的选项接口。
 *
 * 该接口定义了下载文件时可用的一系列选项，包括文件名、默认文件名、回调函数和文件类型。
 */
export interface DownloadFileOpts {
  /**
   * 指定下载的文件名。
   *
   * 如果未指定，则文件名将根据实际情况确定。
   */
  fileName?: string;
  /**
   * 指定默认的文件名。
   *
   * 当没有指定文件名时，可以使用默认文件名。
   */
  defaultFileName?: string;
  /**
   * 下载完成后的回调函数。
   *
   * 函数接收一个字符串参数，该参数通常为下载出错时后台的返回值。
   */
  cb?: (value: string) => void;
  /**
   * 指定文件的类型。
   *
   * 可以是一个字符串数组，符合数组中的字符串会被认为是文件下载，默认为['excel', 'zip', 'officedocument', 'octet-stream']。
   */
  fileType?: string[];
}

const fileTypes = ["excel", "zip", "officedocument", "octet-stream"];

/**
 * 下载文件的功能函数。
 *
 * 该函数提供了一个灵活的方式来处理不同类型的文件下载。它支持直接下载二进制数据（如图片或音频文件）
 * 以及处理文本类型的文件（如JSON）。对于文本类型的文件，它会先尝试解析文件内容，并调用错误回调函数。
 *
 * @param opt 下载文件的选项，包括默认文件名、错误回调和文件类型定义。
 * @returns 返回一个Observable，用于处理文件下载的过程。
 */
export function download(opt: DownloadFileOpts): any {
  // 解构并设置默认值 for 下载选项中的参数
  const {
    defaultFileName = "未命名",
    cb = (value: string) => console.error("下载文件时发生错误:", value),
    fileType = fileTypes,
  } = opt ?? {};

  return pipe(
    map((x: any) => {
      const blob = x.data;
      const responseFileName = getFileName(x, defaultFileName);
      const fileName = opt.fileName ?? responseFileName;
      const type = blob.type;

      // 判断文件类型并采取相应的下载处理方式
      if (isFile(type)) {
        // 如果是支持的文件类型，则直接下载文件
        return from(downloadFile({ fileName, blob }));
      }
      if (type.includes("json")) {
        // 如果是JSON类型，则尝试解析JSON并调用错误回调
        return from<string>(blob.text()).pipe(
          map((item: string) => {
            cb(item);
            return { download: "error" };
          })
        );
      }
      // 对于不支持的文件类型，返回一个错误提示
      return of({ download: "error" });
    })
  );

  /**
   * 判断给定的文件类型是否在支持的文件类型列表中。
   *
   * @param types 文件类型字符串
   * @returns 如果文件类型支持则返回true，否则返回false。
   */
  function isFile(types: string) {
    return fileType.some((ext) => types.includes(ext));
  }
}
