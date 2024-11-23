import { markdownToHtml } from '@/utils/remark'
import React from 'react'


interface DescriptionRendererProps {
    markdown: string
}
export const DescriptionRenderer = async ({markdown}: DescriptionRendererProps ) => {
    const htmlContent = await markdownToHtml(markdown)
    return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      className="prose min-w-full py-4" // Optional: Use Tailwind CSS for better styling
    />
  )
}
