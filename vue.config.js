module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @use "@/assets/scss" as global;
        `
      }
    }
  }
};