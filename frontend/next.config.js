/* video about env file : https://github.com/bmvantunes/youtube-2020-april-nextjs-part10
 *
 */
module.exports = {
    serverRuntimeConfig: {
      // Will only be available on the server side

      //MY_SECRET: process.env.MY_SECRET,
    },
    publicRuntimeConfig: {
      // Will be available on both server and client

      PROJECT_NAME: 'MERN Framework',
      API_ENDPOINT: 'http://localhost:8000/api',
    },
  };