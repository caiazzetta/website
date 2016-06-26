module.exports = function (grunt) {

  /*
   * Grunt tasks
   */

  grunt.loadNpmTasks("grunt-aws");

  /*
   * Config
   */

  grunt.initConfig({

    /*
     * Deploy
     */

    s3: {
      options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      },
      staging: {
        options: {
          bucket: "staging.iazzetta.eu"
        },
        cwd: "src/",
        src: "**"
      },
      production: {
        options: {
          bucket: "iazzetta.eu"
        },
        cwd: "src/",
        src: "**"
      }
    }

  });

};
