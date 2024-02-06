import React from 'react'
// import LogoAnimated from '../logo/animated'
import Link from '@docusaurus/Link'

export default ({noLink = false,
  align = 'center'}) =>  <div class={`                
flex
justify-center                 
`}><div class={`
          ${align === 'center' ? 'justify-center text-center' : ''}          
          pt-8     
          max-w-4xl
        `}>
          <h2 className='text-4xl'>
            {`CliNext Manifest 🐻`} <i></i>
          </h2>         
          <p className='text-lg'>
            The CliNext Framework is built around a set of simple requirements:
            </p>
            <ul className={`
            ${align === 'center' ? 'list-none' : 'list-decimal'}          
            text-lg 
            space-y-2
            `}>            
            <li className=''>A feature can be applied to multiple models</li>
            <li className=''>A feature can have multiple models</li>
            <li className=''>A model can be pollinated by multiple features</li>
            <li className=''>A model belongs to a feature</li>
            <li className=''>A CliNext app is a feature itself</li>
            <li className=''>A server engine is required for doing the actual heavy server work, ie routing, database and files management, etc.</li>
            <li className=''>A server engine chooses to implement partially or fully Engine APIs</li>
            <li className=''>A CliNext app can switch between server engines as long as they implement the same set of Engine APIs</li>
            <li className=''>A feature declares a list of required Engine APIs it needs to work</li>
            </ul>
          {!noLink && <p>
            <Link
              className="button button--secondary button--md"
              to="/docs/concepts/philosophy">
              Read more about CliNext philosophy
            </Link>
          </p>}
        </div>
        </div>
     