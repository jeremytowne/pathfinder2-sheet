import app from './app'

const port = 3005
const server = app.listen(port, () => process.stdout.write(`Server listening on port ${port}!`))

function gracefulShutdown() {
  process.stdout.write('Received kill signal, shutting down...\n')
  server.close(() => {
    process.stdout.write('remaining connections closed successfully!\n')
    process.exit()
  })
  setTimeout(() => {
    process.stderr.write(
      'Could not close connections in time, forcing shutting down\n'
    )
    process.exit()
  }, 9 * 1000)
}
process.on('SIGTERM', gracefulShutdown)
process.on('SIGINT', gracefulShutdown)