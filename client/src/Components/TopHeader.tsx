import React, { useState } from 'react';
import dynamic from "next/dynamic";

const TopHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className='topheader'>
      <span>Join Tripma today and save up to 20% on your flight using code TRAVEL at checkout. Promotion valid for new users only.</span>
      <span id='exit' onClick={() => setIsVisible(false)}>X</span>
    </div>
  );
}

// export default TopHeader;
export default dynamic (() => Promise.resolve(TopHeader), {ssr: false})
