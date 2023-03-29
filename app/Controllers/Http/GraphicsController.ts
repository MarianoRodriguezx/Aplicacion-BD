import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'

export default class GraphicsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {
    const labels = [{ labelt: 'Campo1' }, { labelt: 'Campos 2' }]
    const data = [7, 15]

    const informacion = {
      labels,
      data,
    }

    return View.render('graphics', { labels })
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
