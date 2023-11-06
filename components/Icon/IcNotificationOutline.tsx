'use client';

import React from 'react';

import { TIcon } from '@/types';

const IcNotificationOutline = ({ size, color }: TIcon): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5206 13.2155L15.7206 11.4055V6.94551C15.7445 5.28933 15.1684 3.68042 14.0987 2.41585C13.0289 1.15127 11.5378 0.316445 9.90056 0.0655095C8.95037 -0.0596234 7.98442 0.0193244 7.06717 0.297085C6.14991 0.574846 5.30243 1.04503 4.58129 1.67627C3.86014 2.30751 3.28191 3.08529 2.88517 3.9577C2.48843 4.83012 2.28231 5.77712 2.28056 6.73551V11.4055L0.480561 13.2155C0.254467 13.4454 0.101145 13.7368 0.0397616 14.0533C-0.0216216 14.3698 0.0116576 14.6974 0.135439 14.9952C0.25922 15.2929 0.468012 15.5475 0.735712 15.7272C1.00341 15.9069 1.31814 16.0037 1.64056 16.0055H5.00056V16.3455C5.04727 17.3607 5.49451 18.316 6.24429 19.002C6.99406 19.6881 7.98521 20.0489 9.00056 20.0055C10.0159 20.0489 11.0071 19.6881 11.7568 19.002C12.5066 18.316 12.9538 17.3607 13.0006 16.3455V16.0055H16.3606C16.683 16.0037 16.9977 15.9069 17.2654 15.7272C17.5331 15.5475 17.7419 15.2929 17.8657 14.9952C17.9895 14.6974 18.0227 14.3698 17.9614 14.0533C17.9 13.7368 17.7467 13.4454 17.5206 13.2155ZM11.0006 16.3455C10.9451 16.8265 10.7062 17.2676 10.3336 17.5768C9.96106 17.886 9.48354 18.0396 9.00056 18.0055C8.51758 18.0396 8.04006 17.886 7.66749 17.5768C7.29492 17.2676 7.05602 16.8265 7.00056 16.3455V16.0055H11.0006V16.3455ZM2.51056 14.0055L3.69056 12.8255C3.87773 12.6395 4.02622 12.4182 4.12748 12.1745C4.22874 11.9308 4.28077 11.6694 4.28056 11.4055V6.73551C4.28111 6.06091 4.42594 5.39423 4.70535 4.78022C4.98477 4.16621 5.39228 3.61906 5.90056 3.17551C6.40198 2.72119 6.99613 2.38126 7.6419 2.17924C8.28767 1.97722 8.96962 1.91795 9.64056 2.00551C10.797 2.19329 11.8468 2.79252 12.5965 3.69289C13.3461 4.59326 13.7453 5.73415 13.7206 6.90551V11.4055C13.719 11.6687 13.7695 11.9296 13.869 12.1733C13.9685 12.417 14.1152 12.6386 14.3006 12.8255L15.4906 14.0055H2.51056Z"
        fill={color}
      />
    </svg>
  );
};

export default IcNotificationOutline;
