import React from 'react'

import BashTabs from '@site/src/components/generic/bashTabs'

export default () => {

  return <div class={`                     
        px-6                
        flex 
        justify-center`}>
    <div class={`          
          justify-center      
          align-middle                
          max-w-xl
        `}>
      <h2 className='text-4xl'>{`Quick start`}</h2>
      <p className={``}>
        <BashTabs npm={`npx clinext new --quick\nnpm run start`} />
      </p>
    </div>
  </div>
}