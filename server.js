module.exports = ({ env }) => {
    console.log('env:', env);
    console.log(env('ADMIN_JWT_SECRET'));
    console.log(env('NGINX_URL'), env('PORT'))
    return {
  host: env('HOST','0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('NGINX_URL', 'localhost'),
  proxy: true,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'), 
    },
  },
}
};
