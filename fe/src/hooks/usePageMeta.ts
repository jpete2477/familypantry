import { useEffect } from 'react'
import { SITE_NAME } from '../lib/siteConfig'

export function usePageMeta(title: string, description: string): void {
  useEffect(() => {
    document.title = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [title, description])
}
