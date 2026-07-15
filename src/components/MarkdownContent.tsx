import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

type Props = {
  content: string
}

export default function MarkdownContent({ content }: Props) {
  return (
    <ReactMarkdown
      components={{
        img: ({ src, alt }) => {
          if (!src) {
            return null
          }

          const imageSrc = typeof src === 'string' ? src : '/images/placeholder.jpg'
          const normalizedSrc = imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`

          return (
            <div className="my-4">
              <Image
                src={normalizedSrc}
                alt={alt || ''}
                width={800}
                height={600}
                className="rounded"
              />
            </div>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
