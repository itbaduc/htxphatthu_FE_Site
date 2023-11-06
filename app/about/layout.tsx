'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

import Button from '@/components/Button';
import { ABOUT_BUTTON_CONTENT } from '@/constants/common';
import { AboutCategories } from '@/types';

const AboutLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname()

  const handleButtonClick = (code: string) => {
    router.push(`/about/${code.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen min-w-full">
      <div className="custom-scrollbar mb-[30px] flex w-full space-x-[5px] overflow-y-scroll">
        {ABOUT_BUTTON_CONTENT.map((item: AboutCategories) => (
          <div className="min-w-[186px] flex-1">
            <Button
              size="md"
              variant="image"
              image={item.image}
              borderRadius="normal"
              fullWidth
              isActive={pathname.includes(item.code.toString().toLocaleLowerCase())}
              onClick={() => handleButtonClick(item.code.toString())}
            >
              {item.label}
            </Button>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default AboutLayout;
