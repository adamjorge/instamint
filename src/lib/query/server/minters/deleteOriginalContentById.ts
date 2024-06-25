import prisma from "@/lib/db"

export async function deleteOriginalContentById(contentId: number) {
  try {
    const updatedContent = await prisma.originalContent.delete({
      where: {
        id: contentId
      }
    })

    return updatedContent
  } catch (error) {
    throw new Error("Failed to update original content")
  }
}
