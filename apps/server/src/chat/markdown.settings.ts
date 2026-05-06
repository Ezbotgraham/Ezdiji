export interface MarkdownSettings {
  allowCodeBlocks: boolean
  allowInlineCode: boolean
  allowEmbeds: boolean
  allowLinks: boolean
}

export const DEFAULT_MARKDOWN_SETTINGS: MarkdownSettings = {
  allowCodeBlocks: true,
  allowInlineCode: true,
  allowEmbeds: true,
  allowLinks: true,
}
