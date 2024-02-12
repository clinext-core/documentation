import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'

export default ({ Svg, title, description }) => {
  const { isDarkTheme } = useColorMode()

  return (
    <div className={'col mb-16 md:mb-0'}>
      <div className="text-center ">
        <Svg
          fill={`${isDarkTheme ? 'white' : 'black'}`}
          className={`                         
          px-10
          w-[160px]
          h-[120px]
          md:h-[160px]`}
          role="img" />
      </div>
      <div className="text-center">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

