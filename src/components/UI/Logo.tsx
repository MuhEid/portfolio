import React from 'react';

type LogoProps = {
  className: string;
};
export default function Logo(props: LogoProps) {
  return <div className={`${props.className}`}>Logo</div>;
}
