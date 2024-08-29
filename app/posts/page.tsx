
import Image from 'next/image';
import React from 'react';
const posts = [
  {
    id: 1,
    title: 'Accusamus beatae ad facilis',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    id: 2,
    title: 'Reprehenderit est deserunt',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    id: 3,
    title: 'Officia porro iure quia',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
  },
  {
    id: 4,
    title: 'Qui eius qui autem sed',
    thumbnailUrl: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    id: 5,
    title: 'Epudiandae iusto deleniti',
    thumbnailUrl: 'https://via.placeholder.com/150/19807b',
  },
  {
    id: 6,
    title: 'Iusto sunt nobis quasi veritatis',
    thumbnailUrl: 'https://via.placeholder.com/600/ffff33',
  },
];

const PostListPage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Danh sách bài viết</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
            <Image
              src={post.thumbnailUrl}
              alt={post.title}
              width={150}
              height={150}
              style={{ borderRadius: '8px' }}
              placeholder="blur"
              blurDataURL="/images/placeholder.png" 
            />
            <h2 style={{ fontSize: '16px', marginTop: '10px' }}>{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostListPage;
