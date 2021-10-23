# cypress-multiple-sql
 Cypress connecting to multiple SQL Databases using cypress-sql-server

## Install cypress

 - Command: `npm install --save-dev cypress`
 - Url:  https://www.npmjs.com/package/cypress
 
### Create first test file
On the root of the project create the file two_connection.js (example) under the structure of folders:
- cypress\integration\two_connection.js

After creation the folder structure should be the same as cypress default as shown below:

	node_modules
	 cypress
		fixtures
			example.json
		integration
			two_connection.js
		plugins
			index.js
		support
			commands.js
			index.js

## Install cypress-sql-server
  - Command: `npm install --save-dev cypress-sql-server`
  - URL: https://www.npmjs.com/package/cypress-sql-server
  
### Configuration
- Follow the configuration steps under https://www.npmjs.com/package/cypress-sql-server#configure;

### Customization
The default usage of cypress-sql-server is through the command...
`cy.sqlServer('SELECT 1')`
...but we can achieve the same results using **cy.task**.

#### Insert second database config
1.  Open the file cypress.json;
2. Insert a second "db" configuration separated by comma and change its name (we used the dbSecondary as name);
3. The file should contain:
 		{
			"db": {
					...
			},
			"dbSecondary": {
					...
			}
		}

4. Open the file "support\index.js"
5. Insert the command below between "sqlServer.loadDBPlugin" and "on('task, tasks)";
`tasks['sqlSecondary:execute'] = sqlServer.loadDBPlugin(dbConfig.dbSecondary)['sqlServer:execute'];`.
6. The module should be as show belown:
		module.exports = (on, config) => {
  			tasks = sqlServer.loadDBPlugin(dbConfig.db);
 	 		tasks['sqlSecondary:execute'] = sqlServer.loadDBPlugin(dbConfig.dbSecondary)['sqlServer:execute'];
  			on('task', tasks);
		}

## Usage
Open the file **cypress\integration\two_connection.js** to see an example.