module.exports = {
  images: {
    domains: ['pokeapi.co']
  }
}

// module.exports = {
//   async rewrites() {
//       return [
//         {
//           source: '/api/:path*',
//           destination: 'https://pokeapi.co/:path*',
//         },
//       ]
//     },
// };