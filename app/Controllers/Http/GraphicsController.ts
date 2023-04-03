import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import DataCollection from 'App/Models/Mongo/DataCollection'

/*eslint-disable */
// Aquí todo el código que no será revisado por ESLint

export default class GraphicsController {
  public async index({ }: HttpContextContract) { }

  public async gr2({ }: HttpContextContract) {
    const dtrue = await DataCollection.find({ NumPreg: "True" }).count()
    const dfalse = await DataCollection.find({ NumPreg: "False" }).count()

    const info = [
      {
        estado: 'True',
        count: dtrue
      },
      {
        estado: 'False',
        count: dfalse
      }
    ]

    return View.render('graphic2', { info })
  }

  public async gr3({}: HttpContextContract) {
    
    const dts = await DataCollection.aggregate([ {"$group" : {_id:"$FarmLoc", count:{$sum:1}}} ])

    return View.render('graphic3', { dts }) 
  }

  public async gr4({}: HttpContextContract) {
    
    const dts = await DataCollection.aggregate([ {"$group" : {_id:"$BredREas", count:{$sum:1}}} ])

    //console.log(dts)
    return View.render('graphic4', { dts }) }

  public async gr5({}: HttpContextContract) { 
    const dts = await DataCollection.aggregate([ {"$group" : {_id:"$Brd", count:{$sum:1}}} ])

    return View.render('graphic5', { dts }) 
   }

  public async gr6({}: HttpContextContract) { 
    const dts = await DataCollection.aggregate([ {"$group" : {_id:"$Tech", count:{$sum:1}}} ])

    return View.render('graphic6', { dts }) 
   }

  public async gr7({}: HttpContextContract) {
    
    const dts = await DataCollection.aggregate([ {"$group" : {_id:"$Evweek", count:{$sum:1}}}, { $sort: { "Evweek": 1 } } ])

    return View.render('graphic7', { dts }) 
  }
  
  public async gr8({}: HttpContextContract) { 
    
    const dts = await DataCollection.aggregate([ {"$group" : {_id:"$Evsirebreed", count:{$sum:1}}}, { $sort: { "Evsirebreed": 1 } } ])

    console.log(dts)

    return View.render('graphic8', { dts }) }

  public async gr9({}: HttpContextContract) { return View.render('graphic9') }

  public async create({ }: HttpContextContract) {

    const enero = await DataCollection.find({ Date: { $gte : '2019-01-01' , $lte : '2019-01-31'} }).count()
    const febrero = await DataCollection.find({ Date: { $gte : '2019-02-01' , $lte : '2019-02-28'} }).count()
    const marzo = await DataCollection.find({ Date: { $gte : '2019-03-01' , $lte : '2019-03-31'} }).count()
    const abril = await DataCollection.find({ Date: { $gte : '2019-04-01' , $lte : '2019-04-30'} }).count()
    const mayo = await DataCollection.find({ Date: { $gte : '2019-05-01' , $lte : '2019-05-31'} }).count()
    const junio = await DataCollection.find({ Date: { $gte : '2019-06-01' , $lte : '2019-06-30'} }).count()
    const julio = await DataCollection.find({ Date: { $gte : '2019-07-01' , $lte : '2019-07-31'} }).count()
    const agosto = await DataCollection.find({ Date: { $gte : '2019-08-01' , $lte : '2019-08-31'} }).count()
    const septiembre = await DataCollection.find({ Date: { $gte : '2019-09-01' , $lte : '2019-09-31'} }).count()
    const octubre = await DataCollection.find({ Date: { $gte : '2019-10-01' , $lte : '2019-10-31'} }).count()
    const noviembre = await DataCollection.find({ Date: { $gte : '2019-11-01' , $lte : '2019-11-31'} }).count()
    const diciembre = await DataCollection.find({ Date: { $gte : '2019-12-01' , $lte : '2019-12-31'} }).count()

    //console.log(data2)
    const info = [
      {
        mes: 'Enero',
        count: enero
      },
      {
        mes: 'Febrero',
        count: febrero
      },
      {
        mes: 'Marzo',
        count: marzo
      },
      {
        mes: 'Abril',
        count: abril
      },
      {
        mes: 'Mayo',
        count: mayo
      },
      {
        mes: 'Junio',
        count: junio
      },
      {
        mes: 'Julio',
        count: julio
      },
      {
        mes: 'Agosto',
        count: agosto
      },
      {
        mes: 'Septiembre',
        count: septiembre
      },
      {
        mes: 'Octubre',
        count: octubre
      },
      {
        mes: 'Noviembre',
        count: noviembre
      },
      {
        mes: 'Diciembre',
        count: diciembre
      }
    ]
    /* const info = {
      labels, data
    } */

    return View.render('graphics', { info })
  }

  public async store({ }: HttpContextContract) { }

  public async show({ }: HttpContextContract) { }

  public async edit({ }: HttpContextContract) { }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
/*eslint-enable */
