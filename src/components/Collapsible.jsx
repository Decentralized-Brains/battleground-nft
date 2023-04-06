import classNames from 'classnames';
import React, { useState } from 'react';
import { BsArrowsCollapse, BsArrowsExpand } from 'react-icons/bs';

export default function Collapsible({ title, content, className }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={classNames('flex flex-col mt-8', className)}>
      <div
        className={classNames('flex items-center gap-3 cursor-pointer', {
          'text-primary': isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          {isOpen ? (
            <BsArrowsCollapse size={20} />
          ) : (
            <BsArrowsExpand size={20} />
          )}
        </div>

        <h3 className='font-life font-semibold text-lg italic tracking-[0.2em]'>
          {title}
        </h3>
      </div>

      <div
        className={classNames('overflow-hidden mt-2 text-gray-400 px-8', {
          'h-0': !isOpen,
          'h-fit': isOpen,
        })}
      >
        {content}
      </div>
    </div>
  );
}
