const player = require('../config/iptv-config')


class IptvController {
    getAccountInfo = (req, res) =>{
      player
          .getAccountInfo()
          .then(response => res.json(response))

    }

    getVODInfo = (req, res) => {
        const vodId = req.params.vodId;
        //11927
        player
            .getVODInfo(vodId)
            .then((response) => res.json(response))
    }

    getVODStreamCategories = (req, res) => {
        player
            .getVODStreamCategories()
            .then((response) => res.json(response));
    }

getVODStreams = (req, res) =>{
    const categoryId = req.params.categoryId
    player
        .getVODStreams(categoryId)
        .then((response) => res.json(response)),
         console.log('api/filmes called!');}

         
getAllEPGLiveStreams = (req, res) =>{
    const Id = req.params.Id;
    player
        .getAllEPGLiveStreams(Id)
        .then((response) => res.json(response));
}
        


}

module.exports = new IptvController()