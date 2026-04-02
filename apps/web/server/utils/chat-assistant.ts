import type { ChatCitationRecord, ChatMessageRecord } from "./chat-store"

interface AssistantReply {
  content: string
  citations: ChatCitationRecord[]
}

export function generateAssistantReply(input: {
  tenantId: string
  userMessage: string
  history: ChatMessageRecord[]
}): AssistantReply {
  const trimmedMessage = input.userMessage.trim()
  const recentTurns = input.history.slice(-3)
  const contextSummary = recentTurns
    .map(message => `${message.role}: ${message.content.trim()}`)
    .join(" | ")
  const recentAttachedFiles = recentTurns
    .flatMap(message => message.attached_files)
    .filter((file, index, files) => files.findIndex(entry => entry.file_id === file.file_id) === index)
    .slice(-4)
  const attachmentSummary = recentAttachedFiles.length
    ? recentAttachedFiles
      .map(file => `${file.original_name} (${file.content_type}, ${file.size_bytes} bytes)`)
      .join(" | ")
    : ""

  const content = [
    `Tenant ${input.tenantId} assistant stub response.`,
    `Received: "${trimmedMessage}".`,
    recentTurns.length
      ? `Recent session context: ${contextSummary}.`
      : "No earlier session context was stored for this conversation.",
    recentAttachedFiles.length
      ? `Recent attached file context: ${attachmentSummary}.`
      : "No attached session files were linked to the recent turns.",
    "This deterministic placeholder preserves the chat contract until the Bedrock adapter is wired in.",
  ].join(" ")

  return {
    content,
    citations: [
      {
        id: crypto.randomUUID(),
        label: `${input.tenantId} local stub source`,
        uri: `tenant-kb://${input.tenantId}/local-stub`,
      },
    ],
  }
}
