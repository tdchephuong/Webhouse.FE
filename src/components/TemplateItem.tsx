import React from 'react'

import { TTemplateItem } from './TemplateItem.type'

export const TemplateItem: React.FC<TTemplateItem> = (props: TTemplateItem) => {
  const { img_url, name, classNameImg } = props
  return (
    <>
      <img className={`w-full h-auto ${classNameImg}`} src={img_url} alt=""/>
      <p className="text-black mt-3">{name}</p>
    </>
  )
}