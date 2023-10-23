import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'

const app = new Hono()


app.use('*', poweredBy())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// GET collection index
app.get('/api/todos', () => new Response('Todos Index!'))

// GET item
app.get('/api/todos/:id', ({ params }) => new Response(`Todo #${params.id}`))

// POST to the collection (we'll use async here)
app.post('/api/todos', async (c) => {
  const content = await c.json({ type: 'json' })

  return new Response('Creating Todo: ' + JSON.stringify(content))
})

// 404 for everything else
app.all('*', () => new Response('Not Found.', { status: 404 }))

export default app 
