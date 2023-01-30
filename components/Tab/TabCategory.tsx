import React from 'react'
import { Tab } from '@headlessui/react'
import { Categories } from '../../data'

const TabCategory = () => {
  return (
    <>
      <Tab.Group>
        <Tab.List className="flex justify-center text-white ">
          {Categories.map(category => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm outline-none md:py-4 md:px-6 md:text-base transition-all duration-700 ${selected
                  ? "borderGradient border-b border-[#fff7f7]"
                  : "border-b border-[#635e5e] text-[#b3b3b3] font-light "
                }`
              }
            >
              {category.title}
            </Tab>
          ))}
        </Tab.List>

      </Tab.Group>
    </>
  )
}

export default TabCategory