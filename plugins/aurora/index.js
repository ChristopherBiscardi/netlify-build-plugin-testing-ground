module.exports = (conf) => {
    return {
      name: 'aurora',
      onInit: (args) => {
        console.log("🚀")
        console.log(conf, args)
      }
    }
  }
  
