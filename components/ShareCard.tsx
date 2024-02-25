"use client"

import { 
  FacebookShareButton, FacebookIcon,  
  TwitterShareButton,TwitterIcon, 
  LinkedinShareButton, LinkedinIcon,
  } from 'next-share'

interface Props {
  url: string;
  quote: string
}

const ShareCard = ({ url, quote }: Props) => {
  return (
    <div className="w-full justify-center gap-4">
      <FacebookShareButton
        url={url}
        quote={quote}
        hashtag={'#nextshare'}
        
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={quote}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        title={quote}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  )
}

export default ShareCard