const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByFCks-L2CzaZwcNeur-Fy-YxXwprUyUOvw&s",
      },
    ],
  },
};
//* nextConfig.js'deki Image'i kullanacaksak dışarıdan aldığımız bütün resimlerin yollarını buraya yazmalıyız.
export default nextConfig;
