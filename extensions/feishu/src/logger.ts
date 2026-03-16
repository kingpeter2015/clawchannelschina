/**
 * 飞书插件日志工具
 *
 * 从 @clawchannelschina/shared 重新导出，保持一致
 */

export { createLogger, type Logger, type LogLevel, type LoggerOptions } from "@clawchannelschina/shared";

import { createLogger } from "@clawchannelschina/shared";

/** 默认飞书日志器 */
export const feishuLogger = createLogger("feishu");
