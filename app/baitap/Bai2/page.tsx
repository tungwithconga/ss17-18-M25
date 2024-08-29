import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: "Danh sách bài viết",
    description: "Trang hiển thị danh sách các bài viết mới nhất",
    keywords: ["bài viết", "danh sách bài viết", "tin tức"]
}

const PostListPage: React.FC = () => {
    return (
      <div>
        <h1>Danh sách bài viết</h1>
      </div>
    );
  };
export default PostListPage;
