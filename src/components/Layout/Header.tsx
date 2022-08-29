import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import Logo from '../UI/Logo';

const links = [
  { content: 'about', path: '/about' },
  { content: 'my work', path: '/work' },
  { content: 'contact', path: '/contact' },
];
export default function Header() {
  return (
    <div className="flex p-5">
      <Logo className="flex-1" />
      <ul className="flex gap-x-5 mx-5">
        {links.map((link) => (
          <li>
            <Link to={link.path}>{link.content}</Link>
          </li>
        ))}
      </ul>

      {/* <Button content='see more' className='text-base'/> */}
    </div>
  );
}
