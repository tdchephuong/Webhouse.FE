import classNames from 'classnames'
import React, { useState } from 'react'

import { TemplateItem } from 'components/TemplateItem'

import template_11 from 'assets/img/template/template_11.jpg'
import template_14 from 'assets/img/template/template_14.jpg'
import template_6 from 'assets/img/template/template_6.jpg'
import template_13 from 'assets/img/template/template_13.jpg'
import template_10 from 'assets/img/template/template_10.jpg'
import template_2 from 'assets/img/template/template_2.jpg'
import template_3 from 'assets/img/template/template_3.jpg'
import template_4 from 'assets/img/template/template_4.jpg'
import template_5 from 'assets/img/template/template_5.jpg'
import template_12 from 'assets/img/template/template_12.jpg'
import template_8 from 'assets/img/template/template_8.jpg'
import template_20 from 'assets/img/template/template_20.jpg'
import template_15 from 'assets/img/template/template_15.jpg'
import template_17 from 'assets/img/template/template_17.jpg'
import template_18 from 'assets/img/template/template_18.jpg'
import template_21 from 'assets/img/template/template_21.jpg'

import './Templates.css'

export const Templates: React.FC = () => {
  const [ activeTemplateType, setActiveTemplateType ] = useState(0)
  const firstTemplateTypeClassName = (value: number) => classNames('flex-initial cursor-pointer mr-3 py-3', {
    'text-blue-500 border-b-2 border-blue-500': activeTemplateType === value
  })
  const middleTemplateTypeClassName =  (value: number) => classNames('flex-initial cursor-pointer mx-3 py-3', {
    'text-blue-500 border-b-2 border-blue-500': activeTemplateType === value
  })
  const lastTemplateTypeClassName =  (value: number) => classNames('flex-initial cursor-pointer ml-3 py-3', {
    'text-blue-500 border-b-2 border-blue-500': activeTemplateType === value
  })
  const updateTemplateType = (value: number) => {
    setActiveTemplateType(value)
  }
  return (
    <div className="bg-default pb-24">
      <div className="bg-white pt-16">
        <div className="container mx-auto">
          <div className="text-4xl text-black template-title">
            Pick the Website Template You Love
          </div>
          <div className="mt-9 flex">
            <div className={firstTemplateTypeClassName(0)} onClick={() => updateTemplateType(0)}>All</div>
            <div className={middleTemplateTypeClassName(1)} onClick={() => updateTemplateType(1)}>Business</div>
            <div className={middleTemplateTypeClassName(2)} onClick={() => updateTemplateType(2)}>Services</div>
            <div className={middleTemplateTypeClassName(3)} onClick={() => updateTemplateType(3)}>Health</div>
            <div className={middleTemplateTypeClassName(4)} onClick={() => updateTemplateType(4)}>Beauty</div>
            <div className={middleTemplateTypeClassName(5)} onClick={() => updateTemplateType(5)}>Fashion</div>
            <div className={middleTemplateTypeClassName(6)} onClick={() => updateTemplateType(6)}>Landing Pages</div>
            <div className={middleTemplateTypeClassName(7)} onClick={() => updateTemplateType(7)}>Landing Pages</div>
            <div className={lastTemplateTypeClassName(8)} onClick={() => updateTemplateType(8)}>...</div>
          </div>
        </div>
        <div className="border-t border-default"></div>
      </div>
      <div className="container mx-auto">
        <div className="grid gap-x-7 gap-y-12 grid-cols-4 pt-12">
          <div>
            <TemplateItem img_url={template_11} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_14} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_6} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_13} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_10} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_2} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_3} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_4} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_5} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_12} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_8} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_20} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_15} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_17} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_18} name={'Create 01 name'} />
          </div>
          <div>
            <TemplateItem img_url={template_21} name={'Create 01 name'} />
          </div>
        </div>
      </div>
    </div>
  )
}