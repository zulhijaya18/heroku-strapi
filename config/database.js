// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', '103.55.39.44'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'ortentiv_simarkas'),
//       user: env('DATABASE_USERNAME', 'ortentiv_zulhijaya'),
//       password: env('DATABASE_PASSWORD', 'Zulhijaya123'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', 'tmp/data.db'),
    },
    useNullAsDefault: true,
    debug: false,
  },
});