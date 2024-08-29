import Image from 'next/image';
import React from 'react';

const PostListPage: React.FC = () => {
  return (
    <div>
      <h1>Danh sách bài viết</h1>

      <div>
        <h2>1</h2>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Golden_tabby_and_white_kitten_n01.jpg/450px-Golden_tabby_and_white_kitten_n01.jpg"
          alt="Mô tả hình ảnh"
          width={600}  
          height={400} 
          placeholder="blur" 
        />
      </div>

      <div>
        <h2>2</h2>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Cat_Style.jpg/450px-Cat_Style.jpg"
          alt="Mô tả hình ảnh"
          width={600}
          height={400}
          placeholder="empty" 
        />
      </div>
    </div>
  );
};

export default PostListPage;
