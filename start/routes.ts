/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/about-me', async ({ view }) => {
  return view.render('about_me')
})

Route.get('/graphic-2', 'GraphicsController.gr2')

Route.get('/graphic-3', 'GraphicsController.gr3')
Route.get('/graphic-4', 'GraphicsController.gr4')
Route.get('/graphic-5', 'GraphicsController.gr5')
Route.get('/graphic-6', 'GraphicsController.gr6')
Route.get('/graphic-7', 'GraphicsController.gr7')
Route.get('/graphic-8', 'GraphicsController.gr8')
Route.get('/graphic-9', 'GraphicsController.gr9')

Route.resource('/graphics', 'GraphicsController')
