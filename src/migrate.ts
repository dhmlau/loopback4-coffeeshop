import {Loopback4CoffeeshopApplication} from './application';

export async function migrate(args: string[]) {
  const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
  console.log('Migrating schemas (%s existing schema)', existingSchema);

  const app = new Loopback4CoffeeshopApplication();
  await app.boot();

  // Note: The order of the database tables creation is important,
  // because we need to have `CoffeeShop` table created first
  // in order to add the foreign key constraints.
  // await app.migrateSchema({existingSchema});
  await app.migrateSchema({
    existingSchema: existingSchema,
    models: ['CoffeeShop', 'Review', 'Income'],
  });

  // Connectors usually keep a pool of opened connections,
  // this keeps the process running even after all work is done.
  // We need to exit explicitly.
  process.exit(0);
}

migrate(process.argv).catch(err => {
  console.error('Cannot migrate database schema', err);
  process.exit(1);
});
