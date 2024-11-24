import { Description } from '@/components/description/postex-description'
import { PostExSearcher } from '@/components/searchers/postex-searcher'
import React from 'react'
import { postExMarkdown } from '@/data/markdowns/postex'
import PostExBannerImage from '@/public/images/postex/banner.webp'
const PostExSearch = () => {
  return (
    <div className='px-4 md:px-0'>
        <PostExSearcher courierName="PostEx"/>
        <Description markdown={postExMarkdown} headerImage={PostExBannerImage} headerTitle="POSTEx"/>
    </div>
  )
}

export default PostExSearch