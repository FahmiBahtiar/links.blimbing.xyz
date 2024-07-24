const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '*',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: 'https://blimbing.xyz',
        permanent: true,
      },
      {
        source: '/ivao',
        destination: 'https://ivao.aero/Member.aspx?ID=704291',
        permanent: true,
      },
      {
        source: '/discordapp',
        destination: 'https://discord.gg/G4gzTTadbR',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/fahmi-bahtiar-an',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/fahmi_bahtiar_a.n',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/FahmiBahtiar',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/user/31urnjrljaimmmf52sealktmdz3i/',
        permanent: true,
      },
      {
        source: '/estetikid',
        destination: 'https://discord.gg/G4gzTTadbR',
        permanent: true,
      },
    ];
  }, 
  trailingSlash: true // Tambahkan opsi trailingSlash di sini
}; 
