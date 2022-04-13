const { use } = require("express/lib/router")
const zonesSchema = require("../Model/zone")
const allUser = require("../Model/Model")

const createZones = async ( req, res ) => {
    try {
        const id = req.params.peopleId
        const allzones = new zonesSchema( req.body )
        const people = await allUser.findById( id )
        allzones.userinfo = people

        await allzones.save()
        people.zonesmainUser.push( allzones )
        await people.save()

        res.status( 201 ).json( {
            data: allzones
        })
    
    } catch ( error ) {
        res.status( 500 ).json( {
            message: error.message
        })
    }
}


module.exports = {
createZones
}