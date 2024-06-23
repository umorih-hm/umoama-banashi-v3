import nextTranslate from 'next-translate-plugin';

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "placehold.jp",
      },
    ],
  },
};

export default nextTranslate(nextConfig); // Next.jsの設定オブジェクトに、多言語対応の設定を組み込む役割
