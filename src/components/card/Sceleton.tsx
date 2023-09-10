import ContentLoader from 'react-content-loader';

const Sceleton = () => (
  <ContentLoader
    speed={2}
    width={700}
    height={300}
    viewBox="0 0 700 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="10" y="48" rx="0" ry="0" width="250" height="250" />
    <rect x="280" y="48" rx="0" ry="0" width="70" height="10" />
    <rect x="280" y="68" rx="0" ry="0" width="250" height="16" />
    <rect x="280" y="95" rx="0" ry="0" width="145" height="14" />
    <rect x="280" y="115" rx="0" ry="0" width="120" height="8" />
    <rect x="280" y="133" rx="0" ry="0" width="85" height="20" />
    <rect x="280" y="175" rx="0" ry="0" width="420" height="100" />
  </ContentLoader>
);

export default Sceleton;
